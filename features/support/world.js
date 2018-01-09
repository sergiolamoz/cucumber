'use strict';

var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
    .forBrowser('firefox')
    .build();
}

function setLogger() {
  var logger = require('tracer');
    global.logger = require('tracer').colorConsole(
      {
        level: "trace",
        format: "[{{timestamp}}] [{{title}}] [{{file}}:{{line}}] - {{message}}",
        dateformat: "yyyy-mm-dd HH:MM:ss.l"
      }
    );  
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld);
  setLogger();
})