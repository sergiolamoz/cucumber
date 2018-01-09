'use strict';

const seleniumWebdriver = require('selenium-webdriver');
const {defineSupportCode} = require('cucumber');
const {assert} = require('chai');

defineSupportCode(function({Given, When, Then}) {

  Given(/^a skipped step$/, async function() {
    return 'pending';
  });

  Given('I am on Revetinc registration page', async function() {
    await this.driver.get('https://dev2.revetinc.com/sign-in');
  });

  When('I click on {string}', async function(text) {
    let element = await this.driver.findElement({
      linkText: text
    });
	
    let location = await element.getLocation();
    let elementText = await element.getText();
    let elementIsDisplayed = await element.isDisplayed();
    logger.debug(`Координаты: ${location.x} - ${location.y}`);
    logger.debug(`Текст: ${elementText}`);
    logger.debug(`Видимость: ${elementIsDisplayed}`);
	
    await element.click();
  });

  Then('I should see {string}', async function(text) {
    let xpath = "//*[contains(text(),'" + text + "')]";
    let condition = seleniumWebdriver.until.elementLocated({
      xpath: xpath
    });
    await this.driver.wait(condition, 10);
	
    let currentUrl = await this.driver.getCurrentUrl();
    let title = await this.driver.getTitle();
    logger.debug(`title: ${title}`);
    logger.debug(`currentUrl: ${currentUrl}`);
  });
  
  Then('I fill the registration field', async function() {
    let firstNameField = await this.driver.findElement({xpath: "//input[@name='FirstName']"});
    let lastNameField = await this.driver.findElement({xpath: "//input[@name='LastName']"});
    let emailField = await this.driver.findElement({xpath: "//input[@name='UserName']"});
    let passwordField = await this.driver.findElement({xpath: "//input[@name='Password']"}); 
    let submitButton = await this.driver.findElement({xpath: "//button[@class='btn btn-primary btn-block']"});
	
	firstNameField.sendKeys("first_test_name");
	lastNameField.sendKeys("last_test_name");
	emailField.sendKeys("email.test21212344@mail.ru");
	passwordField.sendKeys("Test123%");
	submitButton.click();

    let currentUrl = await this.driver.getCurrentUrl();
    let title = await this.driver.getTitle();
    logger.debug(`title: ${title}`);
    logger.debug(`currentUrl: ${currentUrl}`);
  });

  Then('The page title is {string}', async function(string) {
    let title = await this.driver.getTitle();
    assert.equal(title, string);
  });
});