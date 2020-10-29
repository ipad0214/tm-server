import { Request, Response } from "express";
import { UserEntity } from "../db/entities";
import { DI } from "./../db/db.controller";

export class UserRoutes {
    constructor() {}

    public routes(app: any): void {
        app.route("/api/user/:id?") 
            .post((req: Request, res: Response) => {
                let { body, params } = req;
                if(!params.id) {
                    let newUser = new UserEntity();
                    newUser.name = body.name;
                    newUser.email = body.email;
                    newUser.timestamp = new Date();
                    newUser.username = body.userName;
                    newUser.admin = Boolean(body.admin);

                    DI.userRepository.persistAndFlush(newUser).then(result => {
                        console.log(result);
                        DI.userRepository.findAll().then(result => res.status(200).send(result));
                    });
                }
            })
            .get(async (req: Request, res: Response) => {
                if(!req.params.id) {
                    DI.userRepository.findAll().then(result => res.status(200).send(result));
                } else {
                    DI.userRepository.findOne({id: req.params.id}).then(result => res.status(200).send(result));
                }
            })
            .put(async (req, res) => {
  
            }) 
            .delete(async (req, res) => {
                let { query, params } = req;
            });
    }
} 
