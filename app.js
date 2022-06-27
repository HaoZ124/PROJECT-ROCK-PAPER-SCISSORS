//To create the array of input for computer
const pcInput = ['rock', 'paper', 'scissors'];

//Function for the computer to pick one
function computerPlay(input) {
    let i = Math.floor(Math.random() * 3);
    return input[i];
}

//To create a object to keep the scores
const scoreKeeper = {
    user: 0,
    pc: 0
}

//Function to compare the two inputs and return game result
function playRound(playerSelection, computerSelection, score) {
    //Firstly make judgement between two inputs to see if they are same
    if (playerSelection !== computerSelection) {
        //Use switch to compare each pair of inputs
        switch (playerSelection) {
            case 'rock':
                if (computerSelection === 'scissors') {
                    score.user++;
                } else {
                    score.pc++;
                }
                break;
            case 'paper':
                if (computerSelection === 'rock') {
                    score.user++;
                } else {
                    score.pc++;
                }
                break;
            case 'scissors':
                if (computerSelection === 'paper') {
                    score.user++;
                } else {
                    score.pc++;
                }
        }
    }
}

//Function to record the game scores and bo5
function game(score) {
    for (let i = 0; i < 5; i++) {
        //To save the user's input
        const userInput = prompt("Please enter rock, paper, or scissors to play.").toLowerCase();
        playRound(userInput, computerPlay(pcInput), score);
        console.log(`${score.user} ${score.pc}`)
    }
    if (score.user === score.pc) {
        console.log('Game ties!');
    } else if (score.pc > score.pc) {
        console.log(`Player won! Player got ${score.user}`);
    } else if (score.user < score.pc) {
        console.log(`Computer won! Computer got ${score.pc}`);
    }
}

game(scoreKeeper);