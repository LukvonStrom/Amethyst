/**
 * Created by Lukas on 14.04.2017.
 */

import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Role} from './Role';

@Entity()
export class Permission {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Permission, role => role.permissions)
    roles: Role[] = [];

}
