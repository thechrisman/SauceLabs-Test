var assert = require('assert'),
    webdriver = require('selenium-webdriver'),
    makeSuite = require('../util/helpers').makeSuite;

makeSuite('Go to SkyLifeSouthLake.com', function() {

  it('should go to SkyLifeSouthLake.com', function(done) {
    driver.get('http://skylifesouthlake.com/');

    driver.getTitle().then(function(title) {
      assert.equal(title,'Template - SkyLife');
      done();
    });
  });

});
