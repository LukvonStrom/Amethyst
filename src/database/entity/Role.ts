/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
'use strict';

import {Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Permission} from './Permission';
import IDatabaseEntity = require("./IDatabaseEntity");

@Entity()
export class Role implements IDatabaseEntity.IDatabaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    color: string;

    @ManyToMany(type => Permission, permission => permission.roles)
    @JoinColumn()
    permissions: Permission[] = [];
}
