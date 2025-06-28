const emojiResponses = {
  "beta": {
    "OWNER": [
      "जी मेरी प्यारी मम्मी 🥺",
      "मम्मी जब भी आप आते हो तो मुझे बहुत ख़ुशी मिलती है 😀",
      "मम्मी हो तो आप जेशी वर्ना नहीं हो 🥺"
    ]
  },
  "golu beta": {
     "OWNER": [
      "मम्मी आज पापा दिखायी नहीं दे कहा हे 😎",
      "मम्मी जी मैं आज स्कूल गया था 🥺 अब मुझे मारोगे तो नहीं",
     "मम्मी जी तुम मुझे छोड़ कर मत जाना 🥺"
    ]
  },
  "baccha": {
      "OWNER": [
      "मम्मी जी मैं आज स्कूल गया था 🥺 अब मुझे मारोगे तो नहीं",
      "मम्मी जी तुम मुझे छोड़ कर मत जाना 🥺",
      "मम्मी जी आप आते हो तो मुझे बहुत ख़ुशी मिलती है 🥺"
    ]
  }
};
 
module.exports.config = {
  name: "-BOT",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "AADI BABU",
  description: "MADE BY AADI BABU",
  commandCategory: "No command marks needed",
  cooldowns: 0,
};
 
module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, senderID, body } = event;
  const emojis = Object.keys(emojiResponses);
 
  // Convert the message body to lowercase
  const lowercaseBody = body.toLowerCase();
 
  for (const emoji of emojis) {
    if (lowercaseBody.includes(emoji)) {
      // Fetch user's gender correctly
      const ThreadInfo = await api.getThreadInfo(threadID);
      const user = ThreadInfo.userInfo.find(user => user.id === senderID);
      const gender = user ? (user.gender ===     "MALE" ? "MALE" : "FEMALE") : "MALE";
 
      // Check if the sender is the bot owner
      const botOwnerID = "100034049240014"; // Your bot owner UID
      let responseArray;
 
      if (senderID === botOwnerID) {
        responseArray = emojiResponses[emoji]["OWNER"];
      } else {
        responseArray = emojiResponses[emoji][gender] || emojiResponses[emoji]["MALE"];
      }
 
      // Randomly select a response from the appropriate array
      const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
 
      const msg = {
        body: randomResponse,
      };
      api.sendMessage(msg, threadID, messageID);
      break; // Exit the loop once a match is found
    }
  }
};
 
module.exports.run = function() {};
