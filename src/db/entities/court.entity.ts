import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from './base.entity';


@Entity()
export class CourtEntity extends BaseEntity {
    @Property()
    court!: number;

    @Property()
    userOne!: string;

    @Property()
    userTwo!: string;

    @Property()
    single!: boolean;

    @Property()
    userThree!: string;

    @Property()
    userFour!: string;

    @Property()
    startTime!: Date;

    @Property()
    endTime!: Date;

    constructor() {
        super();
    }
}