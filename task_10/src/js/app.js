import '../css/main.scss';

import { activatePlacesSearch } from './search';
import { getLocalStorage } from './localStorage';
import { ShowFavouriteCity, favourireList } from './favourite';
import { favourit } from './selectors';

window.activatePlacesSearch = activatePlacesSearch;
getLocalStorage(favourireList);
new ShowFavouriteCity(favourit);
