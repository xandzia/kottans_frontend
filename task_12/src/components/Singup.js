import { Component } from '../Facepalm';
import { bindAll, toHtml } from '../utils/index';

class Singup extends Component {
    constructor(props) {
        super(props);
        
        this.host = document.createElement('form');
        this.host.classList.add('form');

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
                
        const userName = event.target.uname.value.trim();
        const password = event.target.psw.value.trim();
        const select = document.getElementById("select").value;
//        console.log('user-target', this.props);
//        this.props.user(userName);
        
//        console.log('login-props', this.props);
        console.log('LOGIN','userName:', userName, 'password:', password, 'select', select);
//        window.location.hash = '#/user';
    }
    
    render() {
        const html = `<div class="avatar"><img src="" alt="Avatar" class="avatar"></div>
            <input type="text" placeholder="Enter Name" name="uname" required>
            <input type="password" placeholder="Enter Password" name="psw" required>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
            <input type="text" placeholder="Enter Email" name="email" required>
            <select id="select">

            </select>
            <input type="password" placeholder="Store Password" name="store-psw" required>

            <button type="submit" class="signupbtn" id="singUp">Sign Up</button>`;
        const form = toHtml(html);
        const storeList = form.getElementById('select');
        
        
        let a = this.storeList();
        a.then (list => {
            const arr = [];
            for (let i=0; i<list.length; i++) {
                const store = `<option>${list[i].name}</option>`;
                arr.push(store);
            }
            storeList.innerHTML = arr.join('');
            return storeList;
        })
        return form;
    }

}

export default Singup;
