let getbtn = document.getElementById("getbtn");
let showbtn = document.getElementById("sendbtn");


// getbtn.addEventListener('click', getbtnClicked);

// function getbtnClicked() {
//     //creating object of xhr
//     const xhr = new XMLHttpRequest();

//     //open the object with get request
//     // xhr.open('GET', 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8', true);

//     //open object with post request
//     xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
//     xhr.getResponseHeader('content-type','application/x-www-form-urlencoded');

//     console.log("clicked");

//     // progress function
//     xhr.onprogress = function () {
//         console.log("Data fetching....");
//     }

//     // show the ready state change like open, onprogress, onload,done
//     xhr.onreadystatechange = function () {
//         console.log("state is ", xhr.readyState);
//     }

//     //onload
//     xhr.onload = function () {
//         //checking the status of response
//         if (this.status === 200)
//             console.log(this.responseText);
//         else
//             console.error("Unable to fetch data!"); //showing error 
//     }

//     // sending request 
//     parameters = "name=test&salary=123&age=23";
//     xhr.send(parameters);

//     console.log("last console line.");


// }

showbtn.addEventListener('click', showbtnClicked);

function showbtnClicked() {
    //creating object of xhr
    const xhr = new XMLHttpRequest();

    //open the object with get request
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    console.log("clicked");

    //onload
    xhr.onload = function () {
        //checking the status of response
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');

            //manipulating data in list
            let str = "";
            for (i in obj.data) {
                str += `
                   <tr>
                <th scope="row">${obj.data[i].id}</th>
                <td> ${obj.data[i].employee_name}</td>
                <td>${obj.data[i].employee_salary}</td>
                <td>@ ${obj.data[i].employee_age}</td>
              </tr>

                   `
            }
            console.log();

            list.innerHTML = str;
        }
        else
            console.error("Unable to fetch data!"); //showing error 
    }

    //sending request
    xhr.send();
}