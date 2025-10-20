var POSSIBLE_WORDS = ["Bruh", "JavaScript", "HTML", "CSS", "Python", "Java", "Booty", "Ruby", "Swift", "Kotlin"];
var word = "";

function newGame() {
    var randomIndex = (Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    var clueString = "";
    for (var i = 0; i < word.length; i++) {
        clueString += "_ ";
    }
    var clue = document.getElementById("clue");
    clue.innerText = clueString;
}