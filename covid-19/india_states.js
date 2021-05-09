// covid live status india states wise 
function india_fetch() {
    $.get("https://api.covid19india.org/data.json", function (india_data) {


        let _table = document.getElementById('india_table');

        // console.log(india_data.statewise);

        for (let i = 1; i < india_data.statewise.length-1; i++) {
            let table_row = _table.insertRow();
            //create cell no.1
            table_row.insertCell(0);
            _table.rows[i].cells[0].innerHTML = india_data.statewise[i].state;
            _table.rows[i].cells[0].style.background = "#ffcc66";
            _table.rows[i].cells[0].style.textAlign = "left";

            table_row.insertCell(1);
            _table.rows[i].cells[1].innerHTML = india_data.statewise[i].confirmed;
            _table.rows[i].cells[1].style.background = "orange";
            _table.rows[i].cells[1].classList.add('counter');

            table_row.insertCell(2);
            _table.rows[i].cells[2].innerHTML = india_data.statewise[i].recovered;
            _table.rows[i].cells[2].style.background = "lightgreen";
            _table.rows[i].cells[2].classList.add('counter');

            table_row.insertCell(3);
            _table.rows[i].cells[3].innerHTML = india_data.statewise[i].deaths;
            _table.rows[i].cells[3].style.background = "#d21414";
            _table.rows[i].cells[3].style.color = "#fff";
            _table.rows[i].cells[3].classList.add('counter');

            table_row.insertCell(4);
            _table.rows[i].cells[4].innerHTML = india_data.statewise[i].migratedother;
            _table.rows[i].cells[4].style.background = "orange";
            _table.rows[i].cells[4].classList.add('counter');

            table_row.insertCell(5);
            _table.rows[i].cells[5].innerHTML = india_data.statewise[i].lastupdatedtime;
            _table.rows[i].cells[5].style.background = "lightgreen";
            _table.rows[i].cells[5].classList.add('counter');

        }

    });


}
