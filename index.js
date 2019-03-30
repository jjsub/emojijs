const emoji = require('node-emoji');

const { log } = console;

const pizza = emoji.get('pizza');
const message = `I like :tomato: souce on my :pizza:. !`;
const emojiMessage = emoji.emojify(message);
log(emojiMessage );
