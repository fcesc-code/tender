"use strict";

var chalk = require('chalk');

function printTimeLog(file, method) {
  var now = new Date();
  var timeStamp = "".concat(now.getHours(), ":").concat(now.getMinutes(), ":").concat(now.getSeconds(), ":").concat(now.getMilliseconds());
  var text = "".concat(chalk.blueBright(timeStamp), " ").concat(chalk.greenBright(file), " ").concat(method, " method called successfully");
  console.log(text);
}

;
module.exports = printTimeLog;