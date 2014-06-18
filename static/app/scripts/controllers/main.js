'use strict';

/**
 * @ngdoc function
 * @name fileBrowserApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fileBrowserApp
 */
angular.module('fileBrowserApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
