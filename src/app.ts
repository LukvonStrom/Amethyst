/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
// Include dependencies
'use strict';

import * as express from 'express';
import * as logger from 'morgan';
import * as favicon from 'serve-favicon';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as exphbs from 'express-handlebars';
import * as express_session from 'express-session';
import 'reflect-metadata';
import * as passport from 'passport';

// Modular Route definitions
import * as rootRoute from './routes/root';

// Error handler service
import { development as DevelopmentErrorHandler, production as ProductionErrorHandler } from './services/errorHandler';
import * as authService from './services/AuthService';
import helmet = require("helmet");


// Main app
const app = express();

const AuthService = authService;


// TODO: Initialize Passport
// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express_session({secret: process.env.SECRET, resave: false, saveUninitialized: false }));
app.use(helmet());

app.use(passport.initialize());
app.use(passport.session());


// app.use(express.static(path.join(__dirname, 'public'))); //serve public files

// Register routes (as middleware layer through express.Router())
app.use(rootRoute);

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: Function) => {
    let err = new Error('Not Found');
    res.status(404);
    console.log('catching 404 error');
    return next(err);
});

// error handlers

// development error handler - will print stacktrace
// production error handler - no stacktraces leaked to user
if (app.get('env') === 'development') {
  app.use(DevelopmentErrorHandler);
} else {
  app.use(ProductionErrorHandler);
}

export default app;
