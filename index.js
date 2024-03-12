const { Client, Collection, Events, GatewayIntentBits, userMention } = require('discord.js');
require("dotenv").config()
const { clientId, token } = process.env;



const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.commands = new Collection();
const prefix = `!faucet cat`

client.on(Events.MessageCreate, async (interaction) => {
	const content =  interaction.content.trim();
	if (!content.startsWith(prefix) || interaction.author.id === clientId) return;
	const address = content.split(prefix)[1];
	console.log(interaction, 'MessageCreate');
	// readyClient
	/**
	 * @{领取成功的用户}，sending 1 SGR-1 token to {用户留的地址}
	 */
	const id = interaction.author.id;
	const user = userMention(id);
	await interaction.reply(`${user}，sending 1 SGR-1 token to {用户留的地址} v1.0`);
});

const discordStart = async() => {
  client.login(token);
}

module.exports = {
  discordStart
}
discordStart()