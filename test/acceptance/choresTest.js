module.exports = {
  'Chores Index renders'(browser) {
    browser
      .url('http://localhost:8080/chores')
      .waitForElementVisible('body', 100)
      .assert.containsText('.container', 'Your Chores')
      .end()
  }
}
