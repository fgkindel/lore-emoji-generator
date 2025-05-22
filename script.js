document.addEventListener('DOMContentLoaded', () => {
    const loreInput = document.getElementById('lore-input');
    const forgeButton = document.getElementById('forge-button');
    const emojiDisplay = document.getElementById('emoji-display');
    
    // Create a status message element or use an existing one if available
    let statusMessageElement = document.getElementById('save-status-message');
    if (!statusMessageElement) {
        statusMessageElement = document.createElement('div');
        statusMessageElement.id = 'save-status-message';
        statusMessageElement.style.marginTop = '10px';
        statusMessageElement.style.fontSize = '0.9em';
        // Insert it after the button, or adjust as needed
        forgeButton.parentNode.insertBefore(statusMessageElement, forgeButton.nextSibling);
    }

    const googleAppScriptUrl = 'https://script.google.com/macros/s/AKfycbxrB2qyfbsJOOpqdKADu2Lmc-N33wnCpX30DID6X6yI8W7smUUYvDLVqVJCczAJ7iFJ/exec';

    const basicEmojiMap = {
        "fire": "🔥", "dragon": "🐉", "glitch": "👾", "buffer": "⏳", "streamer": "🎙️",
        "ai": "🤖", "cat": "😼", "meme": "😂", "doom": "💀", "cult": "🛐",
        "gamer": "🎮", "void": "🌌", "oracle": "🔮", "destiny": "✨", "cyber": "💻",
        "neon": "💡", "data": "💾", "virus": "☣️", "hacker": "🧑‍💻", "magic": "🪄",
        "love": "💔" 
    };

    forgeButton.addEventListener('click', () => {
        const loreText = loreInput.value; // Keep original case for saving
        const loreTextLower = loreText.toLowerCase();
        let generatedEmoji = "🤷"; 
        statusMessageElement.textContent = ''; // Clear previous status

        if (loreText.trim() === "") {
            generatedEmoji = "🔮";
            emojiDisplay.textContent = generatedEmoji;
            statusMessageElement.textContent = 'Please enter some lore first!';
            statusMessageElement.style.color = 'var(--electric-blue)';
            return;
        }

        let found = false;
        for (const keyword in basicEmojiMap) {
            if (loreTextLower.includes(keyword)) {
                generatedEmoji = basicEmojiMap[keyword];
                found = true;
                break; 
            }
        }
        
        if (!found) {
            const genericEmojis = ["✨", "🌟", "💫", "💠"];
            generatedEmoji = genericEmojis[loreText.length % genericEmojis.length];
        }

        emojiDisplay.textContent = generatedEmoji;

        // Now, try to save it to Google Sheets
        statusMessageElement.textContent = 'Saving your epic lore...';
        statusMessageElement.style.color = 'var(--plasma-purple)';

        fetch(googleAppScriptUrl, {
            method: 'POST',
            mode: 'cors', // Required for cross-origin requests to Google Apps Script
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            // We need to send the data as a stringified JSON object
            // that the Google Apps Script e.postData.contents can parse.
            // The Apps Script expects an object with 'lore' and 'emoji' properties.
            body: JSON.stringify({ lore: loreText, emoji: generatedEmoji }) 
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === "success") {
                statusMessageElement.textContent = 'Lore preserved in the digital scrolls!';
                statusMessageElement.style.color = 'var(--neon-pink)';
            } else {
                statusMessageElement.textContent = 'Hmm, the Oracle stumbled. (Error saving)';
                statusMessageElement.style.color = 'var(--hot-magenta)';
                console.error('Error saving to Google Sheet:', data.message);
            }
        })
        .catch(error => {
            statusMessageElement.textContent = 'Connection to the Oracle failed. (Network error)';
            statusMessageElement.style.color = 'var(--hot-magenta)';
            console.error('Network error when saving to Google Sheet:', error);
        });
    });
});
