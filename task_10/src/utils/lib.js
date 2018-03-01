export function bindAll(context, ...names) {
  names.forEach(name => {
    if (typeof context[name] === 'function') {
      context[name] = context[name].bind(context);
    } else {
      throw Error(
        `Expected function ${name}. Instead received: ${typeof context[name]}`
      );
    }
  });
};

export function removeFavourite(arr) {
    let what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
};

export function showHideStar(elem) {
    elem.classList.add('change');
    setTimeout(function() {
        elem.classList.remove('change');
    }, 2000)
};

export function saveLocalStorage(favourireList) {
    let fList = JSON.stringify(favourireList);
    localStorage.setItem('favourireList', fList);
};

export function changeDateTime(date) {
    date = date.split('-');
    let mon = date[1];
    switch(mon) {
        case '01': mon = 'Jan ';
            break;
        case '02': mon = 'Feb ';
            break;
        case '03': mon = 'Mar ';
            break;
        case '04': mon = 'Apr ';
            break;
        case '05': mon = 'May ';
            break;
        case '06': mon = 'Jun ';
            break;
        case '07': mon = 'Jul ';
            break;
        case '08': mon = 'Aug ';
            break;
        case '09': mon = 'Sept ';
            break;
        case '10': mon = 'Oct ';
            break;
        case '11': mon = 'Nov ';
            break;
        case '12': mon = 'Dec ';
            break;
    }
    date = mon+date[2];
    return date;
};

export function getIcon(iconCode) {
    const icons = {
        cloud: 'cloud',
        cloudy: 'cloudy',
        doubleCloudy: 'double-cloudy',
        doubleRain: 'double-rain',
        rain: 'rain',
        rainbow: 'rainbow',
        snowflake: 'snowflake',
        snowy: 'snowy',
        storm: 'storm',
        stormRain: 'storm-rain',
        sun: 'sun'
    };
    let icon='';
    iconCode = Number(iconCode);
    if (iconCode >= 200 && iconCode <= 202) {
        icon = icons.stormRain;
    } else if (iconCode >= 230 && iconCode <= 233) {
        icon = icons.storm;
    } else if (iconCode >=300 && iconCode <=500 || iconCode === 521 || iconCode === 900) {
        icon = icons.rain;
    } else if (iconCode >= 501 && iconCode <= 522) {
        icon = icons.doubleRain;
    } else if (iconCode >= 600 && iconCode <= 623) {
        icon = icons.snowy;
    } else if (iconCode === 611 || iconCode === 612) {
        icon = icons.cloud;
    } else if (iconCode >= 700 && iconCode <= 751 || iconCode >=801 && iconCode <= 803) {
        icon = icons.cloudy;
    } else if (iconCode === 804) {
        icon = icons.doubleCloudy;
    } else {
        icon = icons.sun;
        }
    return icon;
};
