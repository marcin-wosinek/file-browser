'use strict';

/**
 * @ngdoc service
 * @name fileBrowserApp.Files
 * @description
 * # Files
 * Service in the fileBrowserApp.
 */
angular.module('fileBrowserApp')
  // AngularJS will instantiate a singleton by calling "new" on this function
  .service('Files', function Files($http) {
    return {
      get: function () {
        return $http.get('/files/', {headers: {Accept: "application/json"}});
      }
    };
  });
