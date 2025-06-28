const fs = require("fs");
module.exports.config = {
	name: "GOLGAPPE",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "AADI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Golgappe")==0 || event.body.indexOf("Golgappa")==0 || event.body.indexOf("Pani puri")==0 || event.body.indexOf("PANI PURI")==0) {
		var msg = {
				body: "𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐔𝐇𝐄𝐁 𝐊𝐇𝐀𝐍 \n 🩷 𝐘𝐀 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐆𝐎𝐋𝐆𝐀𝐏𝐏𝐀 𝐊𝐇𝐀𝐎 🩷\n\n< ────────────────── >",
				attachment: fs.createReadStream(__dirname + `/noprefix/Pin_on_Pins_by_you(360P)(1).mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
