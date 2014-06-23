'use strict';

/**
 * @ngdoc service
 * @name fileBrowserApp.Settings
 * @description
 * # Settings
 * Service in the fileBrowserApp.
 */
angular.module('fileBrowserApp')
  .service('Settings', function Settings() {
    this.filter = '.*dmp$';
    this.downloadUrl = '/files/';
  });
