/**
 * Created by Lukas on 14.04.2017.
 */

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
