module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.container', 'Yar Pirate!')
      .end();
  }
}
