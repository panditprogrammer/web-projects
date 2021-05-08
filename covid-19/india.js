$.get("https://api.covid19api.com/summary", function (data) {

    country_length = data['Countries'].length;

    console.log(data['Countries'][76]['Country']);

    console.log(data['Countries'][76]['TotalConfirmed']);
    // document.getElementById('Recovered').innerHTML = ;


    let country_h = document.getElementById("country_h");
    let country = document.getElementById("country");

    let Total_case_h = document.getElementById("Total_case_h");

    let Recovered_h = document.getElementById("Recovered_h");

    let Deaths_h = document.getElementById("Deaths_h");

    let update_h = document.getElementById("update_h");

    // assigning value 
    country_h.innerText = data['Countries'][76]['Country'];
    Total_case_h.innerText =  data['Countries'][76]['TotalConfirmed']
    Recovered_h.innerText = data['Countries'][76]['TotalRecovered'];
    Deaths_h.innerText = data['Countries'][76]['TotalDeaths'];
    update_h.innerText = data['Countries'][76]['Date']

    


})