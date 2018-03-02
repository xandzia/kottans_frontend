import { getCityFromUrl } from './url';
import { userInput, resetBtn, nyanCat } from './selectors';
import { placeNyanCat } from './nyanCat';
import { getWeather } from './requestRespon';
import { getUrl } from './requestRespon';

export const activatePlacesSearch = () => {
    getCityFromUrl(userInput);

    let autocomplete = new google.maps.places.Autocomplete((userInput), {
      types: [`(cities)`],
//      componentRestrictions: {country: "us"}
    });
    google.maps.event.clearInstanceListeners(userInput);
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
    getWeather();
    });
    resetBtn.addEventListener('click', function(){
        userInput.value = '';
        if (history.pushState) { 
            let newurl = window.location.origin + window.location.pathname + '';
            window.history.pushState({ path:newurl }, '', newurl );
        } 
    });
};

export function getCityLatLon(){
    let geocoder =  new google.maps.Geocoder();
    
    geocoder.geocode( { address: `${userInput.value}`}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            let latitude = results[0].geometry.location.lat();
            let longitude = results[0].geometry.location.lng();
            
            getUrl(latitude, longitude);
        } else {
            console.log("Something got wrong " + status);
            
            placeNyanCat(nyanCat);
        }
    });
};
