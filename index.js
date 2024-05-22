const token = '7062032157:AAHnCTSmxvEm7uytG5Yn6UGl3n24rHIh6m0'
const webAppUrl = 'https://fc.dev.ipst-dev.com/'

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if(text === '/start') {
    await bot.sendMessage( chatId,'adsfgadfg', { 
        reply_markup: {
            keyboard: [
                [{text: '/start'}]
            ]
        }
    }) 
    await bot.sendMessage( chatId,'adsfgadfg',  { 
        reply_markup: {
            inline_keyboard: [
                [{text: 'qwe', web_app: {url: webAppUrl}}]
            ],
        }
    }) 
  }
});