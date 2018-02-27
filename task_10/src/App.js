import Form from './components/LocationSearch';
import TodayForecast from './components/TodayForecast';

import { getWeather, populateCityToUrl } from './utils/api';
import { bindAll } from './utils/lib';

class App {
    constructor(host){
        this.state = {
            city: new URLSearchParams(window.location.search).get('city') || '',
            coord: {
                lat: null,
                lon: null
            },
            weather: null,
        };
        
        this.host = host;
        
        this.form = new Form({
            city: this.state.city,
            coord: this.state.coord,
            onSubmit: this.onSearchSubmit,
        });
        
        this.todayForecast = new TodayForecast({ weather: this.state.weather });
        window.activatePlacesSearch = this.form.activatePlacesSearch;
        
        bindAll(this, 'onSearchSubmit');

    };
    
    onSearchSubmit(coord) {
        console.log('1', coord);
        getWeather(coord[0], coord[1]).then(( weather ) => {
            this.updateState({
                weather,
                coord,
            });
            populateCityToUrl(weather.city_name);
        });

    };
    
    updateState(nextState){
        this.state = Object.assign({}, this.state, nextState);
        return this.render();
    };
    
    
    render() {
        const  { city, coord, weather } =  this.state;
        this.host.appendChild(
            this.form.update({ city, onSubmit: this.onSearchSubmit }),
        );
        console.log(this.todayForecast);
        return [
            this.host,
            this.todayForecast.update({ weather }),
        ];
    }
};

export default App;
