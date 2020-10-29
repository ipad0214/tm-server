import express from "express"
import * as bodyParser from "body-parser"
import { MainRoutes, AdminRoutes, TournamentRoutes, UserRoutes, ChallengerRoutes, CourtRoutes } from "./routes";
import { DatabaseService } from "./db/db.controller";

const portNumber: number = 2229

export class Main{

    constructor() {
        this.app = express();
        this.config();
        this.adminRoutes.routes(this.app);
        this.userRoutes.routes(this.app);
        this.mainRoutes.routes(this.app);
        this.tournamentRoutes.routes(this.app);
        this.challengerRoutes.routes(this.app);
        this.courtRoutes.routes(this.app);
        this.databaseService.initOrm();
    }

    public databaseService: DatabaseService = new DatabaseService();
    public app: express.Application;
    public mainRoutes: MainRoutes = new MainRoutes();
    public adminRoutes: AdminRoutes = new AdminRoutes();
    public tournamentRoutes: TournamentRoutes = new TournamentRoutes();
    public userRoutes: UserRoutes = new UserRoutes();
    public challengerRoutes: ChallengerRoutes = new ChallengerRoutes();
    public courtRoutes: CourtRoutes = new CourtRoutes();

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    public run() {
        this.app.listen(portNumber, '0.0.0.0', () => {
            console.info(`server started on port: ${portNumber}`);
        })
    }

} 

const main = new Main();
main.run();
