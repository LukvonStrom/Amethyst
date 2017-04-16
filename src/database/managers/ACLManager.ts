/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
'use strict';

import {Role} from '../entity/Role';
import {Permission} from '../entity/Permission';
import {getEntityManager, Repository} from 'typeorm';
import {User} from '../entity/User';
import * as SQLConnection from '../SQLConnection';


module ACLManager {

    function getUserRepository(): Promise<Repository<User>> {
        return new Promise((resolve, reject) => {
            SQLConnection.doconnection().then(connection => {
                resolve(getEntityManager().getRepository(User));
            });
        });
    }

    function getPermissionRepository(): Promise<Repository<Permission>> {
        return new Promise((resolve, reject) => {
            SQLConnection.doconnection().then(connection => {
                resolve(getEntityManager().getRepository(Permission));
            });
        });
    }

    function getRoleRepository(): Promise<Repository<Role>> {
        return new Promise((resolve, reject) => {
            SQLConnection.doconnection().then(connection => {
                resolve(getEntityManager().getRepository(Role));
            });
        });
    }

    export function getUserRolebyId(id: number): Promise<Role> {
        return new Promise((resolve, reject) => {
            this.getUserRepository().then(repo => {
                resolve(repo.findOneById(id, {
                    'alias': 'user',
                    innerJoinAndSelect: {
                        'role': 'user.role'
                    }
                }));
            });
        });
    }

    export function getPermissionbyRole(id: number): Promise<Permission> {
        return new Promise((resolve, reject) => {
            this.getRoleRepository().then(repo => {
               resolve(
                   repo.findOneById(id, {
                       'alias': 'role',
                       innerJoinAndSelect: {
                           'permission': 'role.permissions'
                       }
                   })
               );
            });
        });
    }
}

export = ACLManager;
