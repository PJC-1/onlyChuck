// hardcoding the list of chuck norris gifs because the giphy api query that
// does the random gif with a tag name seems to return unexpected results.
const gifList = [
    'WS4j0QDGlQiQmPF5h6',
    '3o7bu6WM0UN8TgPO92',
    '3oEjHYLPJiUl1eAlfG',
    'l1J3HBqTGW3fXBPZ6',
    'l1J3AS8RShMebsmgU',
    'l1J3Tqz2fpsx60MDe',
    '26n6PChdnDrBhmc7u',
    'l0IyeJf2wdnLkXk7S',
    '26gR1DpB7NvMw9Iys',
    'l1J3KhGhb1E9vqWQ0',
    'l1J3nY7N7LBrBobVm',
    'l1J3nSSLY2oRD2Wys',
    'l1J3G1bFnhwjxycYE',
    'd2jfPv6CUzpopfLa',
    '1125FQpCo6Ubhm',
    '13fR00PIYwb7Gg',
    '7qZ3ZX1Gu3TZm',
    'O9zqilrEJM3i8',
    'Z9qoCpTTIQ0qQ',
    'pbXhMwguvmxZS',
    'ZzrpgP88U5Jio',
    'GboWaubMldbtC',
    'p0t2je4xxxZtu',
    'ylp4hl9xEaWyc',
    'Ok8r4XMtqTj3O',
    'WNuF3KK9NaQ8w',
    'AhwuGl0MPNzyg',
    'r6vy1WrYu0UoM',
    'uUfbtweIW3A7S',
    'K2ZWOSOLLYsAE',
    'jfUuYE6CmkUDK',
    'L3cUQlPbQMrwQ',
    'owBJvh98w2dtm',
    'jtYcqQmOOzMkw',
    'U8u2ftwuzNn9e',
    'vwt5ktr2DZnS8',
    'PcVGf1Wg7peh2',
    'T9sIxZs1X3LhK',
    'RbDtl0VyLNhug',
    '9e5G4lcwAeqlO',
    '5pN0r5Y8nOwJW',
    'S5KZsTa5ujKrm',
    'rocEQct6iWTOU',
    '9qajBrIQw0XFC',
    'TbYg9T3DKrNwk',
    'Ys160GrCL36kU',
    'M4LzMbq9sGBO',
    'qLjBnqP1xfl6',
    'vaWd6xDKtLL5S'
];

// executing both functions to get an initial joke and gif on page load.
fetchData();
gifSelect()

// caching jokeTarget into a variable.
const jokeTarget = document.getElementById("jokeTarget");

// function to get display a joke.
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

// currently not using this function.
// function fetchGif() {
//     axios.get('http://api.giphy.com/v1/gifs/random?api_key=Neb2PgvlF9vAVOInFo01kewNGXPPlEqX&tag=chuck-norris&limit=1')
//     .then(function(response) {
//         console.log("Response: ", response.data.data.image_original_url);
//         const gif = response.data.data.image_original_url;
//         const image = document.getElementById("gifTarget").src = gif;
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
// }

// array of days in a week
const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

// array of months in a year
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

// caching an instance of the date object
let date = new Date();

// caching the day, month, and year
const dayIndex = date.getDay();
const day = date.getDate();
const monthIndex = date.getMonth();
const year =  date.getFullYear();

// formatting the date string
const formatedDate = days[dayIndex] + ', ' + day + ' ' + months[monthIndex] + ' ' + year;
// displaying the formatted date in the html
document.getElementById("dateTarget").innerHTML = formatedDate;

// wired to the button
function jokeButton() {
    fetchData();
    gifSelect();
}

const clockInterval = setInterval(clock, 1000);

function clock() {
    const d = new Date();
    const t = d.toLocaleTimeString();
    document.getElementById("timeTarget").innerHTML = t;
}

function gifSelect() {
    const gif = gifList[Math.floor(Math.random()*gifList.length)];
    const url = `https://media1.giphy.com/media/${gif}/giphy.gif`;
    const image = document.getElementById("gifTarget").src = url;
}
