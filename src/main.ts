import express from "express"
import * as bodyParser from "body-parser"
import { MainRoutes } from "./routes/main.routes";
import { AdminRoutes } from "./routes/admin.routes";
import { TournamentRoutes } from "./routes/tournament.routes";
import { UserRoutes } from "./routes/user.routes";

export class Main{

    constructor(
        private portNumber: number
    ) {
        this.app = express();
        this.config();
        this.adminRoutes.routes(this.app);
        this.userRoutes.routes(this.app);
        this.mainRoutes.routes(this.app);
        this.tournamentRoutes.routes(this.app);
    }

    public app: express.Application;
    public mainRoutes: MainRoutes = new MainRoutes();
    public adminRoutes: AdminRoutes = new AdminRoutes();
    public tournamentRoutes: TournamentRoutes = new TournamentRoutes();
    public userRoutes: UserRoutes = new UserRoutes();

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    public run() {
        this.app.listen(this.portNumber, '0.0.0.0', () => {
            console.info(`server started on port: ${this.portNumber}`);
        })
    }

} 