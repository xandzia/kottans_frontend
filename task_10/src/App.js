import Form from './components/LocationSearch';
import TodayForecast from './components/TodayForecast';
import DaysForecast from './components/DaysForecast';
import FavouriteCities from './components/FavouriteCities';

import { getWeather } from './utils/api';
import { bindAll } from './utils/lib';

import { swapFC } from './utils/swapFC';

class App {
    constructor(host) {
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

        this.todayForecast = new TodayForecast({
            weather: this.state.weather
        });
        this.daysForecast = new DaysForecast({
            weather: this.state.weather
        });
        this.favouriteCities = new FavouriteCities({
            city: this.state.city,
            onSub: this.onSearchSubmit,
        });
        window.activatePlacesSearch = this.form.activatePlacesSearch;
        
        bindAll(this, 'onSearchSubmit');
    };

    onSearchSubmit(coord, city) {
        getWeather(coord[0], coord[1]).then((weather) => {
            city = weather.city_name;
            this.updateState({
                weather,
                coord,
                city,
            });
            window.history.pushState(null, null, `?city=${weather.city_name}`);
            swapFC();
        }).catch(error => {
            console.log(error)            
        })
    };


    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        return this.render();
    };
    
    render() {
        const  { city, coord, weather } =  this.state;
        this.host.appendChild(
            this.form.update({ city, onSubmit: this.onSearchSubmit }),
        );
        return [
            this.host,
            this.favouriteCities.update({ city, onSub: this.onSearchSubmit }),
            this.todayForecast.update({ weather }),
            this.daysForecast.update({ weather }),
        ];
    }
};

export default App;
