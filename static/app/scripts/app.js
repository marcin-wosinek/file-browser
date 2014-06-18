'use strict';

/**
 * @ngdoc overview
 * @name fileBrowserApp
 * @description
 * # fileBrowserApp
 *
 * Main module of the application.
 */
angular
  .module('fileBrowserApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers.common.headers = {Accept: "application/json"};
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
