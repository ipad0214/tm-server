import { DatabaseEngine } from "./database.engine"
import { User } from "./models/user.model";


export class UserDatabase extends DatabaseEngine {
    constructor() {
        super("./db_files/user.db");
    }

    public insert(user: User): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            user.id = await this.createAutoIncrementId();
            this.db.insert(user, (err: any, dataSets: any) => {
                if(err !== null) {
                    console.log(err);
                    reject([]);
                }
                resolve(dataSets);
            });
        });
    }

    public update(obj: any): Promise<Array<User>> {
        return new Promise<Array<User>>((resolve, reject) => {
            this.db.update({_id: obj._id}, {obj}, {}, (err, updatedRows) => {
                console.log(updatedRows);
                resolve(updatedRows);
            });
        });
    }

    public find(obj: any): Promise<Array<User>> {
        return new Promise<Array<User>>((resolve, reject) => {
            this.db.find(obj, (err, docs) => {
                if(err !== null) {
                    return reject(new Array<User>());
                }
                resolve(docs);
            });
        });
    }

    public single(obj: any): Promise<User> {
        return new Promise<User> ((resolve, reject) => {
             this.db.findOne(obj, (err, doc) => {
                if(err !== null) {
                    return reject(new User());
                }

                resolve(doc);
             });
        });
    }

    public delete(id: string): Promise<boolean> {        
        return new Promise<boolean>((resolve, reject) => {
            this.db.remove({_id: id}, {}, (err, removedSets) => {
                if(err != null) {
                    reject(false);
                    return;
                }

                resolve(true);
            });
        });
    }
}
