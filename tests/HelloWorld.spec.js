const browser = require('protractor').browser;

describe('Hello World Test Suite', () => {
  it('should have a title', () => {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Hello World');
  });
});
