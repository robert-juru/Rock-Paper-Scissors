let menuButtonsEffect = new Audio('songs/menu-buttons-effect.mp3');
let muteButtonEffect = new Audio('songs/mute-button-effect.mp4');
let menuSong = new Audio('songs/theme-song.mp3');

function muteSongMenu() {
    muteButtonEffect.play();
    menuSong.muted = true;
    muteSongMenuBtn.style.display = "none";
    enableSongMenuBtn.style.display = "block";
}

function enableSongMenu() {
    menuSong.play();
    menuSong.muted = false;
    muteSongMenuBtn.style.display = "block";
    enableSongMenuBtn.style.display = "none";
}

let muteSongMenuBtn = document.querySelector("#volumeonmenu")
muteSongMenuBtn.addEventListener('click', muteSongMenu)
muteSongMenuBtn.style.display = "none";
let enableSongMenuBtn = document.querySelector("#volumeoffmenu")
enableSongMenuBtn.addEventListener('click', enableSongMenu)

let divPlayGameBtn = document.querySelector('.play-game');
let playGameBtn = document.createElement('BUTTON');
playGameBtn.classList = 'startbtn';
let playGameText = document.createTextNode("START GAME");
playGameBtn.appendChild(playGameText);
divPlayGameBtn.appendChild(playGameBtn);
playGameBtn.addEventListener('click', openModalPlayerName)
playGameBtn.style.color = 'white';
let iconPlayGame = document.querySelector('#play-game-icon');
let iconQuitGame = document.querySelector('#quit-game-icon');
iconQuitGame.addEventListener('click', quitGame);

function playGame() {
    menuButtonsEffect.play();
    window.setTimeout(function () {
        window.location = "main-game.html"
    }, 1000);
}

window.onclick = function (event) {
    if (event.target == modalPlayerName) {
        modalPlayerName.style.display = "none";
    }
}

let modalPlayerName = document.querySelector('.modal-player-name');
function openModalPlayerName() {
    modalPlayerName.style.display = "block";
}
iconPlayGame.addEventListener('click', openModalPlayerName);

let divQuitBtn = document.querySelector('.quit-game');
let quitBtn = document.createElement('BUTTON');
quitBtn.classList = 'startbtn';
let quitText = document.createTextNode("QUIT GAME");
quitBtn.appendChild(quitText);
divQuitBtn.appendChild(quitBtn);
function quitGame() {
    menuButtonsEffect.play();
    window.setTimeout(function () {
        window.open('', '_self').close()
    }, 1000);
}
quitBtn.addEventListener('click', quitGame);

function submitForm() {
    const user = document.getElementById('userInput').value;
    localStorage.setItem("USER", user);
    return;
}

