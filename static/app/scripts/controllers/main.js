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
    var loadData = function () {
      Files.get().success(function (response) {
        $scope.files = response;
      });
    };

    loadData()

    $scope.files = [
    ];

    $scope.deleteFile = function (fileName) {
      Files.remove(fileName)
        .then(loadData);
    };

    $scope.upvoteFile = function (fileName) {
      Files.upvote(fileName)
        .then(loadData);
    };

    $scope.downvoteFile = function (fileName) {
      Files.downvote(fileName)
        .then(loadData);
    };
  });
