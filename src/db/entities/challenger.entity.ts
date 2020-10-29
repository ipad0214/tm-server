import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from './base.entity';


@Entity()
export class ChallengerEntity extends BaseEntity {
    @Property()
    user!: string

    @Property()
    position!: number

    constructor() {
        super();
    }
}