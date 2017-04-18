/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
'use strict';

import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Role} from './Role';

@Entity()
export class Permission {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    method: string;

    @Column()
    originalUrl: string;

    @ManyToMany(type => Role, role => role.permissions)
    roles: Role[] = [];

}
