import { Request, Response } from "express";
import { UserDatabase } from "./../db/user"
import { User } from "./../db/models/user.model";

export class UserRoutes {
    constructor(
        public userDatabase: UserDatabase,
    ) {}

    public routes(app: any): void {
        app.route("/api/user") 
            .post((req: Request, res: Response) => {
                let { body } = req;
                console.log(body);
                this.userDatabase.insert(body).then(() => {
                    this.userDatabase.find({}).then(result => {
                        res.status(200).send(result);
                    });
                }).catch((error: any) => {
                    console.log(error);
                    res.status(201).send(error);
                });
            })
            .get(async (req: Request, res: Response) => {
                let { query } = req;
                if(query.id === undefined) {
                    let users = await this.userDatabase.find({});
                    return res.status(200).send(users);
                }

                this.userDatabase.single({id: Number(query.id)}).then((result: User) => {
                    return res.status(200).send(result);
                });
            })
            .put((req, res) => {

            }) 
            .delete(async (req, res) => {
                let { query } = req;
                if(query.id === undefined) {
                    return res.status(201).send([]);
                }

                this.userDatabase.delete(query.id).then(() => {
                    this.userDatabase.find({}).then(users => {
                        return res.status(200).send(users);
                    });
                });
            });
    }
} 
