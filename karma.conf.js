// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        // bower:js
        'bower_components/jquery/dist/jquery.js',
        'bower_components/es5-shim/es5-shim.js',
        'bower_components/json3/lib/json3.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-cookies/angular-cookies.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'bower_components/lodash/dist/lodash.compat.js',
        'bower_components/restangular/dist/restangular.js',
        'bower_components/textAngular/dist/textAngular.min.js',
        'bower_components/firebase/firebase.js',
        'bower_components/firebase-simple-login/firebase-simple-login.js',
        'bower_components/angularfire/angularfire.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/moment/moment.js',
        'bower_components/angular-moment/angular-moment.js',
        // endbower

        //add agnular-mocks for testing
        'bower_components/angular-mocks/angular-mocks.js',

        'app/app.js',
        'app/**/*.js',
        'app/components/**/*.js'
    ],

    // list of files / patterns to exclude
      exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
