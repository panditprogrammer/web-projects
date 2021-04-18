const para = ["If you’re preparing to take the CEH exam, you’ll undoubtedly want to find as much information as you can about computers, networks, applications, and physical security. Themore information you have at your disposal and the more hands-on experience you gain,the better off you’ll be when taking the exam. This study guide was written with that goalin mind—to provide enough information to prepare you for the test, but not so much thatyou’ll be overloaded with information that is too far outside the scope of the exam. Tomake the information more understandable, I’ve included practical examples and experience that supplements the theory",
"This book presents the material at an advanced technical level. An understanding of network concepts and issues, computer hardware and operating systems, and applications will come in handy when you read this book. While every attempt has been made to present the concepts and exercises in an easy-to-understand format, you will need to have experience with IT and networking technology to get the best results.",
"I’ve included review questions at the end of each chapter to give you a taste of what it’s like to take the exam. If you’re already working in the security field, check out these questions first to gauge your level of expertise You can then use the book to fill in the gaps in your current knowledge. This study guide will help you round out your knowledge base before tackling the exam itself.",
"If you can answer 85 percent to 90 percent or more of the review questions correctly for a given chapter, you can feel safe moving on to the next chapter. If you’re unable to answer that many questions correctly, reread the chapter and try the questions again. Your score should improve.",
"Specialized certifications are the best way to stand out from the crowd. In this age of technology certifications, you’ll find hundreds of thousands of administrators who have successfully completed the Microsoft and Cisco certification tracks. To set yourself apart from the crowd, you need a little bit more. The CEH exam is part of the EC-Council certification track, which includes the other security-centric certifications if you wish to attempt those.",
"The CEH for several years has provided a valuable benchmark of the skills of a pen tester to potential employers or clients. Once you hold the CEH certification, you’ll have the credentials to prove your competency. Moreover, certifications can’t be taken from you when you change jobs—you can take that certification with you to any position you accept.",

"Individuals who prove themselves to be competent and dedicated are the ones who will most likely be promoted. Becoming certified is a great way to prove your skill level and show your employer that you’re committed to improving your skill set. Look around you at those who are certified: They are probably the people who receive good pay raises and promotions."];

let para_container = document.getElementById('para');
let textarea = document.getElementById('tarea');
let btn = document.getElementById('btn');
let startTime, endTime;

// starttyping function define here after clicking on start btn 

const starttyping = () => {
    textarea.value = "";
    let randnum = Math.floor(Math.random() * para.length);
    para_container.innerText = para[randnum];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "OK";

}

//  after ending typing function 
const endtyping = () => {
    let date = new Date();
    endTime = date.getTime();
    let totaltime = Math.round(((endTime - startTime) / 1000));
    let total_type_words = textarea.value;
    let word_count = word_counter(total_type_words);
    let speed = Math.round((word_count / totaltime) * 60);

    para_container.innerText = "You have typed at " + speed + " WPM .\n" + check_error(para_container.innerText, total_type_words);
    para_container.style.fontSize = "30px";
    para_container.style.background = "green";

}
//  checking error while typing
let check_error = (mainstr, typestr) => {
    console.log(mainstr, typestr)
    let mainword = mainstr.split(" ");
    let typeword = typestr.split(" ");
    let count = 0;

    mainword.forEach(function (item, index) {
        if (item == typeword[index]) {
            count++;
        }

    });
    let errorcount = (mainword.length - count);
    return (count + " Correct out of " + mainword.length + " Words and the Total Errors are " + errorcount + ".");

}

const word_counter = (str) => {
    let para_words = str.split(" ").length;
    console.log(para_words)
    return para_words;

}
// onclick on start btn and OK btn 
btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        textarea.disabled = false;
        starttyping();
    }
    else if (this.innerText == 'OK') {
        if (textarea.textLength) {
            textarea.disabled = true;
            btn.innerText = 'Start';
            endtyping();
        }

    }

})