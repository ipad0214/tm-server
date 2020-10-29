import { Request, Response } from "express";
import { DI } from "./../db/db.controller";

export class CourtRoutes {
    constructor() {}

    public routes(app: any): void {
        app.route("/api/court/:court?") 
            .post((req: Request, res: Response) => {
                
            })
            .get(async (req: Request, res: Response) => {

            })
            .put((req, res) => {
                
            })
            .delete((req, res) => {
                
            });
    }
} 
