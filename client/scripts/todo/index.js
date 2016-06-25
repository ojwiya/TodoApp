'use strict';
var angular = require('angular');
require('angular-ui-router');
require('angular-sanitize');
require('angular-animate');
require('ionic');
require('ionic-angular');
require('angular-material');
require('ng-cordova');
require('angular-ui-bootstrap');

var modulename = 'todo';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var app = angular.module(fullname, ['ui.router', 'ionic', 'ngCordova', 'ngMaterial']);
    // inject:folders start
    require('./services')(app);
    // inject:folders end
    app.namespace = app.namespace || {};

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: '/',
            template: require('./views/home.html')
        });
    };
    configRoutes.$inject = configRoutesDeps;
    app.config(configRoutes);

    return app;
};