import { getIcon, changeDateTime, populateCityToUrl } from '../utils/lib';

//const oneDay = document.querySelector('.one-day');

class TodayForecast{
    
    constructor(props) {
        this.props = props || {};
        
        this.oneDay = document.querySelector('.one-day');
                
    };
    
    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        return this.render();
    };
    
    update(nextProps) {
        this.props = nextProps;
        return this.render();
    };
//    todayForecast(json) {
//        const main = {};
//        main.city = weather.city_name;
//        main.day = weather.data[0].datetime;
//        main.temp = weather.data[0].temp;
//        main.tempFeel = weather.data[0].app_temp;
//        main.description = weather.data[0].weather.description;
//        main.humidity = weather.data[0].rh;
//        main.icon = weather.data[0].weather.code;
//
//        main.icon = getIcon(main.icon);
//    };
    
    render() {
        if (!this.props.weather) return '';
        const { weather } = this.props;
        
        const icon = getIcon(weather.icon);
        const dataTime = changeDateTime(weather.data[0].datetime);
        
        this.oneDay.innerHTML = `<div class="btn-group">
                                <button class="f">F</button>
                                <button class="c">C</button>
                            </div>
                            <h2 class="city">${weather.city_name}</h2>
                            <div class="centre">
                                <span class="temp">${weather.data[0].temp}</span><sup>o</sup><span class="cf">C</span>
                                <img class="icon" src="src/img/icons/big/${icon}.svg" alt="${icon}">
                            </div>
                            <p class="discriptions">
                                <time class="d-time" datatime="${weather.data[0].datetime}">${dataTime}</time>   
                                <span class="desc">${weather.data[0].weather.description}</span>
                                <span class="humid">${weather.data[0].rh}%</span>
                            </p>`;
    //    swapCF();
    //    star.onclick = function(){addToFavourite(main.city)};
        return this.oneDay;
    }
};

export default TodayForecast;
