import { Request, Response } from "express";

export class MainRoutes {
    constructor(
        
    ) {}

    public routes(app: any): void {
        app.route("/main") 
            .post((req: Request, res: Response) => {
                let { body }  = req;

            })
            .get((req: Request, res: Response) => {
                
            })
            .put((req, res) => {

            })
            .delete((req, res) => {

            });
    }
} 
