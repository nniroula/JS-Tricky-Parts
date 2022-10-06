function guessingGame() {
    // generate a random number
    const randomNumber = Math.floor(Math.random()*100);
    // count the guesses
    let guessCount = 0;
    // decide if the game is over
    let gameOver = false;
    // return a function
    return function guessANumber(number){
        if(gameOver) return "The game is over, you already won!";
        // then increment the guess(for the first time it becomes 0+1 = 1)
        guessCount += 1;
        if(number === randomNumber){
            gameOver = true;
            const guesses = guessCount === 1 ? "guess" : "guesses";
            return `you win it you found ${number} in ${guessCount} ${guesses}`;
        }
        // show move directions for a player
        if(number < randomNumber) return `${number} is too low`;
        if(number > randomNumber) return `${number} is too high`;
    }
}

module.exports = { guessingGame };


/*
Part 2: Closure Exercises
Solve the following JavaScript problems using closure. Tests are provided.

Guessing Game

Write a function called guessingGame which returns a function that allows you to guess a random whole number 
between 0 and 99. Every time you create a new game, it should select a new random number, and keep it secret from 
the player.

Once the game has started, you can guess the number. The game should tell you whether your guess is too high, 
too low, or correct.

After a correct guess, the game ends.

let game = guessingGame();
game(50); // "50 is too low!"
game(90); // "90 is too high!"
game(70); // "You win! You found 70 in 3 guesses."
game(70); // "The game is over, you already won!"

*/

