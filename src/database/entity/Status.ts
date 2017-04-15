/**
 * Created by Lukas on 14.04.2017.
 */

import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Status {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;
}
