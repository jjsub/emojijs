#! /usr/bin/env node

const emoji = require('node-emoji');

const { log } = console;
log("This is the Logf", process.argv);
if (process.argv.length <= 2) {
  log(`Usage: ${__filename} emoji_text`);
  process.exit(-1);
}

// const result = emoji.emojify(process.argv[2]);

const [, , ...argArray] = process.argv;
const message = argArray.join(' ');
const result = emoji.emojify(message);

log(result);