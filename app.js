console.log("hello world");
fetchData();

const jokeTarget = document.getElementById("jokeTarget");

function fetchData() {
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(function(response){
      console.log("Random Joke: ", response.data.value);
      const joke = response.data.value;
      jokeTarget.innerHTML = joke;
    })
    .catch(function(error){
      console.log(error);
    });
}

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let date = new Date();

const dayIndex = date.getDay();
const day = date.getDate();
const monthIndex = date.getMonth();
const year =  date.getFullYear();

const formatedDate = days[dayIndex] + ', ' + day + ' ' + months[monthIndex] + ' ' + year;
document.getElementById("dateTarget").innerHTML = formatedDate;

function jokeButton() {
    fetchData();
}

let hour = date.getHours();
let minutes = date.getMinutes();
let hourPeriod;
const am = "AM";
const pm = "PM";

if(hour < 12) {
    hourPeriod = am;
} else {
    hourPeriod = pm;
}

console.log(hour + ":" + minutes + " " + hourPeriod);

let formatedTime = hour + ":" + minutes + " " + hourPeriod;
document.getElementById("timeTarget").innerHTML = formatedTime;
