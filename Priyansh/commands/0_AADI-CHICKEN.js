const fs = require("fs");
module.exports.config = {
        name: "chicken",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU",///don't change my Credit Coz i Edit 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "chicken",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("chicken")==0 || event.body.indexOf("Chicken")==0 || event.body.indexOf("CHICKEN")==0 || event.body.indexOf("CHIKAN")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐔𝐇𝐄𝐁 𝐊𝐇𝐀𝐍 𝐊 \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐂𝐡𝐢𝐜𝐇𝐞𝐍\n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/62306739ed186731b1f646029335e853.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐔", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
