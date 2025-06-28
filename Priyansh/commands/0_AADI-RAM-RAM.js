const fs = require("fs");
module.exports.config = {
	name: "ram",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "AADI BABU",
	description: "THIS BOT IS MR AADI SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Ram") ||
     react.includes("Jay shree Ram") || react.includes("Jay shree ram") || react.includes("Jay Shree Ram") ||
react.includes("jay shree ram") ||
react.includes("JAY SHREE RAM")) {
		var msg = {
				body: `𝐎𝐰𝐧𝐞𝐫 ➻  ────  𝐬𝐮𝐡𝐞𝐛 𝐤𝐡𝐚𝐧__🥰\n\n< ────────────────── >\n 𝐌𝐀𝐈𝐍 𝐓𝐎 𝐒𝐇𝐑𝐄𝐄 𝐑𝐀𝐌 𝐉𝐈  𝐊𝐀 𝐃𝐄𝐄𝐖𝐀𝐍𝐀 𝐇𝐔 𝐏𝐘𝐀𝐑 𝐒𝐄 𝐁𝐎𝐋𝐎 𝐉𝐀𝐘 𝐒𝐇𝐑𝐄𝐄 𝐑𝐀𝐌 😍 ❤️`,attachment: fs.createReadStream(__dirname + `/noprefix/#ram_#ramlalaa_#ayodhya_#siyaram_in_2024___Ram_photos,_Shree_ram_photos,_Shri_ram_photo(360P).mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
