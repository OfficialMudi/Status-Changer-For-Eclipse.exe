/**        
  GIT : https://github.com/OfficialMudi
  All My Socials : https://guns.lol/mudi.official
  Twitch : https://www.twitch.tv/mudistream
 * **********************************************
 *   Code by Mudi
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
  res.send('Your Bot Status Changed!✨');
});
app.listen(port, () => {
  console.log(`🔗 Giocando A: https://guns.lol/mudi.official`);
  console.log(`🔗 Powered By Mudi`);
});


const statusMessages = ["🔍Eclipse.Exe🔍","💻ScreenShare💻","🔗.gg/eclipse-exe🔗","😈Bot Made By Mudi😈"];


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
  GIT : https://github.com/OfficialMudi
  All My Socials : https://guns.lol/mudi.official
  Twitch : https://www.twitch.tv/mudistream
 * **********************************************
 *   Code by Mudi
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
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot Ready As: ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️Thank's For Using Code`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✨Made By Mudi`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 10000);
});

login();

/**        
  GIT : https://github.com/OfficialMudi
  All My Socials : https://guns.lol/mudi.official
  Twitch : https://www.twitch.tv/mudistream
 * **********************************************
 *   Code by Mudi
 * **********************************************
 */
