import { getCityLatLon } from '../utils/api';
import { bindAll } from '../utils/lib';

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
    
    

    activatePlacesSearch() {
        let autocomplete = new google.maps.places.Autocomplete((this.host), {
          types: [`(cities)`],
        });
        window.google.maps.event.clearInstanceListeners(this.host);
        window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
        getCityLatLon(this.host.value).then(coords => {
            this.props.onSubmit(coords)
        }, console.log(this.state));
        });
        
    }
    
    render() {
        const { city, coord } = this.props;        
        this.host.setAttribute('value',`${city}`);   
        return this.host;
    }
};
export default Form;
