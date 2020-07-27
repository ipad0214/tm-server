import { Request, Response } from "express";
import { UserDatabase } from "./../db/user"
import { User } from "./../db/models/user.model";

export class UserRoutes {
    constructor(
        public userDatabase: UserDatabase,
    ) {}

    public routes(app: any): void {
        app.route("/api/tm/user") 
            .post((req: Request, res: Response) => {
                let { body } = req;
                this.userDatabase.insert(body).then(() => {
                    this.userDatabase.find({}).then(result => {
                        res.status(200).send(result);
                    });
                });
            })
            .get(async (req: Request, res: Response) => {
                let { query } = req;
                if(query.id === undefined) {
                    let users = await this.userDatabase.find({});
                    return res.status(200).send(driversWithCars);
                }

                this.userDatabase.single({id: Number(query.id)}).then((result: User) => {
                    
                });
            })
            .put((req, res) => {

            })
            .delete((req, res) => {

            });
    }
} 
