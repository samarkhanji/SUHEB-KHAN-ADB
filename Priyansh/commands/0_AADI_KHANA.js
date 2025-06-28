const fs = require("fs");
module.exports.config = {
        name: "khana-khao",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "AADI BABU",
        description: "THIS BOT IS MR AADI BABU",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("Dinner") ||
     react.includes("dinner") || react.includes("DINNER") || react.includes("KHANA") ||
react.includes("Khana") ||
react.includes("khana")) {
                var msg = {
                                body: `𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐔𝐇𝐄𝐁 𝐊𝐇𝐀𝐍\n\n\n𝐋𝐨 𝐁𝐚𝐁𝐲`,attachment: fs.createReadStream(__dirname + `/Messenger_creation_720544400368457.webp`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👻", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
