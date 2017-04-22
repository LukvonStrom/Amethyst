/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
'use strict';

import {Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from './User';
import {Product} from './Product';
import {Status} from './Status';
import IDatabaseEntity = require("./IDatabaseEntity");

@Entity()
export class Order implements IDatabaseEntity.IDatabaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    notes: string;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    @OneToOne(type => Product)
    @JoinColumn()
    product: Product;

    @OneToOne(type => Status)
    @JoinColumn()
    status: Status;

    @CreateDateColumn()
    createdAt: Date;
}
