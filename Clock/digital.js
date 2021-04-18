let digital=() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // let t = hours >=12 ? 'pm' : 'am' ;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;
    // document.getElementById("period").innerHTML = period;

    setTimeout(digital,10)

}
digital();