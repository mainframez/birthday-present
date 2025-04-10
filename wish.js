// Show the message when hovering over an image box
function showMessage(message) {
    let msgElement = event.target.querySelector('.image-message');
    msgElement.textContent = message;
}

// Hide the message when the hover is removed
function hideMessage() {
    let msgElement = event.target.querySelector('.image-message');
    msgElement.textContent = '';
}

// Show the story content when the button is clicked
function showStory() {
    alert("This is whereyou go back into time, babe !");
}
