score = 0;
crossdino = true;
startGame = new Audio("sound/start.mp3");
playText = document.getElementById("play").innerText;
StartGame = document.getElementsByClassName("StartGame").innerText;
waterfall =new Audio("sound/waterfall.wav");
waterfall.loop=true;
startGame.loop=true;
if (playText == "Start Game") {

    startGame.play();

    waterfall.play();
}

document.onkeydown = function (e) {
    if (e.keyCode == 13) {
        location.reload();
        waterfall.play();
        
    }

    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove("animateDino");
        }, 400);

        jump.play();
    }

}






