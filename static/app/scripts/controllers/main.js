'use strict';

/**
 * @ngdoc function
 * @name fileBrowserApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fileBrowserApp
 */
angular.module('fileBrowserApp')
  .controller('MainCtrl', function ($scope, Files, Settings) {

    var regex = new RegExp(Settings.filter);
    var loadData = function () {
      Files.get().success(function (response) {
        $scope.files = response;
      });
    };

    loadData();
    $scope.downloadUrl = Settings.downloadUrl;

    $scope.useFilter = true;

    $scope.toggleFilter = function() {
      $scope.useFilter = $scope.useFilter ? false : true;
    };

    $scope.files = [
    ];

    $scope.filterMethod = function(file) {
      return !$scope.useFilter || regex.test(file.name);
    };

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
