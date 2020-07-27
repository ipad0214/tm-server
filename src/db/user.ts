import { DatabaseEngine } from "./database.engine"
import { User } from "./models/user.model";


export class UserDatabase extends DatabaseEngine {
    constructor() {
        super("./db_files/user.db");
    }

    public insert(user: User): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            user.id = await this.createAutoIncrementId();
            this.db.insert(User, (err, dataSets) => {
                if(err !== null) {
                    reject(false);
                }
                resolve(true);
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

    public delete(id: number): Promise<boolean> {        
        return new Promise<boolean>((resolve, reject) => {
            this.db.remove(id, {}, (err, removedSets) => {
                if(err != null) {
                    reject(false);
                    return;
                }

                resolve(true);
            });
        });
    }
}
