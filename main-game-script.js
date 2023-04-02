let choiceButtonEffect = new Audio('songs/choice-button-effect.webm');
choiceButtonEffect.muted = true;
let winEffect = new Audio('songs/win-sound-effect.mp3');
winEffect.muted = true;
let loseEffect = new Audio('songs/lose-sound-effect.mp3');
loseEffect.muted = true;
let muteButtonIGEffect = new Audio('songs/mute-button-effect.mp4');
let gameSong = new Audio('songs/main-game-song.mp3');
gameSong.muted = true;
let menuButtonsIGEffect = new Audio('songs/menu-buttons-effect.mp3');

function muteSong() {
    muteButtonIGEffect.play();
    gameSong.muted = true;
    muteSongBtn.style.display = "none";
    enableSongBtn.style.display = "block";
    winEffect.muted = true;
    loseEffect.muted = true;
    choiceButtonEffect.muted = true;
}

function enableSong() {
    gameSong.muted = false;
    gameSong.play();
    muteSongBtn.style.display = "block";
    enableSongBtn.style.display = "none";
    winEffect.muted = false;
    loseEffect.muted = false;
    choiceButtonEffect.muted = false;
}

let muteSongBtn = document.querySelector("#volumeon")
muteSongBtn.addEventListener('click', muteSong)
muteSongBtn.style.display = "none";

let enableSongBtn = document.querySelector("#volumeoff")
enableSongBtn.addEventListener('click', enableSong)

let playerScore = 0;
let computerScore = 0;
let playerGamesWon = 0;
let computerGamesWon = 0;
let rockBtn = document.querySelector('.rockbtn');
let paperBtn = document.querySelector('.paperbtn');
let scissorsBtn = document.querySelector('.scissorsbtn');
let choice = document.querySelector('.selectie');
let score = document.querySelector('.scor');
let finalResult = document.querySelector('.scorfinal');
let playAgain = document.querySelector('.playagain-msg');
let scorPlayer = document.querySelector('.player-contor');
let scorComputer = document.querySelector('.computer-contor');
const numePlayer = document.createElement('span');
numePlayer.setAttribute('id', 'result-user');
scorPlayer.appendChild(numePlayer);
scorComputer.innerHTML = "COMPUTER"
let tabelaScor = document.querySelector('.scor-contor')
tabelaScor.innerHTML = playerGamesWon + ' : ' + computerGamesWon;


score.style.fontWeight = 'bold';
score.style.fontSize = '20px';
finalResult.style.fontWeight = 'bolder';
finalResult.style.fontSize = '28px';
finalResult.style.fontStyle = 'italic';

let divPlayAgainBtn = document.querySelector('.modal-lose');
let playAgainBtn = document.createElement('BUTTON');
playAgainBtn.classList = 'playbtn';
let playAgainText = document.createTextNode("PLAY AGAIN");
playAgainBtn.appendChild(playAgainText);

let divPlayAgainBtnNo = document.querySelector('.modal-lose');
let playAgainBtnNo = document.createElement('BUTTON');
playAgainBtnNo.classList = 'backtomenubtn';
let playAgainNoText = document.createTextNode("BACK TO MENU");
playAgainBtnNo.appendChild(playAgainNoText);

let divPlayAgainBtnWin = document.querySelector('.modal-win');
let playAgainBtnWin = document.createElement('BUTTON');
playAgainBtnWin.classList = 'playbtnwin';
let playAgainTextWin = document.createTextNode("PLAY AGAIN");
playAgainBtnWin.appendChild(playAgainTextWin);

let divPlayAgainBtnNoWin = document.querySelector('.modal-win');
let playAgainBtnNoWin = document.createElement('BUTTON');
playAgainBtnNoWin.classList = 'backtomenubtnwin';
let playAgainNoTextWin = document.createTextNode("BACK TO MENU");
playAgainBtnNoWin.appendChild(playAgainNoTextWin);


let scorFinalPlayer = document.querySelector('.header-contor');
let scorFinalComputer = document.querySelector('.header-contor');
let scorFinalPlayerH3 = document.createElement('h3');
let scorFinalComputerH3 = document.createElement('h3');
let scorFinalPlayerText = document.createTextNode("PLAYER WINS: ");
let scorFinalComputerText = document.createTextNode("COMPUTER WINS: ");
scorFinalPlayerH3.appendChild(scorFinalPlayerText);
scorFinalComputerH3.appendChild(scorFinalComputerText);

let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

let modalWin = document.querySelector('.modal-win');
let winGif = document.querySelector('.wingif');
let modalLose = document.querySelector('.modal-lose');
let loseGif = document.querySelector('.losegif');
let modalResult = document.querySelector('.modal-result');
let modalRestart = document.querySelector('.modal-restart');
modalRestart.innerText = "Are you sure you want to restart the game?";
let modalQuit = document.querySelector('.modal-quit');
modalQuit.innerText = "Are you sure you want to quit the game?";
let yesBtnRestart = document.createElement('BUTTON');
yesBtnRestart.classList = 'playbtn';
yesBtnRestart.classList - 'restartbtn';
let yesBtnRestartText = document.createTextNode("YES");
yesBtnRestart.appendChild(yesBtnRestartText);
modalRestart.appendChild(yesBtnRestart);
yesBtnRestart.addEventListener('click', restartGame);
let yesBtnQuit = document.createElement('BUTTON');
let yesBtnQuitText = document.createTextNode("YES");
yesBtnQuit.classList = 'playbtn';
yesBtnQuit.classList - 'restartbtn';
yesBtnQuit.appendChild(yesBtnQuitText);
modalQuit.appendChild(yesBtnQuit);
yesBtnQuit.addEventListener('click', quitGameYesBtn);

function quitGameYesBtn() {
    menuButtonsIGEffect.play();
    window.open('', '_self').close();
}
modalQuit.style.display = "none";
function quitGame() {
    menuButtonsIGEffect.play();
    modalQuit.style.display = "block";
    modalRestart.style.display = "none";
    modalResult.style.display = "block";
    winGif.style.display = "none";
    modalWin.style.display = "none";
    loseGif.style.display = "none";
    modalLose.style.display = "none";
}
function doNotRestart() {
    menuButtonsIGEffect.play();
    modalRestart.style.display = "none";
    modalResult.style.display = "none";
    modalQuit.style.display = "none";
    tabelaScor.innerHTML = playerGamesWon + ' : ' + computerGamesWon;
}

function restartGame() {
    menuButtonsIGEffect.play();
    modalRestart.style.display = "none";
    modalResult.style.display = "none";
    choice.innerHTML = "";
    score.innerHTML = "";
    finalResult.innerHTML = "";
    playAgain.innerHTML = "";
    playerScore = 0;
    computerScore = 0;
    playerGamesWon = 0;
    computerGamesWon = 0;
    scorComputer.innerHTML = "COMPUTER";
}

let noBtnRestart = document.createElement('BUTTON');
noBtnRestart.classList = 'backtomenubtn';
noBtnRestart.classList - 'restartbtn';
let noBtnRestartText = document.createTextNode("NO");
noBtnRestart.appendChild(noBtnRestartText);
modalRestart.appendChild(noBtnRestart);
noBtnRestart.addEventListener('click', doNotRestart);

let noBtnQuit = document.createElement('BUTTON');
noBtnQuit.classList = 'backtomenubtn';
noBtnQuit.classList - 'restartbtn';
let noBtnQuitText = document.createTextNode("NO");
noBtnQuit.appendChild(noBtnQuitText);
modalQuit.appendChild(noBtnQuit);
noBtnQuit.addEventListener('click', doNotRestart);

function getComputerChoice() {
    let computerChoices = ['rock', 'paper', 'scissors'];
    let randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return randomChoice;
}
function rockBtnClick(computerSelection) {
    choiceButtonEffect.play();
    computerSelection = getComputerChoice();

    if (rockBtnClick && computerSelection == rock) {
        choice.innerHTML = "Tie! Both of you chose <b>Rock!</b> The score is: "
        score.innerHTML = playerScore + " - " + computerScore;
    }

    if (rockBtnClick && computerSelection == paper) {
        computerScore++;
        choice.innerHTML = " You Lose! <b>Paper</b> beats <b>Rock</b>! The score is: "
        score.innerHTML = playerScore + " - " + computerScore;

    }
    if (rockBtnClick && computerSelection == scissors) {
        playerScore++;
        choice.innerHTML = "You Win! <b>Rock</b> beats <b>Scissors</b>! The score is: "
        score.innerHTML = playerScore + " - " + computerScore;
    }
}
function paperBtnClick(computerSelection) {
    choiceButtonEffect.play();
    computerSelection = getComputerChoice();

    if (paperBtnClick && computerSelection == paper) {
        choice.innerHTML = "Tie! Both of you chose <b>Paper!</b> The score is: "
        score.innerHTML = playerScore + " - " + computerScore;
    }

    if (paperBtnClick && computerSelection == scissors) {
        computerScore++;
        choice.innerHTML = "You Lose! <b>Scissors</b> beat <b>Paper</b>! The score is: "
        score.innerHTML = playerScore + " - " + computerScore;
    }
    if (paperBtnClick && computerSelection == rock) {
        playerScore++;
        choice.innerHTML = "You Win! <b>Paper</b> beats <b>Rock</b>! The score is: "
        score.innerHTML = playerScore + " - " + computerScore;
    }


}

function scissorsBtnClick(computerSelection) {
    choiceButtonEffect.play();
    computerSelection = getComputerChoice();

    if (scissorsBtnClick && computerSelection == scissors) {
        choice.innerHTML = "Tie! Both of you chose <b>Scissors</b>! The score is: "
        score.innerHTML = playerScore + " - " + computerScore;
    }

    if (scissorsBtnClick && computerSelection == rock) {
        computerScore++;
        choice.innerHTML = "You Lose! <b>Rock</b> beats <b>Scissors</b>! The score is: "
        score.innerText = playerScore + " - " + computerScore;
    }
    if (scissorsBtnClick && computerSelection == paper) {
        playerScore++;
        choice.innerHTML = "You Win! <b>Scissors</b> beat <b>Paper</b>! The score is: "
        score.innerHTML = playerScore + " - " + computerScore;
    }
}

function game() {
    if (playerScore >= 5) {
        winEffect.play();
        gameSong.pause();
        openModalResult()
        playerGamesWon++;
        modalResult.style.display = "block";
        winGif.style.display = "block";
        loseGif.style.display = "none";
        modalLose.style.display = "none";
        modalRestart.style.display = "none";
        tabelaScor.innerHTML = playerGamesWon + " - " + computerGamesWon;
        divPlayAgainBtnWin.appendChild(playAgainBtnWin);
        divPlayAgainBtnNoWin.appendChild(playAgainBtnNoWin);
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5) {
        loseEffect.play();
        gameSong.pause();
        openModalResult()
        computerGamesWon++;
        modalResult.style.display = "block";
        loseGif.style.display = "block";
        winGif.style.display = "none";
        modalWin.style.display = "none";
        modalRestart.style.display = "none";
        tabelaScor.innerHTML = playerGamesWon + " - " + computerGamesWon;
        divPlayAgainBtn.appendChild(playAgainBtn);
        divPlayAgainBtnNo.appendChild(playAgainBtnNo);
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        playerScore = 0;
        computerScore = 0;
    }
}
rockBtn.addEventListener('click', () => {
    rockBtnClick();
    game();
});
paperBtn.addEventListener('click', () => {
    paperBtnClick();
    game();
});
scissorsBtn.addEventListener('click', () => {
    scissorsBtnClick();
    game();
});

playAgainBtn.addEventListener('click', resetGame);
playAgainBtnNo.addEventListener('click', goToMenu);
playAgainBtnWin.addEventListener('click', resetGame);
playAgainBtnNoWin.addEventListener('click', goToMenu);

function goToMenu() {
    menuButtonsIGEffect.play();
    window.setTimeout(function () {
        window.location = "index.html"
    }, 1000);
}

let menuBtnIG = document.querySelector('.menubtn');
menuBtnIG.addEventListener('click', goToMenu);
let quitBtnIG = document.querySelector('.quitbtn');
quitBtnIG.addEventListener('click', quitGame);
let restartGameIG = document.querySelector('.restartbtn');
restartGameIG.addEventListener('click', restartGameBtn);

function restartGameBtn() {
    menuButtonsIGEffect.play();
    modalRestart.style.display = "block";
    modalResult.style.display = "block";
    winGif.style.display = "none";
    modalWin.style.display = "none";
    loseGif.style.display = "none";
    modalLose.style.display = "none";
    tabelaScor.innerHTML = '0 : 0';

}
function resetGame() {
    gameSong.currentTime = 0;
    gameSong.play();
    loseEffect.pause();
    winEffect.pause();
    loseEffect.currentTime = 0;
    winEffect.currentTime = 0;
    choice.innerHTML = "";
    score.innerHTML = "";
    finalResult.innerHTML = "";
    playAgain.innerHTML = "";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    modalResult.style.display = "none";
    winGif.style.display = "none";
    loseGif.style.display = "none";
    playAgainBtn.parentNode.removeChild(playAgainBtn);
    playAgainBtnNo.parentNode.removeChild(playAgainBtnNo);
}

modalWin.appendChild(playAgainBtnWin);
modalWin.appendChild(playAgainBtnNoWin);
modalLose.appendChild(playAgainBtn);
modalLose.appendChild(playAgainBtnNo);

function openModalResult() {
    modalWin.style.display = "block";
    modalLose.style.display = "block";
    modalResult.style.display = "block";
}
window.addEventListener('load', () => {

    const user = localStorage.getItem('USER');
    document.getElementById('result-user').innerHTML = user.toUpperCase();
})