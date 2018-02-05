function getWeatherByCityName() {
    const apiPath = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const appId = '&APPID=ceae2108078d09147f9148fbef299e0f';
    const units = '&units=metric';
    let userInput = document.getElementById('user-input').value;
    let test = document.getElementById('test');

    let city = userInput;
    let url = apiPath+city+units+appId;
    sendRequest(url);
    console.log(url);
    
};
function pressEnter(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    getWeatherByCityName();
  }
};

function sendRequest(url){
  fetch(url)
    .then(response => response.json())
    .then(json => {
        //const main = {};
          
       putIntoHtml(json);
      console.log(json);
  })
};


//function putIntoHtml(weatherInfo) {
//    test.innerHTML = json;
//};