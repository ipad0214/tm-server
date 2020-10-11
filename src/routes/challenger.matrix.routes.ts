import { Request, Response } from "express";
import { ChallengerMatrixDatabase } from '../db/challenger.matrix';
import ChallengerMatrix from "../db/models/challenger.model";

export class ChallengerRoutes {
    private challengerMatrixDatabase: ChallengerMatrixDatabase = new ChallengerMatrixDatabase();
    constructor(
        
    ) {}

    public routes(app: any): void {
        app.route("/api/challenger/matrix") 
            .post((req: Request, res: Response) => {
                let { body }  = req;
                this.challengerMatrixDatabase.insert(body).then(result => {
                    res.status(200).send(result);
                });
            })
            .get(async (req: Request, res: Response) => {
                let { query } = req;
                if(query.id === undefined) {
                    let users = await this.challengerMatrixDatabase.find({});
                    return res.status(200).send(users);
                }

                this.challengerMatrixDatabase.single({id: Number(query.id)}).then((result: ChallengerMatrix) => {
                    return res.status(200).send(result);
                });
            })
            .put((req, res) => {
                let { query, body } = req;
                if(query.id === undefined) {
                    return res.status(201).send([]);
                }

                this.challengerMatrixDatabase.update(query.id, body).then(users => {
                    res.status(200).send(users);
                });
            })
            .delete((req, res) => {
                let { query } = req;
                if(query.id === undefined) {
                    return res.status(201).send([]);
                }

                this.challengerMatrixDatabase.delete(query.id).then(() => {
                    this.challengerMatrixDatabase.find({}).then(users => {
                        return res.status(200).send(users);
                    });
                });
            });
    }
} 
