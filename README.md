# crypto-discord-bot
A discord bot that fetches cryptocurrency prices and news.

| Command                            | Description                                                                      |
| ---------------------------------- |:-------------------------------------------------------------------------------: |
| !ping                              | Checks if the bot is online and working                                          |
| !price <crypto> <vs_currency>      | Fetches the price of a crypto with respect to another currency or cryptocurrency |
| !news                              | Fetches the latest news related to cryptocurrency                                |
| !help                              | Replies with all commands available and their description                        |

## To run the bot:
1. Clone the repo
2. Create an `.env` file and add `DISCORD_BOT_TOKEN` and `NEWS_API_KEY`
3. Run the bot using `node bot`

## Credits

[DiscordJS](https://discord.js.org/)
[CoinGecko](https://www.coingecko.com/)
[News API](http://newsapi.org/)
