import { DatabaseEngine } from "./database.engine"
import { Tournament } from "./models/tournament.model";
import ChallengerMatrix from "./models/challenger.model";


export class ChallengerMatrixDatabase extends DatabaseEngine {
    constructor() {
        super("./db_files/challenger_matrix.db");
    }

    public insert(matrixEntry: ChallengerMatrix): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            matrixEntry.position = await this.createAutoIncrementId();
            this.db.insert(matrixEntry, (err, dataSets) => {
                if(err !== null) {
                    reject(false);
                }
                resolve(true);
            });
        });
    }

    public update(position: number, obj: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.db.update({ position: position }, obj, {}, function () {
                resolve(true);
            });
        });
    }

    public find(obj: any): Promise<Array<ChallengerMatrix>> {
        return new Promise<Array<ChallengerMatrix>>((resolve, reject) => {
            this.db.find(obj, (err, docs) => {
                if(err !== null) {
                    return reject(new Array<ChallengerMatrix>());
                }
                resolve(docs);
            });
        });
    }

    public single(obj: any): Promise<ChallengerMatrix> {
        return new Promise<ChallengerMatrix> ((resolve, reject) => {
             this.db.findOne(obj, (err, doc) => {
                if(err !== null) {
                    const obj: ChallengerMatrix = {
                        position: 0,
                        maxChallenge: 0,
                        minChallenge: 0
                    }
                    return reject(obj);
                }

                resolve(doc);
             });
        });
    }

    public delete(position: number): Promise<boolean> {        
        return new Promise<boolean>((resolve, reject) => {
            this.db.remove(position, {}, (err, removedSets) => {
                if(err != null) {
                    reject(false);
                    return;
                }

                resolve(true);
            });
        });
    }
}
