'use strict';

/**
 * @ngdoc function
 * @name fileBrowserApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fileBrowserApp
 */
angular.module('fileBrowserApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
