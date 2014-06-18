'use strict';

/**
 * @ngdoc function
 * @name fileBrowserApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fileBrowserApp
 */
angular.module('fileBrowserApp')
  .controller('MainCtrl', function ($scope, Files) {
    $scope.files = [
    ];

    Files.get().success(function (response) {
      $scope.files = response;
    });

    $scope.deleteFile = function (fileName) {
      Files.remove(fileName);
    };

    $scope.upvoteFile = function (fileName) {
      Files.upvote(fileName);
    };

    $scope.downvoteFile = function (fileName) {
      Files.downvote(fileName);
    };
  });
