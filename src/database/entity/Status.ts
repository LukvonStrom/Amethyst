/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
'use strict';

import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import IDatabaseEntity = require("./IDatabaseEntity");

@Entity()
export class Status implements IDatabaseEntity.IDatabaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    percentage: number;

    @Column()
    color: number;
}
