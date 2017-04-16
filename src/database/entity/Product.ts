/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
'use strict';

import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Category} from './Category';
import {Example} from './Example';

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('text')
    description: string;

    @Column('int')
    price: number;

    @OneToOne(type => Category)
    @JoinColumn()
    category: Category;

    @OneToOne(type => Example)
    @JoinColumn()
    examples: Example;
}
