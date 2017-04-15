/**
 * Created by Lukas on 14.04.2017.
 */

import {Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Permission} from './Permission';

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    color: string;

    @ManyToMany(type => Role, permission => permission.role)
    @JoinColumn()
    permissions: Permission[] = [];
}
