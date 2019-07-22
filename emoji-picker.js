#!/usr/bin/env node

const emoji = require('node-emoji');
const {log} = console;

if (process.argv.length <= 2) {
    log(`Usage: ${__filename} emoji_text`);
    process.exit(-1);
}

const result = emoji.search(process.argv[2]);

result.forEach(item => {
    log(`${item.emoji}  ${item.key}`);
});