module.exports = {
  'App renders'(browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 100)
      .assert.containsText('.container', 'Yar Pirate!')
      .end()
  }
}
