/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
'use strict';
// import * as ACLManager from '../database/managers/ACLManager';
import {Permission} from '../database/entity/Permission';

module AuthorizationService {

    export function authorize(req, res, next) {
        // Not sure if this works. If not access to the UserManager
        /*
        ACLManager.getUserRolebyId(req.user.id).then(role => {
            ACLManager.getPermissionbyRole(role.id).then(permissions => {
                searchPerm(permissions);
            })
        });*/
            searchPerm(req.user.role.permissions);

            function findMatchingACLPerm(permission) {
                return (permission.method === req.method && permission.originalUrl === req.originalUrl);
            }

            function searchPerm(permissions: Permission[]) {
                if (permissions.find (findMatchingACLPerm) === undefined) {
                    res.status(403).send('Not allowed!');
                    res.end();
                }
            }


            next();
    }

}

export = AuthorizationService;
