import { removeFavourite, saveLocalStorage, bindAll } from '../utils/lib';
import { getCityLatLon } from '../utils/api';

class FavouriteCities {

    constructor(props) {
        this.props = props || {};
        this.state = {
            favourireList: this.getLocalStorage(),
        };
        
        this.host = document.getElementById('header');
        
        this.list = document.createElement('div'); 
		this.list.classList.add('favour-list');
        this.host.appendChild(this.list);
        
		this.input = document.createElement('input');
		this.input.classList.add('favour-check');
        this.input.setAttribute('id','favour-check');   
        this.input.setAttribute('type','checkbox');   
		this.list.appendChild(this.input);
        
        this.label = document.createElement('label');
		this.label.classList.add('favour-input');
        this.label.setAttribute('for','favour-check');   
		this.list.appendChild(this.label);	
        
		this.ul = document.createElement('ul');
		this.ul.classList.add('navigation');
        this.ul.setAttribute('id','navigation1');   
		this.list.appendChild(this.ul);
        
        this.star = document.createElement('button'); 
		this.star.classList.add('favourite');
        this.host.appendChild(this.star);
        
        bindAll(this, 'addToFavourite', 'showFavouriteCity');
        
        console.log(this.star.dataset.favourite);
    };

    updateState(nextState) {
        this.state = Object.assign({}, this.state, nextState);
        return this.render();
    };
    
    update(nextProps) {
        this.props = nextProps;
        return this.render();
    };
    
    showFavouriteCity(event) {
        event.preventDefault();
        
        const userInput = document.getElementById('user-input');
        const target = event.target.innerHTML;
        userInput.value = target;
        
		getCityLatLon(target).then(coords => { this.props.onSub(coords) }),
            this.star.setAttribute('data-favourite', true)
    };
    
    getLocalStorage() {
        let fList = localStorage.getItem('favourireList');
        fList = JSON.parse(fList);
        if (!fList) {
            fList = [];
        };
        return fList;
    };
    
    
    addToFavourite() {
        console.log(this.props.city);
        if( this.star.dataset.favourite === 'true') {
            this.star.setAttribute('data-favourite', false);
            let delCity = document.getElementById(this.props.city);
            delCity.remove();
            removeFavourite(this.state.favourireList, this.props.city);
            saveLocalStorage(this.state.favourireList);
        } else {
            let list = document.createElement('li');
            list.setAttribute('id', this.props.city);
            list.innerHTML = `<a>${this.props.city}</a>`;
            this.star.setAttribute('data-favourite', true);
            this.ul.appendChild(list);
//            showHideStar(favourit);
            this.state.favourireList.push(this.props.city);
            saveLocalStorage(this.state.favourireList);
        }
    }
    
    
    
    render() {
        const { city, coord } = this.props;        
        const { favourireList } = this.state;        
        
        this.ul.innerHTML = '';
        for (let i =0; i<favourireList.length; i++) {
            const list = `<li id="${favourireList[i]}">
                            <a>${favourireList[i]}</a>
                            </li>`;
            this.ul.insertAdjacentHTML('beforeend', list);
//            showHideStar(favourit);           
        };
        this.star.addEventListener('click', this.addToFavourite);
        this.ul.addEventListener('click', this.showFavouriteCity);
        return [ this.list, this.star, this.ul ];
    }
};
export default FavouriteCities;
