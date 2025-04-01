const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput');
const greetingMessage = document.getElementById('greetingMessage');
const questionsContainer = document.getElementById('questionsContainer');
const questionMessage = document.getElementById('questionMessage');
const answerInput = document.getElementById('answerInput');
const nextButton = document.getElementById('nextButton');

let currentQuestionIndex = 0;
const questions = [
    "What is your favorite color?",
    "What is your favorite hobby?",
    "Where would you love to travel the most?"
];


greetButton.addEventListener('click', function() {
    const name = nameInput.value.trim();

    if (name) {
        greetingMessage.textContent = `Hello, ${name}! Welcome to our web app!`;
        greetingMessage.style.color = "#4CAF50";

     
        questionsContainer.style.display = "block";
        questionMessage.textContent = questions[currentQuestionIndex];
        nameInput.style.display = "none";
        greetButton.style.display = "none";
    } else {
        greetingMessage.textContent = "Please enter your name.";
        greetingMessage.style.color = "red";
    }
});


nextButton.addEventListener('click', function() {
    const answer = answerInput.value.trim();

    if (answer) {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
        
            questionMessage.textContent = questions[currentQuestionIndex];
            answerInput.value = '';  
        } else {
            
            questionMessage.textContent = "Thank you for sharing! We've completed the questions.";
            nextButton.style.display = "none"; 
            answerInput.style.display = "none"; 
        }
    } else {
        
        alert("Please enter an answer before proceeding.");
    }
});

