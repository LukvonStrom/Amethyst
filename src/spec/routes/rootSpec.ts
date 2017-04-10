/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */

import * as request from 'supertest';
import app from './../../app';

describe('Root Setup Test', () => {

  it('should get JSON from deliverSlogan', done => {
    request(app)
      .get('/')
      .expect({'Amethyst': 'Amethyst is a simple shop software designed especially for artists.'})
      .end( (err, res) => {
        if (err) {
          done.fail(err);
        } else {
          done();
        }
      });
  });

  it('should get 404 from unknown route', done => {
    request(app)
      .get('/asodkoasd9923942ik3koadskoaksda9isd')
      .expect(404)
      .end( (err, res) => {
        if (err) {
          done.fail(err);
        } else {
          done();
        }
      });
  });

});
