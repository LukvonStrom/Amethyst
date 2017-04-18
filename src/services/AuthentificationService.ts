/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
 'use strict';
import * as passport from 'passport';

import * as UserManager from '../database/managers/UserManager';
import {User} from '../database/entity/User';
import {Strategy as LocalStrategy} from 'passport-local';
import {Request} from 'express';

module AuthentificationService {
    export function setupPassport(req, res, next) {
        'use strict';

        passport.serializeUser(function (user: User, done) {
            done(null, user.id);
        });

        passport.deserializeUser(function (id: number, done) {
            // Den User anhand der ID finden und zurückgeben
            UserManager
                .getUserbyId(id)
                .then(user => {
                    done(null, user);
                })
                .catch(err => {
                    done(err);
                });
        });

        passport.use('local-login', new LocalStrategy(
            (username, password, done) => {
                // TODO: Implement correct flashing when errors occur
                UserManager
                    .getUserbyName(username)
                    .then(user => {
                        if (!user) {
                            return done(null, false);
                        }

                        // Not sure if this works

                        UserManager.verifyPassword(user, password).then(res => {
                            if (res !== true) {
                                return done(null, false);
                            }
                        });

                        return done(null, user);

                    })
                    .catch((err) => {
                        done(err);
                    });
            }
        ));

        passport.use('local-signup', new LocalStrategy({
                passReqToCallback: true
            },
            (req: Request, name: string, password: string, done) => {
                UserManager.computeHash(password).then(hash => {
                    UserManager
                        .insertUser({name: name, password: hash, email: req.body('email')})
                        .then(user => {
                            return done(null, user);
                        })
                        .catch(err => {
                            done(err);
                        });
                });
            }
        ));

        next();

    }
}
export = AuthentificationService;
