const questions = [
    "1. What is the main ingredient in guacamole?",
    "2. Which country is famous for inventing sushi?",
    "3. What type of pasta is shaped like little rice grains?",
    "4. Which vitamin is most abundant in citrus fruits?",
    "5. What kind of pastry is used to make a croissant?",
    "6. Which fast-food chain is known for its 'Big Mac'?",
    "7. What is tofu made from?",
    "8. Which fruit has its seeds on the outside?",
    "9. What is the most widely consumed meat in the world?",
    "10. What country is the origin of feta cheese?",
    "11. What is the main ingredient in hummus?",
    "12. What’s the name of the hot red pepper often used in Mexican cuisine?",
    "13. Which Italian dish is made with layers of pasta, meat, and cheese?",
    "14. What food is traditionally eaten on Thanksgiving in the U.S.?",
    "15. What is the primary ingredient in miso soup?",
    "16. Which fruit is dried to make a raisin?",
    "17. What cheese is typically used on pizza?",
    "18. What is the process of heating sugar to turn it into a golden brown substance?",
    "19. What kind of beans are used to make chocolate?",
    "20. Which country is the largest producer of olive oil?"
];

let currentIndex = 0;
const userAnswers = new Array(questions.length).fill(""); // Store answers

const questionContainer = document.getElementById('question-container');
const answerInput = document.getElementById('answer-input');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const answerBtn = document.getElementById('answer-btn');
const completionMessage = document.getElementById('completion-message');

function showQuestion(index) {
    questionContainer.textContent = questions[index];
    answerInput.value = userAnswers[index] || "";
    completionMessage.textContent = "";
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        showQuestion(currentIndex);
    } else {
        questionContainer.textContent = "🎉 You've reached the end of the quiz!";
        answerInput.style.display = 'none';
        backBtn.style.display = 'none';
        answerBtn.style.display = 'none';
        nextBtn.style.display = 'none';

        // Optionally show answers
        completionMessage.innerHTML = "<h3>Your Answers:</h3><ul>" +
            userAnswers.map((a, i) => `<li><strong>Q${i + 1}:</strong> ${a || '(No answer)'}</li>`).join('') +
            "</ul>";
    }
});

backBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showQuestion(currentIndex);
    }
});

answerBtn.addEventListener('click', () => {
    userAnswers[currentIndex] = answerInput.value.trim();
    alert("Answer saved!");
});

// Initial load
showQuestion(currentIndex);
s