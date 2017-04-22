/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
'use strict';

import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Category} from './Category';
import IDatabaseEntity = require("./IDatabaseEntity");

@Entity()
export class Example implements IDatabaseEntity.IDatabaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    client: string;


    @Column()
    url: String;



    @ManyToOne(type => Category, category => category.examples)
    category: Category;
}
