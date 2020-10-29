import { Request, Response } from "express";
import { DI } from "./../db/db.controller";

export class ChallengerRoutes {
    constructor() {}

    public routes(app: any): void {
        app.route("/api/challenger/matrix") 
            .post((req: Request, res: Response) => {
                
            })
            .get(async (req: Request, res: Response) => {
                DI.challengerRepository.findAll().then(result => res.status(200).send(result));
            })
            .put((req, res) => {
                
            })
            .delete((req, res) => {
                
            });
    }
} 
