// <!-- jquery for case counter  section-->
// countering the cases 
$('.counter').counterUp({
    delay: 10,
    time: 3000
});

let upbtn = document.getElementById("gotop");

window.onscroll = function () {
    scrollbtn();
}

// goto function show or hide
function scrollbtn() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        upbtn.style.display = "inline-block";
    } else {
        upbtn.style.display = "none";
    }
}

// go to top function 
function gotop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

// fetching data using api
function fetch() {
    $.get("https://api.covid19api.com/summary", function (data) {

        country_length = data['Countries'].length;
        let _table = document.getElementById('table');

        // console.log(data['Countries'][76]['Country']);

        for (let i = 1; i < country_length; i++) {
            let table_row = _table.insertRow();
            //create cell no.1
            table_row.insertCell(0);
            _table.rows[i].cells[0].innerHTML = data['Countries'][i - 1]['Country'];
            _table.rows[i].cells[0].style.background = "#ffcc66";
            _table.rows[i].cells[0].style.textAlign = "left";

            table_row.insertCell(1);
            _table.rows[i].cells[1].innerHTML = data['Countries'][i - 1]['TotalConfirmed'];
            _table.rows[i].cells[1].style.background = "orange";
            _table.rows[i].cells[1].classList.add('counter');

            table_row.insertCell(2);
            _table.rows[i].cells[2].innerHTML = data['Countries'][i - 1]['TotalRecovered'];
            _table.rows[i].cells[2].style.background = "lightgreen";
            _table.rows[i].cells[2].classList.add('counter');

            table_row.insertCell(3);
            _table.rows[i].cells[3].innerHTML = data['Countries'][i - 1]['TotalDeaths'];
            _table.rows[i].cells[3].style.background = "#d21414";
            _table.rows[i].cells[3].style.color = "#fff";
            _table.rows[i].cells[3].classList.add('counter');

            table_row.insertCell(4);
            _table.rows[i].cells[4].innerHTML = data['Countries'][i - 1]['NewConfirmed'];
            _table.rows[i].cells[4].style.background = "orange";
            _table.rows[i].cells[4].classList.add('counter');

            table_row.insertCell(5);
            _table.rows[i].cells[5].innerHTML = data['Countries'][i - 1]['NewRecovered'];
            _table.rows[i].cells[5].style.background = "lightgreen";
            _table.rows[i].cells[5].classList.add('counter');

            table_row.insertCell(6);
            _table.rows[i].cells[6].innerHTML = data['Countries'][i - 1]['NewDeaths'];
            _table.rows[i].cells[6].style.background = "#d21414";
            _table.rows[i].cells[6].style.color = "#fff";
            _table.rows[i].cells[6].classList.add('counter');
            // "Date":"2021-05-08T13:15:42.098Z"
            table_row.insertCell(7);
            _table.rows[i].cells[7].innerHTML = data['Countries'][i - 1]['Date'];
            // _table.rows[i].cells[7].style.background = "#d21414";
            // _table.rows[i].cells[7].style.color = "#fff";
            _table.rows[i].cells[7].classList.add('counter');

        }



    });


}




