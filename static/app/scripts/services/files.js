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
        return $http.get('/api/files/', {headers: {Accept: "application/json"}});
      },
      remove: function (name) {
        return $http['delete']('/api/files/' + name);
      },
      upvote: function (name) {
        return $http.post('/api/upvote/' + name);
      },
      downvote: function (name) {
        return $http.post('/api/downvote/' + name);
      }
    };
  });
