//creating main validate function

function validation() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;


    // checking user name 
    if (username == "") {
        document.getElementById("checkusername").innerText = "Please Enter username...";
        return false;
    }
    //removing error message after 5 seconds
    setTimeout(() => {
        document.getElementById("checkusername").innerText = "";

    }, 5000);

    if (username.length < 4 || username.length > 20) {
        document.getElementById("checkusername").innerText = "Username must be 4-20 characters!";
        return false;
    }
    if (!isNaN(username)) {
        document.getElementById("checkusername").innerText = "Username must be characters!";
        return false;
    }


    //checking password
    if (password == "") {
        document.getElementById("checkpassword").innerText = "Please Enter password...";
        return false;
    }
    if (password.length < 6 || username.length > 20) {
        document.getElementById("checkpassword").innerText = "Password must be 6-20 characters!";
        return false;
    }
    //removing error message after 5 seconds
    setTimeout(() => {
        document.getElementById("checkpassword").innerText = "";

    }, 5000);


    //checking confirm password
    if (cpassword == "") {
        document.getElementById("checkcpassword").innerText = "Please Enter Confirm password...";
        return false;
    }
    if (cpassword != password) {
        document.getElementById("checkcpassword").innerText = "Confirm password missmatch!";
        return false;
    }
    //removing error message after 5 seconds
    setTimeout(() => {
        document.getElementById("checkcpassword").innerText = "";

    }, 5000);


    //checking mobile number 
    if (mobile == "") {
        document.getElementById("checkmobile").innerText = "Please Enter mobile...";
        return false;
    }

    if (isNaN(mobile)) {
        document.getElementById("checkmobile").innerText = "Invalid Mobile numer!";
        return false;
    }

    if (mobile.length != 10) {
        document.getElementById("checkmobile").innerText = "Mobile number must be 10 digits";
        return false;
    }
    //removing error message after 5 seconds
    setTimeout(() => {
        document.getElementById("checkmobile").innerText = "";

    }, 5000);


    //checking email 
    if (email == "") {
        document.getElementById("checkemail").innerText = "Please Enter Email...";
        return false;
    }
    if (email.indexOf('@') <= 1) {
        document.getElementById("checkemail").innerText = "Please Enter Correct Email ";
        return false;
    }
    if (email.charAt(email.length - 4) != '.' && email.charAt(email.length - 3) != '.') {
        document.getElementById("checkemail").innerText = "Please Enter Correct Email ";
        return false;
    }
    //removing error message after 5 seconds
    setTimeout(() => {
        document.getElementById("checkemail").innerText = "";

    }, 5000);

}