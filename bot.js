// Require dependencies
const { Client } = require('discord.js');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create a bot instance
const bot = new Client();

// Log our bot in
bot.login(process.env.DISCORD_BOT_TOKEN);

// Log to console when bot is ready
bot.on('ready', () => {
  console.log(`${bot.user.username} is up and running!`);
});

// Reply to user messages
bot.on('message', async (message) => {
  // Do not reply if message was sent by bot
  if (message.author.bot) return;

  // Reply to !ping
  if (message.content.startsWith('!ping')) {
    return message.reply('I am working!');
  }
});
