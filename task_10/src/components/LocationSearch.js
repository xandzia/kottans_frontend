import { getWeather, getCityFromUrl, getCityLatLon } from '../utils/api';
import { bindAll } from '../utils/lib';

export class Form {
    constructor() {
        this.host = document.createElement('input');
        this.host.setAttribute('type','text');   
        this.host.setAttribute('name','search');   
        this.host.setAttribute('id','user-input');   
        this.host.setAttribute('placeholder','Search...');
        
        bindAll(this, 'activatePlacesSearch');

        
    };
    activatePlacesSearch() {
        getCityFromUrl(this.host);
        let autocomplete = new google.maps.places.Autocomplete((this.host), {
          types: [`(cities)`],
        });
        window.google.maps.event.clearInstanceListeners(this.host);
        window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
        getCityLatLon(this.host.value);
        });
        
    }
    
    render() {
//        const { isValid } = this.state;
        return this.host;
    }
};