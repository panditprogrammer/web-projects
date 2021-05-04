// variables
let score = 0;
let crossdino = true;
let GameOverSound = new Audio("sound/fast-game-over.wav");
let jump = new Audio("sound/lobby_game.wav");
let bgGameSound = new Audio("sound/bgGameSound.mp3");
let clicksound = new Audio("sound/click.mp3");
bgGameSound.loop = true;
waterfall = new Audio("sound/waterfall.wav");
waterfall.loop = true;
let playText = document.getElementById("play").innerText;
let StartGame = document.getElementsByClassName("StartGame").innerText;

// mobile friendly feature 
if (window.outerWidth < 800) {
    document.addEventListener('touchstart', jump_dino);
    
    // Function FOR  smartphone friendly
    function jump_dino() {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove("animateDino");
        }, 400);

        jump.play();
    }
}


function Reload() {
    location.reload();

}

if (playText == "Play Again") {

    waterfall.play();
    bgGameSound.play();

    play = document.getElementById("play").addEventListener("onclick", Reload);

    document.onkeydown = function (e) {

        if (e.keyCode == 38) {
            dino = document.querySelector('.dino');
            dino.classList.add('animateDino');
            setTimeout(() => {
                dino.classList.remove("animateDino");
            }, 400);

            jump.play();

        }

        if (e.keyCode == 37) {
            dino = document.querySelector('.dino');
            dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            dino.style.left = dinoX + 80 + "px";
        }
        if (e.keyCode == 39) {
            dino = document.querySelector('.dino');
            dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
            dino.style.left = dinoX - 80 + "px";
        }
        if (e.keyCode == 13) {
            location.reload();
        }

    }


    setInterval(() => {
        dino = document.querySelector(".dino");
        gameOver = document.querySelector(".gameover");
        obstacle = document.querySelector(".obstacle");

        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

        ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
        oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

        offsetX = Math.abs(dx - ox);
        offsetY = Math.abs(dy - oy);

        if (offsetX < 50 && offsetY < 50) {
            GameOverSound.play();
            gameOver.style.display = "flex";
            obstacle.classList.remove("obstacleAnimation");
            obstacle.style.display = "none";
            bgGameSound.pause();
            waterfall.play();

        }

        else if (offsetX < 50 && crossdino) {
            score += 5;
            updateScore(score);
            crossdino = false;
            setTimeout(() => {
                crossdino = true;
            }, 100);
        }

        fast = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        fast1 = fast - 0.001;
        obstacle.style.animationDuration = fast1 + "s";

    }, 100);

    function updateScore(score) {
        document.querySelector("#score").innerText = score;
    }

}


