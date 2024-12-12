const botPoll = require('strawpoll-bots').default;
const { join } = require('path');
console.log("Iniciando bot :)");


// Args: (url, optionID, protection, socksFilePath, amount)
botPoll('https://www.strawpoll.me/173https://woobox.com/nhm3q4/gallery/r-A7zexWblg11284', 300, true, join(__dirname, 'socks.txt'));
