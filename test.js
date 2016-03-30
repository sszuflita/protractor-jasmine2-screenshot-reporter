
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');
    browser.wait(function() { return false }, 10000);
  });
});
