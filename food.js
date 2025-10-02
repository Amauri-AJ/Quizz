const questions = [
    {
        question: "what is sushi traditionally wrapped in?",
        answers: [
            { text: "rice paper", correct: false },
            { text: "Seaweed", correct: true },
            { text: "Pita bread", correct: false },
            { text: "Lettuce", correct: false },

        ]
    },
    {
        question: "Which fruit is used to make guacamole?",
        answers: [
            { text: "Avocado", correct: true },
            { text: "Banana", correct: false },
            { text: "Mango", correct: false },
            { text: "Papaya", correct: false },
        ]
    },
    {
        question: "Which country is famous for pizza and pasta?",
        answers: [
            { text: "France", correct: false },
            { text: "Italy", correct: true },
            { text: "Germany", correct: false },
            { text: "Spain", correct: false },
        ]
    },
    {
        question: "Which vitamin is abundant in citrus fruits?",
        answers: [
            { text: "Vitamin D", correct: false },
            { text: "Vitamin A", correct: false },
            { text: "Vitamin C", correct: true },
            { text: "Vitamin B", correct: false },
        ]
    },
    {
        question: "What kind of food is brie?",
        answers: [
            { text: "Meat", correct: false },
            { text: "Cheese", correct: true },
            { text: "Bread", correct: false },
            { text: "Fish", correct: false },
        ]
    },
    {
        question: "What is tofu made from?",
        answers: [
            { text: "Soybeans", correct: true },
            { text: "Wheat", correct: false },
            { text: "Rice", correct: false },
            { text: "Corn", correct: false },
        ]
    },
    {
        question: "Which grain is used to make risotto?",
        answers: [
            { text: "Basmati", correct: false },
            { text: "Jasmine", correct: false },
            { text: "Arborio", correct: true },
            { text: "Brown rice", correct: false },
        ]
    },
    {
        question: "Which country is known for making croissants?",
        answers: [
            { text: "Germany", correct: false },
            { text: "France", correct: true },
            { text: "Italy", correct: false },
            { text: "Belgium", correct: false },
        ]
    },
    {
        question: "What is the main ingredient in hummus?",
        answers: [
            { text: "Beans", correct: false },
            { text: "Chickpeas", correct: true },
            { text: "Lentils", correct: false },
            { text: "Tofu", correct: false },
        ]
    },
    {
        question: "Which fruit has its seeds on the outside?",
        answers: [
            { text: "Strawberry", correct: true },
            { text: "Banana", correct: false },
            { text: "Kiwi", correct: false },
            { text: "Apple", correct: false },
        ]
    },
    {
        question: "What is the main ingredient in miso soup?",
        answers: [
            { text: "Soybean paste", correct: true },
            { text: "Noodles", correct: false },
            { text: "Coconut milk", correct: false },
            { text: "Tofu", correct: false },
        ]
    },
    {
        question: "Which nut is used in pesto sauce?",
        answers: [
            { text: "Cashew", correct: false },
            { text: "Walnut", correct: false },
            { text: "Pine nuts", correct: true },
            { text: "Peanut", correct: false },
        ]
    },
    {
        question: "Which country is famous for maple syrup?",
        answers: [
            { text: "USA", correct: false },
            { text: "Canada", correct: true },
            { text: "Norway", correct: false },
            { text: "Russia", correct: false },
        ]
    },
    {
        question: "Which of these is a type of pasta?",
        answers: [
            { text: "Fettuccine", correct: true },
            { text: "Fajita", correct: false },
            { text: "Falafel", correct: false },
            { text: "Fondue", correct: false },
        ]
    },
    {
        question: "What type of food is kimchi?",
        answers: [
            { text: "Fermented vegetables", correct: true },
            { text: "Grilled meat", correct: false },
            { text: "Soup", correct: false },
            { text: "Noodles", correct: false },
        ]
    },
    {
        question: "What is the main ingredient in paella?",
        answers: [
            { text: "Rice", correct: true },
            { text: "Pasta", correct: false },
            { text: "Potato", correct: false },
            { text: "Corn", correct: false },
        ]
    },
    {
        question: "Which of these is a tropical fruit?",
        answers: [
            { text: "Pineapple", correct: true },
            { text: "Apple", correct: false },
            { text: "Grapes", correct: false },
            { text: "Pear", correct: false },
        ]
    },
    {
        question: "Which spice is used in curry and gives it a yellow color?",
        answers: [
            { text: "Turmeric", correct: true },
            { text: "Cinnamon", correct: false },
            { text: "Chili", correct: false },
            { text: "Cumin", correct: false },
        ]
    },
    {
        question: "Which beverage is made by fermenting grapes?",
        answers: [
            { text: "Wine", correct: true },
            { text: "Beer", correct: false },
            { text: "Cider", correct: false },
            { text: "Vodka", correct: false },
        ]
    },
    {
        question: "Which dessert is frozen and made with cream?",
        answers: [
            { text: "Ice cream", correct: true },
            { text: "Cake", correct: false },
            { text: "Brownie", correct: false },
            { text: "Muffin", correct: false },
        ]
    }
];

const questionElement = document.getElementById