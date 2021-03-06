import { Entity, Property } from "@mikro-orm/core";
import { BaseEntity } from './base.entity';


@Entity()
export class UserEntity extends BaseEntity {
    @Property()
    name!: string

    @Property()
    username!: string

    @Property()
    email!: string

    @Property()
    admin!: boolean

    constructor() {
        super();
    }
}