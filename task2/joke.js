const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', getjoke)

button.addEventListener('click', getjoke);

 async function getjoke(){
const jokeData = await fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
})
const jokeObj = await jokeData.json();
/*console.log(jokeObj.joke)*/
jokeText.innerHTML = jokeObj.joke;
}
/*const categorySelect = document.getElementById("category");
const getJokeBtn = document.getElementById("getJokeBtn");
const jokeText = document.getElementById("joke");

getJokeBtn.addEventListener("click", getJoke);

async function getJoke() {
  const category = categorySelect.value;
  const apiUrl = `https://icanhazdadjoke.com/${category}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.type === "single") {
      jokeText.innerText = data.joke;
    } else {
      jokeText.innerText = `${data.setup} ${data.delivery}`;
    }
  } catch (error) {
    console.log("Error fetching joke:", error);
  }
}*/
