// global variables 
let msg = document.querySelector('.msg');
let guess = document.querySelector('input');
let btn = document.querySelector('.btn');
let score_element = document.querySelector('.score');
let update_score = document.getElementById('update_score');
let negative_score = document.getElementById('negative_score');
let score = 0;
let nscore = 0;


let play = false;
let sample_words = ['python','javascript','php','java','android','text editor','shareware','minicomputer','hardware','algorithm','firmware','program','assembler','engineer','debug','computing','translator','downloader','freeware','c++','html','css','node js','backend','hacker','database','scheduler','interface','loop','control','statement','class','bug','fix','internet','network','editor','development','IDE','Environment','path','keyboard','mouse','onclick','method','function','recursion','data','science','architecture','bit','megabytes','compiler','push','git','github','USB','linker','interface','implements','remove','operator','programming','language','c language','debugger','run','window','stackoverflow','print','overridding','overloading','define','import','include','ESC','Enter','return','menu','margin','padding','font size','comments','commit','pull','remote','bytes','encoding','assemble','computer','object','open','save','extension','search','google','youtube','online','chrome','pycharm','eclipse','notepad++','Edit','frontend','fullstack','heap','memory','allocation','processor','storage','cache','graphics','console','output','input','break','continue'];
let new_words = "";
let random_words = "";

// create new words
let create_new_words = () => {

    //pick a random word from sample words 
    let random_num = Math.floor(Math.random()*sample_words.length);
    let new_temp_words = sample_words[random_num];
    return new_temp_words;
}


// scrambling words with randomly
let scramble_words = (arr) => {

    for(let i = arr.length-1;i>0;i--)
    {
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        //arranging letter of word 
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;

}

// onclick listner on play btn
btn.addEventListener('click',function(){

    if(!play)
    {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        new_words = create_new_words();
        random_words = scramble_words(new_words.split("")).join("");
        msg.innerHTML = `Guess The Word   <span style="color:#ffffff;"> "${random_words}";`
        guess.autofocus = true;


    }
    else
    {
        let temp_word = guess.value;
        //checking word is match with use input
        if(temp_word === new_words)
        {
            play = false;
            msg.innerHTML = `Super!  <span style="color:#ffffff;"> "${new_words}" <span>`;
            score += 5;
            update_score.innerText = `${score} ` ;
            //negative_score.innerText = ` Negative Score : ${nscore}`;
            // console.log(score);
            btn.innerHTML = "Next";
            guess.value = ""; // removing input field 
            guess.classList.toggle('hidden'); 
        }
        else
        {
            msg.innerHTML = `<span style="color:#ad0000;">Oh!  Incorrect Try Again! <span> <em style="color:#000000;"> "${random_words}" </em>`
            score -= 5;
            update_score.innerText = `${score} ` ;

        }
    }



})