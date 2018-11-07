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

function fetchGif() {
    axios.get('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=API_KEY&limit=1')
    .then(function(response) {
        console.log("Response: ", response.data);
    })
    .catch(function(error) {
        console.log(error);
    });
}

fetchGif();

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

const clockInterval = setInterval(clock, 1000);

function clock() {
    const d = new Date();
    const t = d.toLocaleTimeString();
    document.getElementById("timeTarget").innerHTML = t;
}
