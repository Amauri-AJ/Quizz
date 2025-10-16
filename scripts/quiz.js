// this should be done in json but I can't be bothered rn
let techQuestions = [
    "Who invented the internet?",
    "Which of these programming languages were made by a dutchman?",
    "How many bits are in a byte?",
    "Which of these storage types are not persistent?",
    "Which of these USB types are not real?",
    "What does IoT stand for?",
    "Despite being created in the 60s, this programming language is still used in many banking systems today.",
    "Which of these computer viruses ended up taking out 10% of the internet when released?",
    "When was YouTube created?",
    "What colour is the hex code #FFFFFF?",
    "How many bits are needed to make a boolean?",
    "When advertising internet speeds, ISPs often use this metric instead of megabytes per second to look faster.",
    "Prior to being stored digitally, what were programs written on?",
    "Who created the linux kernel?",
    "Created in 1972, this programming language is used in many operating systems and is the foundation of many other languages.",
    "What game engine is Fortnite made in?",
    "What character encoding is most commonly used on the internet?",
    "Which of these logic gates can be used to create every other logic gate",
    "A function in a class is called what?",
    "What is the most commonly used internet protocol"
]
let techAnswers = [
    ["Guido van Rossum", "Charles Babbage", "Tim Berners-Lee", "Alan Turing"],
    ["C++", "Python", "Typescript", "Java"],
    ["4", "8", "16", "32"],
    ["RAM", "SSD", "ROM", "HDD"],
    ["Micro USB", "USB-B", "Mini USB", "USB-D"],
    ["Internal or Technical", "Internet of Trackers", "Internet of Things", "Integer of Tuples"],
    ["COBOL", "Fortran", "LISP", "BASIC"],
    ["Morris Worm", "WANNACRY", "MyDoom", "ILOVEYOU"],
    ["2002", "2009", "2008", "2005"],
    ["Black", "Red", "Green", "White"],
    ["1", "2", "3", "4"],
    ["Megabits", "Kilobytes", "Gigabits", "Gigabytes"],
    ["Pen and paper", "Typewriters", "Punched cards", "Carved wood"],
    ["Terry Davis", "Linus Torvalds", "Ada Lovelace", "Edsger Wybe Dijkstra"],
    ["C", "ALGOL 60", "APL", "SQL"],
    ["Unity", "Unreal Engine", "Godot", "None of the above"],
    ["Unicode", "ASCII", "ANSI", "UTF-8"],
    ["XOR", "NAND", "NOT", "AND"],
    ["Method", "Procedure", "Routine", "Operation"],
    ["HTTPS", "HTTP", "FTP", "SMTP"]
]

let foodQuestions = [
    "With what animal meat are hot dogs made?",
    "What country is Sushi from?",
    "What country is Pasta from?",
    "Which one of these cheeses are Dutch?",
    "Which of these dishes are Persian?",
    "What country is Vodka from?",
    "What country is Vodka from?",
]

let foodAnswers = [
    ["Sheep", "Cow", "Lamb", "Pig"],
    ["China", "Korea", "Japan", "Vietnam"],
    ["Spain", "Italy", "Germany", "Portugal"],
    ["Munster", "Mozzarella", "Edam", "Cheddar"],
    ["Shawarma", "Kebab", "Döner", "Roti"],
    ["Barbieland", "Ukraine", "Poland", "Russia"],
]

// if you are cheating by getting the answers here you are BORING and DUMB !
let techCorrectAnswers = [3, 2, 2, 1, 4, 3, 1, 1, 4, 4, 1, 1, 3, 2, 1, 2, 4, 2, 1, 1]
let foodCorrectAnswers = [4, 3, 2, 3, 2, 3, 1, 1, 4, 4, 1, 3, 3, 2, 1, 2, 4, 2, 1, 1]

const categories = [
    ["Technology", techQuestions, techAnswers, techCorrectAnswers],
    ["Technology", techQuestions, techAnswers, techCorrectAnswers],
    ["Technology", techQuestions, techAnswers, techCorrectAnswers],
    ["Technology", techQuestions, techAnswers, techCorrectAnswers],
]

let chosenCategory = 0

const questionAmount = techQuestions.length

let questionNumber = 0
let correctCount = 0

let lifelineUsedThisRound = false
let lifelinesUsed = 0
let totalLifelines = 3

let username

// totally didn't take this from stackoverflow trust me
function shuffle(obj1, obj2, obj3) {
    var index = obj1.length
    var rnd, tmp1, tmp2, tmp3

    while (index) {
        rnd = Math.floor(Math.random() * index)
        index -= 1
        tmp1 = obj1[index]
        tmp2 = obj2[index]
        tmp3 = obj3[index]
        obj1[index] = obj1[rnd]
        obj2[index] = obj2[rnd]
        obj3[index] = obj3[rnd]
        obj1[rnd] = tmp1
        obj2[rnd] = tmp2
        obj3[rnd] = tmp3
    }
}

window.onload = function() {
    for (i = 0; i < 4; i++)
        document.getElementById(i+1).innerHTML = categories[i][0]
}

function flashbang(good) {
    const overlay = document.getElementById("flashbang-overlay")

    if (good) overlay.style.background = "#00FF00"
    else overlay.style.background = "#FF0000"
    overlay.style.transition = "none"
    overlay.style.opacity = "1"

    void overlay.offsetWidth

    overlay.style.transition = "opacity 1.5s ease-out"
    overlay.style.opacity = "0"
}


function changeQuestion() {
    if (questionNumber == 13) boo()
    lifelineUsedThisRound = false
    document.getElementById("question").innerHTML = categories[chosenCategory][1][questionNumber]
    for (i = 0; i < 4; i++) {
        document.getElementById(i+1).innerHTML = categories[chosenCategory][2][questionNumber][i]
        document.getElementById(i+1).style = "background-color: #00FFFF"
    }
}

function startQuiz() {
    document.getElementById("category-select").remove()
    document.getElementById("quiz").style.display = "block"
    document.getElementById("half").innerHTML = "50/50 (.)".replace(".", totalLifelines-lifelinesUsed)

    shuffle(categories[chosenCategory][1], categories[chosenCategory][2], categories[chosenCategory][3])

    changeQuestion()
}

function finishQuiz() {
    document.getElementById("quiz").style.display = "none"
    document.getElementById("end").style.display = "block"
    for (i = 0; i < 4; i++)
        document.getElementById(i+1).remove()
    const stat = document.getElementById("stats")
    const nameText = document.getElementById("name-replace")
    stat.innerHTML = stat.innerHTML.replace("{}", correctCount)
    nameText.innerHTML = nameText.innerHTML.replace("{}", username)
}

function restart() {
    window.location.reload()
}

// don't question it
function boo() {
	document.getElementById("boo").style.display = "block"
	document.getElementById("quiz").style.display = "none"
    document.getElementById("scary").play()
    setTimeout(function() {
        document.getElementById("quiz").style.display = "block"
        document.getElementById("boo").remove()
    }, 3000)
}

function showResult(wasAnswerCorrect) {
    if (wasAnswerCorrect) {
        document.getElementById('correctSound').pause()
        document.getElementById('correctSound').currentTime = 0
        document.getElementById('correctSound').play()
    }
    else {
        document.getElementById('incorrectSound').pause()
        document.getElementById('incorrectSound').currentTime = 0
        document.getElementById('incorrectSound').play()
    }
    correctCount += wasAnswerCorrect
    if (questionNumber+1 == questionAmount)
        finishQuiz()
    else {
        questionNumber++
        changeQuestion()
        flashbang(wasAnswerCorrect)
    }
}

function half() {
    if (lifelineUsedThisRound || lifelinesUsed == totalLifelines) return

    lifelinesUsed++
    lifelineUsedThisRound = true

    let randomAnswer1
    do {
        randomAnswer1 = Math.floor(Math.random() * 3) + 1
    } while (randomAnswer1 == categories[chosenCategory][3][questionNumber])

    let randomAnswer2
    do {
        randomAnswer2 = Math.floor(Math.random() * 3) + 1
    } while (randomAnswer2 == categories[chosenCategory][3][questionNumber] || randomAnswer2 == randomAnswer1)

    document.getElementById("half").innerHTML = "50/50 (.)".replace(".", totalLifelines-lifelinesUsed)
    document.getElementById(randomAnswer1).style.display = "none"
    document.getElementById(randomAnswer2).style.display = "none"
}

function answer(blimg) {
    if (categories[chosenCategory][3][questionNumber] == blimg.id) showResult(true)
    else showResult(false)
}

function category(blimg) {
    username = document.getElementById("name").value
    chosenCategory = blimg.id-1
    startQuiz()
}