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
     "In Hermeticism, what is the principle that states 'as above, so below'?",
    "Which grimoires are attributed to King Solomon in medieval magic?",
    "In Norse mythology, what is the name of the magical binding placed on Fenrir?",
    "What does the word 'Goetia' specifically refer to?",
    "In Kabbalah, which sphere of the Tree of Life is associated with wisdom?",
    "Which ancient text is considered the foundation of Western alchemy?",
    "What is the magical language written in the Voynich Manuscript often referred to as?",
    "In Dungeons & Dragons, what is the highest level spell slot available to wizards?",
    "Which ancient Greek figure was said to have taught necromancy and ghost summoning?",
    "The Emerald Tablet famously contains the phrase 'That which is below is like that which is above.' Who is it attributed to?",
    "What type of magic involves inscribing symbols of power onto objects?",
    "Which magical creature in Mesopotamian myth is a hybrid lion-demon associated with storms?",
    "What was John Dee’s magical language, supposedly revealed by angels?",
    "What is the difference between Theurgy and Thaumaturgy?",
    "In Arthurian legend, what is the name of Merlin’s cave of prophecy?",
    "Which branch of alchemy sought the Elixir of Life rather than transmuting metals?",
    "What is the magical law that states any action you take returns to you threefold?",
    "What mythical bird from Slavic folklore is both a blessing and a curse to those who encounter it?",
    "Which medieval magical book supposedly describes how to summon planetary spirits?",
    "In occult tradition, what is the 'Akashic Record' believed to be?"
]
 
let magicAnswers = [
    ["Law of Similarity", "Principle of Correspondence", "Hermetic Mirror", "Doctrine of Equivalence"],
    ["Key of Solomon", "Grimoire of Shadows", "Picatrix", "Book of Thoth"],
    ["Gleipnir", "Mjölnir", "Ragnarök", "Niflheim Chain"],
    ["Invocation of Angels", "Banishing Rituals", "Evocation of Demons", "Alchemy of Metals"],
    ["Chokmah", "Binah", "Kether", "Yesod"],
    ["Emerald Tablet", "Corpus Hermeticum", "Book of Abramelin", "Sefer Yetzirah"],
    ["Celestial Script", "Enochian", "Voynichese", "Runes of Saturn"],
    ["7th level", "8th level", "9th level", "10th level"],
    ["Orpheus", "Hecate", "Medea", "Circe"],
    ["Plato", "Thoth Hermes Trismegistus", "Zosimos of Panopolis", "Paracelsus"],
    ["Runic Casting", "Sigil Magic", "Inscription Magic", "Glyphwork"],
    ["Lamassu", "Anzu", "Pazuzu", "Utu"],
    ["Coptic Script", "Enochian", "Hermetic Latin", "Angelical"],
    ["Divine union with gods vs practical miracles", "Summoning vs Banishing", "Healing vs Destruction", "Alchemy vs Astrology"],
    ["Camlann", "Avalon", "Crystal Cave", "Caer Sidi"],
    ["Chrysopoeia", "Iatrochemistry", "Transmutation", "Sulfur-Mercury Doctrine"],
    ["Rule of Three", "Law of Return", "Circle of Balance", "Triadic Oath"],
    ["Simargl", "Firebird", "Roc", "Zhar-ptitsa"],
    ["Key of Solomon", "Liber Juratus", "Ars Notoria", "Book of Raziel"],
    ["A universal library of all events", "A magical book that never ends", "A hidden grimoire in Atlantis", "A record of all magical oaths"]
]

// if you are cheating by getting the answers here you are BORING and DUMB !
let magicCorrectAnswers = [2, 1, 1, 3, 1, 2, 3, 3, 1, 2, 2, 3, 2, 1, 3, 2, 1, 2, 3, 1]
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