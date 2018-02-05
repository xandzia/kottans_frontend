const apiPath = 'https://api.openweathermap.org/data/2.5/weather?q=';
let userInput = document.getElementById('user-input').value;

let city = userInput;
let url = apiPath+city

function pressEnter(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    updateByCity();
  }
};

function sendRequest(url){
  fetch(url)
    .then(response => response.json())

    })
}
