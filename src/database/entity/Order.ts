/**
 * Created by Lukas on 14.04.2017.
 */

import {Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from './User';
import {Product} from './Product';
import {Status} from './Status';

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    @OneToOne(type => Product)
    @JoinColumn()
    product: Product;

    @OneToOne(type => Status)
    @JoinColumn()
    status: Status;

    @CreateDateColumn()
    createdAt: Date;
}