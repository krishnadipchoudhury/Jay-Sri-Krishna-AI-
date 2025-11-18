// Casual conversation responses
export const casualResponses = [
    { keywords: ["hi", "hello", "hey"], responses: ["Hello! How’s it going?", "Hey! What’s up?"] },
{ keywords: ["how are you"], responses: ["I am doing great, thanks for asking! How ar=()e you doing today?", "I am fine, thanks! How are you?"] },
{ keywords: ["how are you"], responses: ["I am doing great, thanks for asking! How **are** you doing today?", "I am fine, thanks! How are you?"] },
];

// Common misspellings for detection logic and correction
export const misspellings = {
    "halloe": "hello",
    "halllo": "hello",
    "hollo": "hello",
    "helo": "hello",
    "thnak": "thank",
    "thnakyou": "thank you",
    "whaat": "what",
    "howw": "how",
    "whre": "where",
    "whn": "when",
    "whyyyy": "why",
    "becuase": "because",
    "recieve": "receive",
    "seperate": "separate",
    "definately": "definitely",
    "wierd": "weird",
    "indiaa": "india",
    "capitall": "capital",
    "populaton": "population",
    "rriver": "river"
};

// Emojis for AI's random replies (Max 3 per sentence, used in correct order)
export const aiResponseEmojis = ["😊", "✨", "👋", "💖", "🙏", "👍", "💡", "🧠", "🤔", "⭐", "✅", "😇", "🚀", "🔥", "🌿", "💧", "🌍", "💙"];
