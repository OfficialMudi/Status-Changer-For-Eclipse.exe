/**        
  GIT : https://github.com/MudiOnToppe/Bot-Ghost-Status-Changer-By-MudiOnTop
  All My Socials : https://linktr.ee/mudiontop
  Twitch : https://www.twitch.tv/mudiontop
 * **********************************************
 *   Code by MudiOnTop
 * **********************************************
 */



const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Lo Status Del Tuo Bot E Cambiato!✨');
});
app.listen(port, () => {
  console.log(`🔗 Giocando A: discord.gg/Hmm8aXRDM8`);
  console.log(`🔗 Powered By MudiOnTop`);
});


const statusMessages = ["🤖Bot MCAI🤖","🔥Messicano City AI🔥","🔗https://discord.gg/Hmm8aXRDM8🔗","👑Best Fivem Server👑","😈Bot Made By MudiOnTop😈"];


let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

/**        
  GIT : https://github.com/MudiOnToppe/Bot-Ghost-Status-Changer-By-MudiOnTop
  All My Socials : https://linktr.ee/mudiontop
  Twitch : https://www.twitch.tv/mudiontop
 * **********************************************
 *   Code by MudiOnTop
 * **********************************************
 */


function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}],
    status: 'dnd',
  });

  
  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Il Bot E Pronto Come: ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️Thank's For Using Code`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✨Made By MudiOnTop`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 10000);
});

login();

/**        
  GIT : https://github.com/MudiOnToppe/Bot-Ghost-Status-Changer-By-MudiOnTop
  All My Socials : https://linktr.ee/mudiontop
  Twitch : https://www.twitch.tv/mudiontop
 * **********************************************
 *   Code by MudiOnTop
 * **********************************************
 */
