import { changeDateTime, getIcon } from '../utils/lib';

class DaysForecast {
    
    constructor(props) {
        this.props = props || {};
        
        this.days = document.querySelector('.another-days');         
    };
    
    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        return this.render();
    };
    
    update(nextProps) {
        this.props = nextProps;
        return this.render();
    };
    
    render() {
        if (!this.props.weather) return '';
        const { weather } = this.props;
        
        const icon = getIcon(weather.icon);
        let arr = [];
        for (let i = 1; i<5; i++) {
            let datetime = weather.data[i].datetime;
            let rename = changeDateTime(datetime);
            let icon = getIcon(weather.data[i].weather.code);
            arr += `<div class="a-day">
                    <time datatime="${datetime}">${rename}</time>
                    <img src="src/img/icons/big/${icon}.svg" alt="${icon}" class="icon">
                    <div><span class="temp">${weather.data[i].temp}</span><sup>o</sup><span class="cf">C</span></div>
                    </div>`;
        };
        this.days.innerHTML = arr;
        return this.days;
    }
};

export default DaysForecast;
