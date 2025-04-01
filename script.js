const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput');
const greetingMessage = document.getElementById('greetingMessage');

greetButton.addEventListener('click', function() {
    const name = nameInput.value.trim();

    if (name) {
        greetingMessage.textContent = `Hello, ${name}! Welcome to our web app!`;
        greetingMessage.style.color = "#4CAF50";
    } else {
        greetingMessage.textContent = "Please enter your name.";
        greetingMessage.style.color = "red";
    }
});
