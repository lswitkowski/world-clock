
function getTime(){
let losAngelesElement= document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime=moment().tz("America/Los_Angeles");
 losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
 losAngelesTimeElement.innerHTML = losAngelesTime.format(
   "h:mm:ss [<small>] a[</small>]" );


let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");
 parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
 parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>] a[</small>]");

 let sydneyElement = document.querySelector("#sydney");
 let sydneyDateElement = sydneyElement.querySelector(".date");
 let sydneyTimeElement = sydneyElement.querySelector(".time");
 let sydneyTime = moment().tz("Australia/Sydney");
 sydneyDateElement.innerHTML = sydneyTime.format("MMMM	Do YYYY");
 sydneyTimeElement.innerHTML = sydneyTime.format(
   "h:mm:ss  [<small>] a[</small>]"
 );}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current"){cityTimeZone = moment.tz.guess();};
let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    " a"
  )}</small></div>
  </div></br><a href="index.html" class="index">All Cities</a>
  `;}




 setInterval(getTime, 1000);

 let citiesSelectElement = document.querySelector("#city");
 citiesSelectElement.addEventListener("change",updateCity);
