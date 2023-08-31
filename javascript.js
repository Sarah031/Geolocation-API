const ipData = document.querySelector("#ip");
const countryData = document.querySelector("#country");
const cityData = document.querySelector("#city");

fetch(
  "http://api.ipstack.com/95.168.121.26?access_key=4d1e7095c018da932ccf5e4f3753023b"
)
  .then((res) => res.json())
  .then((res) => {
    ipData.textContent = "IP: " + res.ip;
    countryData.textContent = "Country: " + res.country_name;
    sessionStorage.setItem("country", res.country);
    cityData.textContent = "City: " + res.city;
    console.log(res.query, res.country_name, res.city);
  });
