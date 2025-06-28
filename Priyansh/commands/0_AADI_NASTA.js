const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
                name: "nasta-you",
                version: "1.0.1",
                hasPermssion: 0,
                credits: "ARYAN",
                description: "no prefix",
        usePrefix: false,
                commandCategory: "No command marks needed",
                usages: "Yo Yo",
                cooldowns: 5,
};

const gifs = [
                "https://i.imgur.com/z2EbkKC.gif",
                "https://i.imgur.com/9HaPHmv.gif",
                "https://i.imgur.com/StrF9B8.gif",
                "https://i.imgur.com/GCYkSwa.gif",
                "https://i.imgur.com/sF5I9gU.gif"
];

const messages = [
                "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐬𝐮𝐡𝐞𝐛 𝐤𝐡𝐚𝐧 \n──────────────────\n\n😋 𝐀𝐀𝐎 𝐁𝐀𝐁𝐘 𝐌𝐄𝐑𝐄 𝐒𝐀𝐓𝐇 𝐍𝐀𝐒𝐓𝐀 𝐊𝐑 𝐋𝐎 🙂\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻ 𝐬𝐮𝐡𝐞𝐛 𝐤𝐡𝐚𝐧 \n──────────────────\n\n😋 𝐀𝐀𝐎 𝐁𝐀𝐁𝐘 𝐌𝐄𝐑𝐄 𝐒𝐀𝐓𝐇 𝐍𝐀𝐒𝐓𝐀 𝐊𝐑 𝐋𝐎 🙂\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐬𝐮𝐡𝐞𝐛 𝐤𝐡𝐚𝐧 \n──────────────────\n\n😋 𝐀𝐀𝐎 𝐁𝐀𝐁𝐘 𝐌𝐄𝐑𝐄 𝐒𝐀𝐓𝐇 𝐍𝐀𝐒𝐓𝐀 𝐊𝐑 𝐋𝐎 🙂\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐬𝐮𝐡𝐞𝐛 𝐤𝐡𝐚𝐧 \n──────────────────\n\n😋 𝐀𝐀𝐎 𝐁𝐀𝐁𝐘 𝐌𝐄𝐑𝐄 𝐒𝐀𝐓𝐇 𝐍𝐀𝐒𝐓𝐀 𝐊𝐑 𝐋𝐎 🙂\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐬𝐮𝐡𝐞𝐛 𝐤𝐡𝐚𝐧 \n──────────────────\n\n😋 𝐀𝐀𝐎 𝐁𝐀𝐁𝐘 𝐌𝐄𝐑𝐄 𝐒𝐀𝐓𝐇 𝐍𝐀𝐒𝐓𝐀 𝐊𝐑 𝐋𝐎 🙂\n"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
                var { threadID, messageID } = event;
                var name = await Users.getNameUser(event.senderID);

                if (event.body.toLowerCase().startsWith("nasta") || 
                                event.body.toLowerCase().startsWith("NASTA") || 
                                event.body.toLowerCase().startsWith("Nasta") || 
                                event.body.toLowerCase().startsWith("nassta") || 
                                event.body.toLowerCase().startsWith("Nassta")) { 

                                // Select random GIF and message
                                const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
                                const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
                                const downloadPath = path.join(__dirname, 'nasta-you-Gif-Images.gif');

                                // Download image from Imgur
                                request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                                                var msg = {
                                                                body: randomMessage,
                                                                attachment: fs.createReadStream(downloadPath)
                                                };
                                                api.sendMessage(msg, threadID, messageID);
                                                api.setMessageReaction("🤤", event.messageID, (err) => {}, true);
                                });
                }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
