import { Form } from './components/LocationSearch';

//let weatherGlobal = null;

//window.activatePlacesSearch = activatePlacesSearch;

//function activatePlacesSearch() {
//    getCityFromUrl(userInput);
//
//    let autocomplete = new google.maps.places.Autocomplete((userInput), {
//      types: [`(cities)`],
//    });
//    google.maps.event.clearInstanceListeners(userInput);
//    google.maps.event.addListener(autocomplete, 'place_changed', () => {
//    getCityLatLon(userInput.value);
//    });
//    resetBtn.addEventListener('click', function(){
//        userInput.value = '';
//        if (history.pushState) { 
//            let newurl = window.location.origin + window.location.pathname + '';
//            window.history.pushState({ path:newurl }, '', newurl );
//        } 
//    });
//};
//function getCityLatLon(city){
//    let geocoder =  new google.maps.Geocoder();
//    
//    geocoder.geocode( { address: `${city}`}, function(results, status) {
//        if (status == google.maps.GeocoderStatus.OK) {
//            let latitude = results[0].geometry.location.lat();
//            let longitude = results[0].geometry.location.lng();
//            
//            getWeather(latitude, longitude).then((weather) => {
////                weatherGlobal = weather;
////                return weather;
//                todayForecast(weather);
//                daysForecast(weather);
//                
//            });
//        } else {
//            console.log("Something got wrong " + status);
//            
//            placeNyanCat(nyanCat);
//        }
//    });
//};

class App {
    constructor(){
        this.form = new Form();
        this.wrapper = document.getElementById('form');
        window.activatePlacesSearch = this.form.activatePlacesSearch;
    };
    
    render() {
        this.wrapper.appendChild(this.form.render());
    }
};

export default App;
