document.addEventListener('DOMContentLoaded', () => {
    const loreInput = document.getElementById('lore-input');
    const forgeButton = document.getElementById('forge-button');
    const emojiDisplay = document.getElementById('emoji-display');

    // Basic emoji map (can be expanded or loaded from emojiMap.json later)
    // For a more "Doomsday Cult for Gamers" vibe, let's add/tweak some:
    const basicEmojiMap = {
        "fire": "🔥",
        "dragon": "🐉",
        "glitch": "👾",
        "buffer": "⏳",
        "streamer": "🎙️",
        "ai": "🤖",
        "cat": "😼",
        "meme": "😂",
        "doom": "💀",
        "cult": "🛐",
        "gamer": "🎮",
        "void": "🌌",
        "oracle": "🔮",
        "destiny": "✨",
        "cyber": "💻",
        "neon": "💡",
        "data": "💾",
        "virus": "☣️",
        "hacker": "🧑‍💻", // Changed from knight
        "magic": "🪄", // Changed from simple star
        "love": "💔" // A more cynical take for the theme? Or keep ❤️? Let's try this.
    };

    // Initialize with a default thematic emoji from HTML or set one here
    // emojiDisplay.textContent = "🔮"; // Already set in HTML

    forgeButton.addEventListener('click', () => {
        const loreText = loreInput.value.toLowerCase();
        let generatedEmoji = "🤷"; // Default if no specific keyword match - a shrug for the unknown

        if (loreText.trim() === "") {
            generatedEmoji = "🔮"; // Reset to Oracle/initial state
            emojiDisplay.textContent = generatedEmoji;
            return;
        }

        let found = false;
        for (const keyword in basicEmojiMap) {
            if (loreText.includes(keyword)) {
                generatedEmoji = basicEmojiMap[keyword];
                found = true;
                break; // Use the first match
            }
        }
        
        // If no keyword matched from our specific map, but text is not empty
        if (!found && loreText.trim() !== "") {
            // Simple fallback: cycle through a few generic "mystic" emojis based on text length
            const genericEmojis = ["✨", "🌟", "💫", "💠"];
            generatedEmoji = genericEmojis[loreText.length % genericEmojis.length];
        }

        emojiDisplay.textContent = generatedEmoji;
    });
});
