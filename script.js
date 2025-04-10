// List of emojis
const emojis = ["🎈", "🌸", "❤️", "🎁", "🎉", "🌟", "🍰", "🎂", "💖", "💐"];

// Number of emojis to generate
const emojiCount = 200; // Increase the number for more emojis

// Get the animations container
const animationsContainer = document.querySelector('.animations');

// Function to create a random position for the emojis
function getRandomPosition() {
    const xPos = Math.random() * window.innerWidth; // Random horizontal position
    return xPos;
}

// Function to create a random delay for the animation
function getRandomDelay() {
    return Math.random() * 2 + "s"; // Random delay between 0s and 2s
}

// Function to create and animate emojis
function createEmojis() {
    for (let i = 0; i < emojiCount; i++) {
        const emoji = document.createElement('span');
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.textContent = randomEmoji;

        // Apply random position
        const position = getRandomPosition();
        emoji.style.left = `${position}px`;

        // Apply random delay for animation
        emoji.style.animationDelay = getRandomDelay();

        // Add emoji to the animations container
        animationsContainer.appendChild(emoji);
    }
}

// Generate the emojis when the page loads
createEmojis();
