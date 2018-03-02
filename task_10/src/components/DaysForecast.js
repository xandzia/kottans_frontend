import {
    changeDateTime,
    getIcon } from '../utils/lib';

import { Component } from './Plus';

class DaysForecast extends Component {

    constructor(props) {
        super();

        this.days = document.querySelector('.another-days');
    };

    render() {
        this.days.innerHTML = '';
        const {
            weather
        } = this.props;
        if (!this.props.weather) return '';

        const icon = getIcon(weather.icon);
        let arr = [];
        for (let i = 1; i < 5; i++) {
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
