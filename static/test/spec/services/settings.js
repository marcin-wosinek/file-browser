'use strict';

describe('Service: Settings', function () {

  // load the service's module
  beforeEach(module('fileBrowserApp'));

  // instantiate service
  var Settings;
  beforeEach(inject(function (_Settings_) {
    Settings = _Settings_;
  }));

  it('should do something', function () {
    expect(!!Settings).toBe(true);
  });

});
