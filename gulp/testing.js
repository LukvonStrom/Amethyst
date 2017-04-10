/**
 *
 * This file is part of the Amethyst Project. Modification is on your own risk.
 *
 */
 "use strict";


let gulp = require('gulp'),
  $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'q', 'run-sequence', 'del']
  }),
  environment = require('./lib/environment.js'),
  Jasmine = require('jasmine'),
  jasmine = new Jasmine();


// Configure Jasmine
jasmine.loadConfigFile('src/spec/support/jasmine.json');

gulp.task('Tests', false, () => {
  let deferred = $.q.defer();

  jasmine.onComplete(function (err) {
    return deferred.resolve();
  });

  jasmine.execute();

  return deferred.promise;
});

// Main test tasks, choose between mocha or jasmine (or keep both)
gulp.task('test', 'Run unit tests (once)', ['build'], () => {
  gulp.start('Tests');
});
gulp.task('testWithoutBuild', 'Run unit tests(once) without building application', ['Tests'])
