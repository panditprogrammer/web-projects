let character = document.getElementById("character");
let block = document.getElementById("block");
let game = document.getElementById("game");
let score = 0;

// moving left 
function move_left()
{
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if(left >=0)
    {
        character.style.left = left +"px";
    }
}
// moving right 
function move_right()
{
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if(left <300)
    {
        character.style.left = left +"px";
    }
    
}

document.addEventListener("keydown",event =>{

    if(event.key === "ArrowLeft")
    {
        move_left();
    }

    if(event.key === "ArrowRight")
    {
        move_right();
    }
})

// generating random block 
block.addEventListener('animationiteration',()=>{
    let random = Math.floor(Math.random()*3);
    left = random*100;
    block.style.left = left +"px";
    score +=10;

});

setInterval(function(){
    // character and block left checking
    let character_left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    let block_left = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let block_top = parseInt(window.getComputedStyle(block).getPropertyValue("top"));

    if(character_left == block_left && block_top <500 && block_top >300)
    {
        block.style.animation = "none";
        game.innerHTML = `<h3 style="color: #a30000; text-align:center;margin-top:200px;">Game Over! Score ${score}</h3><br><a href="index.html" id="start">Start Again</a>`
    }

},1);

// for smartphone TouchEvent 
document.getElementById("left").addEventListener("touchstart",move_left);
document.getElementById("right").addEventListener("touchstart",move_right);
