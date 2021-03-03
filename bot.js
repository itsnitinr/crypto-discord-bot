// Require dependencies
const { Client } = require('discord.js');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create a bot instance
const bot = new Client();

// Log our bot in
bot.login(process.env.DISCORD_BOT_TOKEN);
