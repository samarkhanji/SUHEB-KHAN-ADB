const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
                name: "love-you",
                version: "1.0.1",
                hasPermssion: 0,
                credits: "AADI BABU",
                description: "no prefix",
        usePrefix: false,
                commandCategory: "No command marks needed",
                usages: "Yo Yo",
                cooldowns: 5,
};

const gifs = [
                "https://i.imgur.com/6oLe6hq.gif",
                "https://i.imgur.com/0Ua2dqK.gif",
                "https://i.imgur.com/Y628o1e.gif",
                "https://i.imgur.com/Ucq5qW0.gif",
                "https://i.imgur.com/VMMK7Lp.gif"
];

const messages = [
                "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐬𝐮𝐡𝐞𝐛 𝐤𝐡𝐚𝐧 \n──────────────────\n\n🩷 🖤 𝐌𝐄𝐑𝐀 𝐁𝐀𝐁𝐘 𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 😘😘\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐬𝐮𝐡𝐞𝐛 𝐤𝐡𝐚𝐧 \n──────────────────\n\n🩷 🖤 𝐌𝐄𝐑𝐀 𝐁𝐀𝐁𝐘 𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 😘😘\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐬𝐮𝐡𝐞𝐛 𝐤𝐡𝐚𝐧 \n──────────────────\n\n🩷 🖤 𝐌𝐄𝐑𝐀 𝐁𝐀𝐁𝐘 𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 😘😘\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐬𝐮𝐡𝐞𝐛 𝐤𝐡𝐚𝐧 \n──────────────────\n\n🩷 🖤 𝐌𝐄𝐑𝐀 𝐁𝐀𝐁𝐘 𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 😘😘\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐬𝐮𝐡𝐞𝐛 𝐤𝐡𝐚𝐧 \n──────────────────\n\n🩷 🖤 𝐌𝐄𝐑𝐀 𝐁𝐀𝐁𝐘 𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐓𝐎𝐎 𝐉𝐀𝐀𝐍𝐔 😘😘\n"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
                var { threadID, messageID } = event;
                var name = await Users.getNameUser(event.senderID);

                if (event.body.toLowerCase().startsWith("LOVE YOU") || 
                                event.body.toLowerCase().startsWith("love you") || 
                                event.body.toLowerCase().startsWith("Love you") || 
                                event.body.toLowerCase().startsWith("Love me") || 
                                event.body.toLowerCase().startsWith("love me")) { 

                                // Select random GIF and message
                                const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
                                const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
                                const downloadPath = path.join(__dirname, 'love-you-Gif-Images.gif');

                                // Download image from Imgur
                                request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                                                var msg = {
                                                                body: randomMessage,
                                                                attachment: fs.createReadStream(downloadPath)
                                                };
                                                api.sendMessage(msg, threadID, messageID);
                                                api.setMessageReaction("💋", event.messageID, (err) => {}, true);
                                });
                }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
