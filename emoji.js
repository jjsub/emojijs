#! /usr/bin/env node

const emoji = require('node-emoji');

const { log } = console;
// log("This is the Logf", process.argv);
if (process.argv.length <= 2) {
  log(`Usage: ${__filename} emoji_text`);
  process.exit(-1);
}

// const result = emoji.emojify(process.argv[2]);


//NOTE: The first two commas enables us to ignore and throw away the first two elements of the process.argv to array. We could have also done this:
const [, , ...argArray] = process.argv;
// NOTE: process.argv = to the argument that are pass to the node process when the job is started on the terminal i.e. node file.js arg...
const message = argArray.join(' ');
const result = emoji.emojify(message);

log(result);