import { EntityManager, EntityRepository, MikroORM } from "@mikro-orm/core";
import Axios from "axios";
import { ChallengerEntity, UserEntity } from "./entities";
import { CourtEntity } from "./entities/court.entity";

export const DI = {} as {
    orm: MikroORM,
    em: EntityManager,
    userRepository: EntityRepository<UserEntity>,
    challengerRepository: EntityRepository<ChallengerEntity>,
    courtRepository: EntityRepository<CourtEntity>
  };

const DEFAULT_INTERVAL = 30 * 60 * 1000;

export class DatabaseService {
    constructor(
        ) {}

    public initOrm(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            MikroORM.init().then(orm => {
                DI.orm = orm;
                DI.em = orm.em;
                DI.userRepository = DI.orm.em.getRepository(UserEntity);
                DI.challengerRepository = DI.orm.em.getRepository(ChallengerEntity);
                DI.courtRepository = DI.orm.em.getRepository(CourtEntity);
                resolve();
            });
        })
    }
}