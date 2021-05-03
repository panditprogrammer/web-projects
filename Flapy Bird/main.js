let block = document.getElementById("block");
let hole = document.getElementById("hole");
let bird = document.getElementById("bird");
let game = document.getElementById("game");
let jumping = 0;
let count_score = 0;

// audio 
let GameOverSound = new Audio("src/gameOver.mp3");
let score_sound = new Audio("src/score.mp3");
// let bgGameSound = new Audio("sound/bgGameSound.mp3");
// let clicksound = new Audio("sound/click.mp3");

// at every Animation of hole
hole.addEventListener('animationiteration', () => {

    // get a random number for display block
    let random = (Math.random() * 3);
    let top = (random*100)+150;
    hole.style.top = -(top) + "px";
    count_score +=50;
    score_sound.play();
});

// gravity to falling down bird 
setInterval(function () {
    let bird_top = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

    if (jumping == 0) {
        bird.style.top = (bird_top + 2) + "px";
    }

    let block_left = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    let hole_top = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));

    bird_top = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

    let char_top = -(500-bird_top);

    // checking game over 
    //     // detecting block collision with bird 
    if((bird_top >480) || ((block_left<40) && (block_left > -50)  && ((char_top < hole_top -20) || (char_top >hole_top+160))))
    {
        GameOverSound.play();
        // display game over div 
        game.innerHTML= `<div class="gameOverDiv"><h1 class= "gameover">Game Over! <br><span>Score ${count_score}</span></h1>
        <a href="index.html">Start Again</a></div> `;

        bird.style.top = 100+"px";
        count_score = 0;
        hole.style.animation = "";
        block.style.animation = "";
    }

}, 10);


// // function for jumping the flapy bird
function jump_bird()
{
    jumping = 1;
    let jump_count=0;

    // jumping bird in interval 
    let jump_interval = setInterval(function(){

        // to get top distance of bird 
        let bird_top = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

        if((bird_top>6) && (jump_count<15))
        {
            bird.style.top = (bird_top-4)+"px";            
        }

        // reset jumping and jumping count 
        if(jump_count>20)
        {
            clearInterval(jump_interval);
            jumping = 0;
            jump_count = 0;
        }
        jump_count++;

    },10);

}


