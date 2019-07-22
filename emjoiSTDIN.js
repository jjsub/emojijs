#!/usr/bin/env node

const readline = require('readline');
const emoji = require('node-emoji');

const {log} = console;

if (process.stdin.isTTY || process.env.STDIM === '0') {
    log(process.argv)
    if (process.argv.length <= 2) {
        log(`Usage: ${__filename} emoji_text`);
        process.exit(-1);
    }
    const [,, args] = process.argv;
    const message = args.join(' ');
    const result = emoji.emojify(message);
    log(result);
} else {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', line => {
        const result = emoji.emojify(line);
        log(result);
    });
}

// log("process.stdin", process.stdin);
// log("process.stdout", process.stdout);

// Note: run $ cat message.txt | node emjoiSTDIN.js 