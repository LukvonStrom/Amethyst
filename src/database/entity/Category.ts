/**
 * Created by Lukas on 14.04.2017.
 */

import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Example} from './Example';

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Example, example => example.category)
    examples: Example[] = [];
}