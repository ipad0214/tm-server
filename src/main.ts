import express from "express"
import * as bodyParser from "body-parser"
import { MainRoutes } from "./routes/main.routes";
import { AdminRoutes } from "./routes/admin.routes";
import { TournamentRoutes } from "./routes/tournament.routes";
import { UserRoutes } from "./routes/user.routes";
import { ChallengerRoutes } from './routes/challenger.matrix.routes';
import { UserDatabase } from "./db/user";

const portNumber: number = 2229

export class Main{

    constructor(

    ) {
        this.app = express();
        this.config();
        this.adminRoutes.routes(this.app);
        this.userRoutes.routes(this.app);
        this.mainRoutes.routes(this.app);
        this.tournamentRoutes.routes(this.app);
    }

    public userDatabase = new UserDatabase();

    public app: express.Application;
    public mainRoutes: MainRoutes = new MainRoutes();
    public adminRoutes: AdminRoutes = new AdminRoutes();
    public tournamentRoutes: TournamentRoutes = new TournamentRoutes();
    public userRoutes: UserRoutes = new UserRoutes(this.userDatabase);

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    public run() {

        //this.userDatabase.delete(0);

        this.app.listen(portNumber, '0.0.0.0', () => {
            console.info(`server started on port: ${portNumber}`);
        })
    }

} 

const main = new Main();
main.run();
