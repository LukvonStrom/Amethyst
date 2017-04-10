/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
 'use strict';

// Load environment variables from file if present
import dotenv = require('dotenv');
dotenv.config({
  silent: true,
  path: 'src/.env'
});

// Boot server
import * as debug from 'debug';
import app from './app';

const port = process.env.PORT || 3000;
app.set('port', port);

app.listen(app.get('port'), () => {
  debug('Amethyst is listening on port ' + port);
}).on('error', err => {
  console.log('OOPS, Amethyyst was unable to start. Is the preferred Port in use?');
  console.log(err);
});
