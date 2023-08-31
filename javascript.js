const ipData = document.querySelector("#ip");
const countryData = document.querySelector("#country");
const cityData = document.querySelector("#city");

fetch("http://ip-api.com/json/?fields=61439")
  .then((res) => res.json())
  .then((res) => {
    ipData.textContent = "IP: " + res.query;
    countryData.textContent = "Country: " + res.country;
    sessionStorage.setItem("country", res.country);
    cityData.textContent = "City: " + res.city;
    console.log(res.query, res.country, res.city);
  });
