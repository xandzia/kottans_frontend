import { getCityLatLon } from '../utils/api';
import { bindAll } from '../utils/lib';
import { placeNyanCat } from '../utils/error';


class Form {

    constructor(props) {
        this.props = props || {};
        
        this.host = document.createElement('input');
        this.host.setAttribute('type','text');   
        this.host.setAttribute('name','search');   
        this.host.setAttribute('id','user-input');   
        this.host.setAttribute('placeholder','Search...');
        
        bindAll(this, 'activatePlacesSearch');
   
    };

    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        return this.render();
    };
    
    update(nextProps) {
        this.props = nextProps;
        return this.render();
    };
    
    getWeather() {
        return getCityLatLon(this.host.value)
            .then(coords => {
            this.props.onSubmit(coords)
        }).catch(nyanCat => {
            placeNyanCat(nyanCat)
        })
    };

    activatePlacesSearch() {
        let autocomplete = new google.maps.places.Autocomplete((this.host), {
          types: [`(cities)`],
        });
        window.google.maps.event.clearInstanceListeners(this.host);
        
        if ( this.host.value === '' ) {
            window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
                this.getWeather();
            }) } else {
                this.getWeather();
        }
    }
    
    render() {
        const { city, coord, weather } = this.props;
        this.host.setAttribute('value',`${city}`);
        this.host.value = city;
        return this.host;
    }
};
export default Form;
