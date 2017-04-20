/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
'use strict';
// TODO: Add Color, percentage

import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Status {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;
}
