var POSSIBLE_WORDS = ["Bruh", "JavaScript", "HTML", "CSS", "Python", "Java", "Booty", "Ruby", "Swift", "Kotlin"];
var word = "";
var guesses = "";
var MAX_GUESSES = 6;
var guess_count = MAX_GUESSES;
var gameFinished = false; // Added variable to track if the game is finished
var gameStarted = false; // Added variable to track if the game has started

function newGame() {
    var randomIndex = Math.floor(Math.random() * POSSIBLE_WORDS.length); // FIXED: Added Math.floor
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    guess_count = MAX_GUESSES;
    gameFinished = false; // Reset game finished status
    gameStarted = true; // Set game started status   
    var dialog = document.getElementById("dialog"); // Get dialog element
    dialog.className = "dialog"; // Hide dialog
    dialog.textContent = ""; // Clear dialog text
    updatePage();
}
function guessLetter() {
    var input = document.getElementById("guess");
    var letter = input.value.toUpperCase(); // make case insensitive 
        // Added the ! which checks if the game hasn't started yet   
        if (!gameStarted) {
        alert("Please start a new game first!");
        input.value = ""; // Clear input
        return;
    }   
        if (gameFinished) { //No more guesses if game is finished
        input.value = ""; // Clear input
        return;
    } 
        if (guesses.toUpperCase().indexOf(letter) >= 0) {
        alert("You already guessed that letter!"); // Added alert for already guessed letter
        input.value = ""; // Clear input
        return;
    }
        if (letter === "" || !/[A-Z]/.test(letter)) { // Validate input
    alert("Please enter a valid letter!");
    input.value = "";
    return;
}
        if(word.toUpperCase().indexOf(letter) < 0){
        guess_count--;
    }
    guesses += letter;
    input.value = ""; // Clear input
    updatePage();
    checkGameStatus();
}
function checkGameStatus() { // New function to check if game is won or lost
     guessArea.innerHTML = document.getElementById("guesses");
     var dialog = document.getElementById("dialog"); // Get dialog element
    var guessedLetters = document.getElementById("guessedLetters"); // Get guessed letters element
    var wordComplete = true; // Check if word is completely guessed
    for (var i = 0; i < word.length; i++) {
        if (guesses.toUpperCase().indexOf(word.charAt(i).toUpperCase()) < 0) {
            wordComplete = false;
            break;
        }
}
        if (wordComplete) { gameFinished = true; 
        dialog.textContent = " Congratulations! You Won!"; 
        dialog.className = "dialog win show"; 
        guessedLetters.textContent = "Guessed letters: " + guesses; 
    }
        else if (guess_count <= 0) { gameFinished = true; 
        dialog.textContent = " Game Over! The word was: " + word; 
        dialog.className = "dialog lose show"; 
        guessedLetters.textContent = "Guessed letters: " + guesses; 
    }
}
    

function updatePage() {
    var clueString = "";
    for (var i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0) {
            clueString += currentLetter + " ";
        }
        else
            clueString += "_ ";
    }
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed letters: " + guesses;
    var image = document.getElementById("hangmanImage");
    image.src = "hangman" + guess_count + ".gif";
}