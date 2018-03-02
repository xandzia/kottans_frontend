import { getCityLatLon } from '../utils/api';
import { bindAll } from '../utils/lib';
import { placeNyanCat } from '../utils/error';
import { Component } from './Plus';

class Form extends Component {

    constructor(props) {
        super();

        this.host = document.createElement('input');
        this.host.setAttribute('type', 'text');
        this.host.setAttribute('name', 'search');
        this.host.setAttribute('id', 'user-input');
        this.host.setAttribute('placeholder', 'Search...');

        //        this.reset = document.createElement('input');
        //        this.reset.setAttribute('type','button');   
        //        this.reset.setAttribute('value','X');   
        //        this.reset.setAttribute('class','reset');   
        //        this.reset.setAttribute('aria-label','reset');

        bindAll(this, 'activatePlacesSearch');
    };

    getWeather() {
        return getCityLatLon(this.host.value)
            .then(coords => {
                this.props.onSubmit(coords);
            }).catch(nyanCat => {
                placeNyanCat(nyanCat),
                this.host.value = '';
                if (history.pushState) {
                    let newurl = window.location.origin + window.location.pathname + '';
                    window.history.pushState({ path: newurl }, '', newurl);
                };
            })
    };

    activatePlacesSearch() {
        let autocomplete = new google.maps.places.Autocomplete((this.host), {
            types: [`(cities)`],
        });
        window.google.maps.event.clearInstanceListeners(this.host);
        window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
            this.getWeather();
        });
        if (this.host.value === this.props.city && this.host.value !== '') {
            this.getWeather();
        }
    }

    render() {
        const { city, coord, weather } = this.props;
        this.host.setAttribute('value', `${city}`);
        this.host.value = city;
        return this.host;
    }
};

export default Form;
