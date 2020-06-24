import { Request, Response } from "express";

export class AdminRoutes {
    constructor(
        
    ) {}

    public routes(app: any): void {
        app.route("/admin") 
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
