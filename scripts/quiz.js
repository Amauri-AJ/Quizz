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
    ["Megabits", "Kilobytes", "Mebibytes", "Gigabytes"],
    ["Pen and paper", "Typewriters", "Punched cards", "Carved wood"],
    ["Terry Davis", "Linus Torvalds", "Ada Lovelace", "Edsger Wybe Dijkstra"],
    ["C", "ALGOL 60", "APL", "SQL"],
    ["Unity", "Unreal Engine", "Godot", "None of the above"],
    ["Unicode", "ASCII", "ANSI", "UTF-8"],
    ["XOR", "NAND", "NOT", "AND"],
    ["Method", "Procedure", "Routine", "Operation"],
    ["HTTPS", "HTTP", "FTP", "SMTP"]
]

let magicQuestions = [
    "In Slavic folklore, what is the magical principle that governs fate and destiny?",
    "Which legendary Slavic wizard was said to guard hidden knowledge and forests?",
    "What is the name of the magical binding or curse often placed by Slavic witches?",
    "In Slavic magic, what does the term 'Vedun' or 'Vedma' refer to?",
    "Which Slavic deity is associated with wisdom and magic?",
    "What ancient Slavic object was used to store protective spells and charms?",
    "What is the name of the mystical runes or symbols used in Slavic folk magic?",
    "In Slavic tales, what is the highest form of magical transformation?",
    "Which Slavic figure was believed to summon or communicate with spirits?",
    "Which magical Slavic artifact is said to hold the secrets of the universe?",
    "What type of magic involves creating protective symbols or charms in Slavic tradition?",
    "Which magical creature in Slavic mythology is a hybrid bird often associated with misfortune and protection?",
    "Which Slavic magical language or code was used by sorcerers in rituals?",
    "What is the difference between Belobog and Chernobog in Slavic magic?",
    "In Slavic legends, what is the name of Baba Yaga's magical hut that can move?",
    "Which branch of Slavic magic seeks to heal and protect rather than curse?",
    "What magical law in Slavic belief reflects that every action has a natural consequence?",
    "Which mythical bird from Slavic folklore can both bring blessings and curses?",
    "Which medieval Slavic text supposedly contains incantations and ritual instructions?",
    "In Slavic mystical tradition, what is believed to be the record of all souls and deeds?"
];

let magicAnswers = [
    ["Rodovoy Zakon", "Fate’s Thread", "Navi Principle", "Law of Triads"],
    ["Volkhv", "Koschei the Deathless", "Domovoi", "Rusalka"],
    ["Zavoivanie", "Zaklinanie", "Porcha", "Vlastovka"],
    ["A healer", "A witch", "A spirit guide", "A necromancer"],
    ["Veles", "Perun", "Stribog", "Mokosh"],
    ["Talismans", "Kupala Stones", "Charm Bags", "Zorya Tablets"],
    ["Rodovye Znak", "Svarog Runes", "Slavic Sigils", "Kupala Glyphs"],
    ["Shape-shifting", "Fire manipulation", "Water control", "Time bending"],
    ["Morozko", "Volkhv", "Koschei", "Domovoi"],
    ["The Stone of Svarog", "The Firebird’s Feather", "The Sun Disk", "The Rod of Veles"],
    ["Charm Magic", "Runic Carving", "Sigil Craft", "Incantation Etching"],
    ["Simargl", "Zhar-ptitsa", "Alkonost", "Sirin"],
    ["Old Slavic Script", "Cherti Writing", "Runic Signs", "Divine Symbols"],
    ["Light vs Dark magic", "Water vs Fire", "Sun vs Moon", "Earth vs Sky"],
    ["Hut on Chicken Legs", "Crystal Cave", "Iron Tower", "Forest Hollow"],
    ["Healing Magic", "Curse Magic", "Divination", "Elemental Magic"],
    ["Zakon Trojki", "Circle of Balance", "Law of Threefold Return", "Triadic Rule"],
    ["Firebird", "Zhar-ptitsa", "Sirin", "Alkonost"],
    ["Izbornik", "Domostroy", "Book of Raziel", "Veles Book"],
    ["The Book of Souls", "The Akashic Record", "The Chronicle of the Gods", "The Rodovoy Ledger"]
];

// if you are cheating by getting the answers here you are BORING and DUMB !
let magicCorrectAnswers = [1, 1, 3, 2, 1, 1, 3, 1, 2, 2, 3, 2, 2, 1, 1, 1, 3, 2, 4, 1];
let techCorrectAnswers = [3, 2, 2, 1, 4, 3, 1, 1, 4, 4, 1, 3, 3, 2, 1, 2, 4, 2, 1, 1]

const categories = [
    ["Technology", techQuestions, techAnswers, techCorrectAnswers],
    ["Magic", magicQuestions, magicAnswers, magicCorrectAnswers],
    ["Food", techQuestions, techAnswers, techCorrectAnswers],
    ["Random trivia", techQuestions, techAnswers, techCorrectAnswers],
]

let chosenCategory = 0

const questionAmount = techQuestions.length

let questionNumber = 0
let correctNumber = 0

let lifelinesUsed = 0

let totalLifelines = 3

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
        document.getElementById("categoryI".replace("I", i+1)).innerHTML = categories[i][0]
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
    document.getElementById("question").innerHTML = categories[chosenCategory][1][questionNumber]
    for (i = 0; i < 4; i++) {
        document.getElementById("answerI".replace("I", i+1)).innerHTML = categories[chosenCategory][2][questionNumber][i]
        document.getElementById("answerI".replace("I", i+1)).style = "background-color: #00FFFF"
    }
}

function startQuiz() {
    document.getElementById("categorySelect").remove()
    document.getElementById("quiz").style.display = "block"

    shuffle(categories[chosenCategory][1], categories[chosenCategory][2], categories[chosenCategory][3])

    changeQuestion()
}

function finishQuiz() {
    document.getElementById("half").remove()
    document.getElementById("question").remove()
    for (i = 0; i < 4; i++)
        document.getElementById("answerI".replace("I", i+1)).remove()
    const congrats = document.createElement("h1")
    congrats.innerText = "You did it!"
    const stat = document.createElement("p")
    stat.innerText = `You got ${correctNumber} out of ${questionAmount} questions right!`
    const restart = document.createElement("button")
    restart.innerHTML = "Restart"
    restart.onclick = function() {window.location.reload()}
    document.body.appendChild(congrats)
    document.body.appendChild(stat)
    document.body.appendChild(restart)
}

// don't question it
function boo() {
	document.getElementById("boo").style.display = "block"
	document.getElementById("quiz").style.display = "none"
    let audio = document.getElementById("scary").play()
    setTimeout(function() {
        document.getElementById("quiz").style.display = "block"
        document.getElementById("boo").remove()
    }, 3000)
};

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
    correctNumber += wasAnswerCorrect
    if (questionNumber+1 == questionAmount)
        finishQuiz()
    else {
        questionNumber++
        changeQuestion()
        flashbang(wasAnswerCorrect)
    }
}

function half() {
    if (lifelineUsed) return
    lifelineUsed = true
    document.getElementById("half").style = "background-color: #999999"
    let randomAnswer1
    do {
        randomAnswer1 = Math.floor(Math.random() * 3) + 1
    } while (randomAnswer1 == categories[chosenCategory][3][questionNumber])
    let randomAnswer2
    do {
        randomAnswer2 = Math.floor(Math.random() * 3) + 1
    } while (randomAnswer2 == categories[chosenCategory][3][questionNumber] || randomAnswer2 == randomAnswer1)
    document.getElementById("answerI".replace("I", randomAnswer1)).style.display = "none"
    document.getElementById("answerI".replace("I", randomAnswer2)).style.display = "none"
}

function answer1() {
    if (categories[chosenCategory][3][questionNumber] == 1) showResult(true)
    else showResult(false)
}

function answer2() {
    if (categories[chosenCategory][3][questionNumber] == 2) showResult(true)
    else showResult(false)
}

function answer3() {
    if (categories[chosenCategory][3][questionNumber] == 3) showResult(true)
    else showResult(false)
}

function answer4() {
    if (categories[chosenCategory][3][questionNumber] == 4) showResult(true)
    else showResult(false)
}

function category1() {
    chosenCategory = 0
    startQuiz()
}

function category2() {
    chosenCategory = 1
    startQuiz()
}

function category3() {
    chosenCategory = 2
    startQuiz()
}

function category4() {
    chosenCategory = 3
    startQuiz()
}