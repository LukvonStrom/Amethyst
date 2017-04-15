/**
 * Created by Lukas on 11.04.2017.
 */
import * as passport from 'passport';

import * as UserManager from '../database/managers/UserManager';
import {User} from '../database/entity/User';
import {Strategy as LocalStrategy} from 'passport-local';

module AuthService {
    'use strict';

    passport.serializeUser(function(user: User, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id: number, done) {
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

                  if (!UserManager.verifyPassword(user, password)) {
                      return done(null, false);
                  }

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
        (req, name, password, done) => {
        UserManager
        // This won't work, as an email is required too.
        // TODO: Get the Email from Request body
            .insertUser({name: name, password: password})
            .then(user => {
                return done(null, user);
            })
            .catch(err => {
                done(err);
            });
        }
        ));


}
export = AuthService;
