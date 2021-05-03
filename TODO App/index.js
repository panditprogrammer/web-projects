// globle variable 
"use strict";
let input = document.getElementById('input');
let title = document.getElementById('title');
let addbtn = document.getElementById('addbtn');
let error_show = document.querySelector(".error");
let count = 0;


addbtn.addEventListener('click', addToList);

// add to list function 
function addToList(event) {
    event.preventDefault();
    if (input.value === "" || title.value === "") {
        error_show.innerHTML = `<span style="color: #ce0202;">Title or Description Fields cannot be Empty!</span>`;
        setTimeout(() => {
            error_show.innerText = "";
        }, 5000);
    }
    else {
        
        count++;
        let todo_list = document.querySelector(".todo_list");

        todo_list.innerHTML += `
         <div class="todo" >
            <div class="title_desc"> 
            <span class="title">${count + "."} ${title.value}</span>
            <li class="todo_item">${input.value}</li>
            </div>
            <div class="btn">
                <button class="check_btn">Checked</button>
                <button class="delete_btn" >Delete</button>
            </div>
        </div>`;

        if (input.value != "" || title.value != "") {
            error_show.innerHTML = `<span style="color: #008000;">List added successfully</span>`;
            setTimeout(() => {
                error_show.innerHTML = "";
            }, 5000);
        }

    }
}
