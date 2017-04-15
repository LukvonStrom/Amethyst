import {EntityManager, getEntityManager, Repository} from 'typeorm';
import {User} from '../entity/User';
import * as SQLConnection from '../SQLConnection';
import {Role} from '../entity/Role';
import {Permission} from '../entity/Permission';
/**
 * Created by Lukas on 14.04.2017.
 */

module UserManager {
    function getUserRepository(): Promise<Repository<User>> {
        return new Promise((resolve, reject) => {
            SQLConnection.doconnection().then(connection => {
                resolve(getEntityManager().getRepository(User));
            });
        });
    }

    export function getUsers(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            this.getUserRepository().then(repo => {
                resolve(repo.find());
            });
        });

    }

    export function getUserbyId(id: number): Promise<User> {
        return new Promise((resolve, reject) => {
            this.getUserRepository().then(repo => {
                resolve(repo.findOneById(id));
            });
        });
    }


    export function getUserbyName(name: string): Promise<User> {
        return new Promise((resolve, reject) => {
            this.getUserRepository().then(repo => {
                resolve(repo.findOne({name: name}));
            });
        });
    }


    export function insertUser(user: Object): Promise<User> {
        if (user.hasOwnProperty('name') &&
            user.hasOwnProperty('email') &&
            user.hasOwnProperty('password') ) {
            return new Promise((resolve, reject) => {
                this.getUserRepository().then(repo => {
                    resolve(
                        repo
                            .persist(user)
                    );
                });
            });
        }
    }

    export function verifyPassword(user: User, password: string): Boolean {
        // TODO: Implement Bcrypt
        return true;
    }



    }


export = UserManager;