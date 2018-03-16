import { Component } from '../Facepalm';
import { bindAll, toHtml } from '../utils/index';
import { AUTH_SERVICE } from '../auth/login.service';

import Header from './Header';
import Footer from './Footer';


class Singup extends Component {
    constructor(props) {
        super(props);
        
        this.host = document.createElement('div');
        
        this.header = new Header();
        this.footer = new Footer();

        bindAll(this, 'handleSubmit');
        this.host.addEventListener('submit', this.handleSubmit );
   }
    
    storeList() {
        return fetch("https://pizza-tele.ga/api/v1/store/list")
        .then(res => {
            return res.json()
        })
        .catch(e => {
            console.log(e)
        });
    }
    
    handleSubmit(ev) {
        ev.preventDefault();

        const store = document.getElementById("select");
        const storeValue = document.getElementById("select").value;
        const id = store.options[store.selectedIndex].id;
        
        console.log('store:', storeValue);
//        window.location.hash = '#/user';
        const userData = {
            username: event.target.uname.value.trim(),
            password: event.target.psw.value.trim(),
            password_repeat: event.target.psw.value.trim(),
            email: event.target.email.value.trim(),
            store_id: Number(id),
            store_password: event.target.storePsw.value.trim(),
            
        };
        console.log(userData);
        
        AUTH_SERVICE.singup(userData)
            .then(result => {
                window.location.hash = '#/user';
                console.log(AUTH_SERVICE.token);
            },
            status => {
                if (data.status === 400) {
                    document.querySelector('.error-text').textContent = data.answer.error;
                }
                console.log(status);
            }
            )
            .catch(err => {
                console.log(err);
            })
    }
    
    render() {
        const html = `<form class="form"><div class="avatar"><img src="" alt="Avatar" class="avatar"></div>
            <input type="text" placeholder="Enter Name" name="uname" required>
            <input type="password" placeholder="Enter Password" name="psw" required>
            <input type="password" placeholder="Repeat Password" name="pswRepeat" required>
            <input type="text" placeholder="Enter Email" name="email" required>
            <select id="select">

            </select>
            <input type="password" placeholder="Store Password" name="storePsw" required>

            <button type="submit" class="signupbtn" id="singUp">Sign Up</button></form>`;
        const form = toHtml(html);
        const storeList = form.getElementById('select');
        
        
        let a = this.storeList();
        a.then (list => {
            const arr = [];
            for (let i=0; i<list.length; i++) {
                const store = `<option id="${list[i].id}">${list[i].name}</option>`;
                arr.push(store);
            }
            storeList.innerHTML = arr.join('');
            return storeList;
        })
        return [
            this.header.update(),
            form,
            this.footer.update(),
        ];
    }

}

export default Singup;
