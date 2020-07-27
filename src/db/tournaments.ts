import { DatabaseEngine } from "./database.engine"
import { Tournament } from "./models/tournament.model";


export class UserDatabase extends DatabaseEngine {
    constructor() {
        super("./db_files/tournament.db");
    }

    public insert(user: Tournament): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            user.id = await this.createAutoIncrementId();
            this.db.insert(Tournament, (err, dataSets) => {
                if(err !== null) {
                    reject(false);
                }
                resolve(true);
            });
        });
    }

    public find(obj: any): Promise<Array<Tournament>> {
        return new Promise<Array<Tournament>>((resolve, reject) => {
            this.db.find(obj, (err, docs) => {
                if(err !== null) {
                    return reject(new Array<Tournament>());
                }
                resolve(docs);
            });
        });
    }

    public single(obj: any): Promise<Tournament> {
        return new Promise<Tournament> ((resolve, reject) => {
             this.db.findOne(obj, (err, doc) => {
                if(err !== null) {
                    return reject(new Tournament());
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
