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

function jokeButton() {
    fetchData();
}
