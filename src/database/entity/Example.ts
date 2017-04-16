/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
'use strict';

import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Category} from './Category';

@Entity()
export class Example {

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
