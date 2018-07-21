var assert = require('assert'),
    webdriver = require('selenium-webdriver'),
    makeSuite = require('../util/helpers').makeSuite;

makeSuite('Enter a value in the search field', function () {

    it('should enter a value in the search field', function (done) {
        driver.get('http://skylifesouthlake.com/');

        var servicesTitleSection = driver.findElement(webdriver.By.id("services-title"));
        var title = servicesTitleSection.findElement(webdriver.By.tagName("h1"));

        title.getText().then(function (title) {
            assert.equal(title, 'Services provided');
            done();
        });
    });

});
