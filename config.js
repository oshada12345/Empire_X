const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IzVwGJgI#eXwxV6MXboV1yucb_SYwODF3IAdqvYqumEBEKgJQ4O0",
ALIVE_IMG : process.env.ALIVE_IMG || "https://pomf2.lain.la/f/id9p5zqm.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃bot name 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : Bot Name",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    SESSION_ID: process.env.SESSION_ID || "IzVwGJgI#eXwxV6MXboV1yucb_SYwODF3IAdqvYqumEBEKgJQ4O0",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "94755773910",
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || "true",
    MODE: process.env.MODE || "private",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/r4decc.jpg",
    PREFIX: process.env.PREFIX || ".",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    OWNER_NAME: process.env.OWNER_NAME || "wolf",
    BOT_NAME: process.env.BOT_NAME || "wolf",
    MONGODB:
        process.env.MONGODB ||
        "mongodb+srv://Oshada2005:Oshada2005@cluster2005.kuyvoqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2005",
   CAPTION: process.env.CAPTION || "Made By Wolf",
    FOOTER: process.env.FOOTER || "Wolf",
};
