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
    userSelection: '',
    pc: 0,
    pcSelection: '',
    gameOver: false,
}

//Function to compare the two inputs and return game result
function playRound(scoreKeeper) {
    //Firstly make judgement between two inputs to see if they are same
    if (scoreKeeper.userSelection !== scoreKeeper.pcSelection) {
        //Use switch to compare each pair of inputs
        switch (scoreKeeper.userSelection) {
            case 'rock':
                if (scoreKeeper.pcSelection === 'scissors') {
                    scoreKeeper.user++;
                } else {
                    scoreKeeper.pc++;
                }
                break;
            case 'paper':
                if (scoreKeeper.pcSelection === 'rock') {
                    scoreKeeper.user++;
                } else {
                    scoreKeeper.pc++;
                }
                break;
            case 'scissors':
                if (scoreKeeper.pcSelection === 'paper') {
                    scoreKeeper.user++;
                } else {
                    scoreKeeper.pc++;
                }
        }
    }
}

const btn = Array.from(document.querySelectorAll('.button'));
const player = document.querySelector('.player');
const selectToWin = document.querySelector('#rounds');
const resetBtn = document.querySelector('.reset');
const pc = document.querySelector('.pc');
const playerChoice = document.querySelector('.playerChoice');
const pcChoice = document.querySelector('.pcChoice');
const result = document.querySelector('.result');

const playerSelection = function(e) {
    if (!scoreKeeper.gameOver) {
        scoreKeeper.userSelection = e.target.value;
        scoreKeeper.pcSelection = computerPlay(pcInput);
        playRound(scoreKeeper);
        player.innerHTML = scoreKeeper.user;
        pc.innerHTML = scoreKeeper.pc;
        playerChoice.innerHTML = scoreKeeper.userSelection;
        pcChoice.innerHTML = scoreKeeper.pcSelection;
        isWinner(scoreKeeper);
    }
}

btn.forEach(btn => btn.addEventListener("click", playerSelection));

function reset() {
    scoreKeeper.pc = 0;
    scoreKeeper.user = 0;
    scoreKeeper.gameOver = false;
    player.innerHTML = 0;
    pc.innerHTML = 0;
    result.innerHTML = '';
    player.classList.remove('win', 'lose');
    pc.classList.remove('lose', 'win');
}

function isWinner(score) {
    if (score.user === 5) {
        result.textContent = 'You won, you got 5 points!';
        score.gameOver = true;
        player.classList.add('win');
        pc.classList.add('lose');
    } else if (score.pc === 5) {
        result.textContent = 'You lost, computer got 5 points!';
        score.gameOver = true;
        player.classList.add('lose');
        pc.classList.add('win');
    }
}
resetBtn.addEventListener('click', reset);