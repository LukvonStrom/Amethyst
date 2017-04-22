/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
'use strict';

import {Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Role} from './Role';
import IDatabaseEntity = require("./IDatabaseEntity");

@Entity()
export class User implements IDatabaseEntity.IDatabaseEntity {

    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToOne(type => Role)
    @JoinColumn('int')
    role: Role;
}
