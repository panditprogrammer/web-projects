//javascript ES6 not implemented   only using prototype
// book prototype
function Book(name, author, catagories) {
    this.name = name;
    this.author = author;
    this.catagories = catagories;
}

// display function
function Display() {

}

// defining Display prototype addbookfunction 
Display.prototype.addBookFunction = function (book) {
    console.log("You have added a book");
    let tableBody = document.getElementById("tableBody");
    let bookSn;
    //to show in table
    let tableString = `
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.catagories}</td>
                        `;

    tableBody.innerHTML += tableString

}
//defining Display prototype clearinputfunction
Display.prototype.clearInputField = function () {
    let formId = document.getElementById("formId");
    formId.reset();
}


// validate function 
Display.prototype.validate = function (book) {
    if (book.name.length == "" || book.author.length < 2)
        return false;
    else
        return true;
}

// show Error the user 
Display.prototype.showMessage = function (type,msg) {
    let message = document.getElementById("showError");
    message.innerHTML = 
    `<div class="alert alert-${type} alert-dismissible fade show text-center role="alert">
        <strong >  message !</strong>${msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

    // to remove message 
    setTimeout(function () {
        
        message.innerHTML = '';
    },5000);

}



let formId = document.getElementById("formId");
formId.addEventListener('submit', addBookFunction);

//to add book getting data from HTML   
function addBookFunction(e) {
    e.preventDefault(); //this remove default behaviour of form onclick

    // targetting id and create variables
    let name = document.getElementById("inputBookName").value;
    let author = document.getElementById("inputAuthor").value;
    let catagories;

    let programming = document.getElementById("programming");
    let fiction = document.getElementById("fiction");
    let story = document.getElementById("story");

    // checking selected value 
    if (programming.selected) {
        catagories = programming.value;
    }
    else if (fiction.selected) {
        catagories = fiction.value;
    }
    else if (story.selected) {
        catagories = story.value;
    }

    let book = new Book(name, author, catagories);

    // adding book to the table
    let display = new Display();

    //checking validation 
    if (display.validate(book)) {
        display.addBookFunction(book);
        display.clearInputField(); //clear input field
        display.showMessage("success"," Book added successfully!")
    }
    else {
        display.showMessage("danger","  Please Enter Book Details!");
    }
    console.log(book);

}