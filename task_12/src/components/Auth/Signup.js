import { Component } from '../../Facepalm';
import { bindAll, toHtml } from '../../utils/index';
import { AUTH_SERVICE } from '../../api/login.service';
import { anim } from '../../utils/login';

import Header from '../Header';
import Footer from '../Footer';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: "login",
            span: "login",
            display: "none"
        }

        this.host = document.createElement('div');
        this.host.classList.add('wrapper');

        this.header = new Header();
        this.footer = new Footer();

        bindAll(this, 'handleSubmit');
        this.host.addEventListener('submit', this.handleSubmit);
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
        const userData = {
            username: event.target.username.value.trim(),
            password: event.target.psw.value.trim(),
            password_repeat: event.target.psw.value.trim(),
            email: event.target.email.value.trim(),
            store_id: Number(id),
            store_password: event.target.storePsw.value.trim(),

        };
        console.log(userData);

        AUTH_SERVICE.signup(userData)
            .then(result => {
                    document.querySelector('.error-text').textContent = "Registration successful! Please, <a>login</a>";
                    setTimeout(window.location.hash = '#/user', 3000);
                },
                status => {
                    if (data.status === 400) {
                        document.querySelector('.error-text').textContent = data.answer.error;
                    }
                    console.log('status',status);
                }
            )
            .catch(err => {
                document.querySelector('.error-text').textContent = err;
                console.log(err);
            })
    }

    render() {
        const { link, span, display } = this.state;
        const html = `
<main id="signup-container">
    <form class="form">
        <a href="#"><div class="svgContainer">
            <div>
                <svg class="mySVG" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
				<defs>
					<circle id="armMaskPath" cx="100" cy="100" r="100"/>	
				</defs>
				<clipPath id="armMask">
					<use xlink:href="#armMaskPath" overflow="visible"/>
				</clipPath>
				<circle cx="100" cy="100" r="100" fill="white"/>
				<g class="body">
                    <ellipse fill="#374c01" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="95.333336" cy="147.000001" id="svg_8" rx="104.499999" ry="50.000004" stroke="#000000" />
                    <path fill="#3f8257" stroke="#000000" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m-9,191c14,6 193,10 202,6c9,-4 13,-58 8,-66c-5,-8 -51,0 -60,-15c-9,-15 -14,-25 -14,-25c0,0 -46,0 -46,0c0,0 -14,3 -26,24c-9,15 -54,6 -61,20c-7,14 -3,56 -3,56z" id="svg_5" />
                    <path fill="#3f8257" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m101.166667,24c47,1 36,37 39,44c7,3 18,10 19,20c0,13 -14,36 -56,37c-45,-1 -64,-22 -64,-34c0,-12 9,-22 16,-24c4,-9 -3,-46 46,-43z" id="svg_3" stroke="#000000" />
                    <path fill="#bc932f" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m93.5,202.800003c87,-0.512416 88,23.313751 85,-27.670496c-2,-53.984248 -166,-44.934581 -165,2.049666c2,61.984248 80,25.62083 80,25.62083z" id="svg_10" stroke="#000000" />
                    <path fill="none" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" id="svg_18" d="m56.585036,169.846772c3.880963,3.117333 47.745945,8.281167 80.6968,19.428001" transform="rotate(73.85203552246094 96.93343353271482,179.5607604980469) " stroke="#000000" />
                    <path id="svg_1" d="m55.7,67.466666c30.5,15.5 60,16 84,1.5c1,-7.5 1.21447,-14.286511 -1.500061,-22.286511c-32.611792,-6.982082 -47.541912,-5.737666 -78.785531,-1.142795c-4.357387,9.231837 -3.714408,17.679306 -3.714408,21.929306z" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" stroke="#000000" fill="#d89c51" />
                    <ellipse stroke="#000000" fill="#ffffff" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="80.938897" cy="60.516516" id="svg_2" rx="8.41225" ry="12.768682" transform="rotate(4.116649627685547 80.93889617919923,60.51651382446277) " />
                    <ellipse stroke="#000000" id="svg_4" fill="#ffffff" stroke-width="null" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" cx="119.512824" cy="60.777538" rx="8.23053" ry="12.768682" transform="rotate(-1.426543116569519 119.5128250122059,60.77753829956045) " />
                </g>  
                <path class="chin" fill="#3f8257" d="m79.20833,119.72879c5.33334,8.91667 23.66667,18.41667 35.58334,1.66667" stroke="#000000"/>
                <path class="face" fill="#eff3f400" d="M134.5,46v35.5c0,21.815-15.446,39.5-34.5,39.5s-34.5-17.685-34.5-39.5V46"/>
				<g class="eyeL">
				    <ellipse stroke="#000000" ry="6.333333" rx="4.333334" id="svg_6" cy="57.555556" cx="81.222223" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" fill="#000000"/><ellipse transform="rotate(-1.515390157699585 82.33333587646452,53.911113739013565) " stroke-opacity="0" ry="3" rx="2.333333" id="svg_11" cy="53.911112" cx="82.333334" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" fill="#ffffff" stroke="#000000"/>
				</g>
				<g class="eyeR">
				    <ellipse id="svg_7" stroke="#000000" ry="6.333333" rx="4.333334" cy="58.33313" cx="119.500006" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" fill="#000000"/><ellipse id="svg_9" transform="rotate(-1.515390157699585 118.50000762939466,54.66646194458048) " stroke-opacity="0" ry="3" rx="2.333333" cy="54.666468" cx="118.500009" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" fill="#ffffff" stroke="#000000"/>
				</g>
				<g class="mouth">
                  <path fill="#000000" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m69.78334,99.56667c23.76666,21.2 37.9,16.16667 56,1.66667" id="svg_4" stroke="#000000"/>
                  <path fill="#ea7178" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" transform="rotate(2.6025829315185547 99.15302276611375,108.19057464599602) " d="m91.86957,108.22686c1.16546,-6.42523 3.28177,-4.89026 7.33333,-4.89026c4.05157,0 6.86033,0.04105 7.33333,4.89026c0.473,4.84921 -6.2976,4.61025 -7.3409,4.72377c-1.04331,0.11353 -8.49122,1.70147 -7.32576,-4.72377z" id="svg_6" stroke="#000000"/>
                  <path fill="#3f8257" stroke="#000000" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m56.38333,91.81098c29.9,21.5 54.95,22.8 81.8,1.1" id="svg_5"/>
                  <path stroke="#000000" fill-opacity="0" id="svg_1" d="m54.95,95.82778c0,0 -0.77778,-6.08334 5.77778,-6.11111" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" fill="#000000"/>
                  <path transform="rotate(98.99714660644531 136.60739135742188,93.7999954223633) " id="svg_2" stroke="#000000" fill-opacity="0" d="m133.73283,96.85555c0,0 -0.77778,-6.08334 5.77778,-6.11111" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="null" fill="#000000"/>
				</g>
				 <path class="nose" stroke="#000000" d="m72.25,81.16667c18,-8.75 36,-7.25 52.25,0" fill="#3f8257"/>
				<g class="arms" clip-path="url(#armMask)">
					<g class="armL">	
                       <path stroke="#000000" fill="#3f8257" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m20.840298,82.303765c52.125383,-4.030313 65.828447,-18.53944 78.725449,-16.658627c12.897002,1.880813 12.090939,8.598001 32.242505,9.672751c20.151565,1.07475 26.600066,-5.911126 38.691006,-8.060626c12.090939,-2.1495 12.090939,-14.777815 5.642438,-17.196002c-6.448501,-2.418188 -29.555629,6.179813 -36.810193,5.911126c-7.254564,-0.268688 -5.911126,-5.911126 -4.299001,-6.717188c1.612125,-0.806063 9.941439,-4.299001 24.719254,-5.911126c14.777815,-1.612125 21.763691,-2.1495 20.151565,-11.553564c-1.612125,-9.404064 -14.509127,-5.642438 -29.286942,-4.567688c-14.777815,1.07475 -23.913191,6.717188 -26.062691,0c-2.1495,-6.717188 13.971752,-14.24044 8.866689,-21.763691c-5.105063,-7.523251 -15.046502,-2.1495 -21.763691,7.523251c-6.717188,9.672751 -2.686875,16.658627 -23.913191,21.495003c-21.226316,4.836376 -16.927315,2.1495 -68.78401,6.179813c-19.345503,1.880813 -5.642438,37.884943 1.880813,41.646569z" id="svg_2"/>
                       <path stroke="#000000" fill="none" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m119.717312,8.817723c2.821219,3.358594 4.433344,6.582845 8.463657,5.105063c4.030313,-1.477781 3.895969,-5.776782 3.492938,-7.254564c-0.403031,-1.477781 -1.746469,-2.955563 -4.030313,-3.627282c-2.283844,-0.671719 -10.747502,2.418188 -7.926282,5.776782z" id="svg_4"/>
                       <path stroke="#000000" fill="none" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m166.242263,30.655339l3.815278,9.274558c5.558822,0.004987 7.122215,-3.479488 7.53856,-4.953574c0.416345,-1.474086 0.026833,-3.432898 -1.584015,-5.185701c-1.610848,-1.752803 -10.456229,-3.467521 -9.769822,0.864717z" id="svg_5"/>
                       <path stroke="#000000" fill="none" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m167.470375,54.803274c0.657295,4.336749 0.352716,8.734744 4.562558,9.574086c4.209842,0.839343 6.335768,-3.70569 6.762003,-5.176946c0.426236,-1.471256 0.049888,-3.43264 -1.549152,-5.196222c-1.59904,-1.763582 -10.432705,-3.537667 -9.77541,0.799082z" id="svg_6"/>
                       <path stroke="#000000" fill="none" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" id="svg_10" d="m147.875944,30.892374c6.367717,0.679599 6.770749,4.977351 4.621248,10.96552"/>
                       <path stroke="#000000" fill="none" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m152.02773,58.156813c4.352561,1.75435 6.09903,3.633913 3.949529,9.622082" id="svg_11"/>
                       <path stroke="#000000" fill="none" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m112.049362,14.976873c1.652211,-0.165181 3.459366,0.621516 4.075313,2.161836" id="svg_12"/>
                       <path stroke="#000000" fill="#e4dab6" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m91.854414,33.45637c0,0 -5.776782,26.331379 2.283844,31.973817c6.179813,2.552532 -18.405096,7.12022 -18.620046,6.932139c-1.692731,-0.456769 -14.697208,-15.933171 -3.681019,-34.875643c11.284877,-5.508095 19.211159,-4.567688 20.017222,-4.030313z" id="svg_14"/>
					</g>
					<g class="armR">
                       <path stroke="#000000" fill="#3f8257" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m163.234945,83.965087c-51.125744,-4.030313 -64.566017,-18.53944 -77.215686,-16.658627c-12.649669,1.880813 -11.859064,8.598001 -31.624172,9.672751c-19.765107,1.07475 -26.089942,-5.911126 -37.949006,-8.060626c-11.859064,-2.1495 -11.859064,-14.777815 -5.53423,-17.196002c6.324834,-2.418188 28.988824,6.179813 36.104263,5.911126c7.115439,-0.268688 5.797765,-5.911126 4.216556,-6.717188c-1.581209,-0.806063 -9.750786,-4.299001 -24.245198,-5.911126c-14.494412,-1.612125 -21.346316,-2.1495 -19.765107,-11.553564c1.581209,-9.404064 14.230877,-5.642438 28.725289,-4.567688c14.494412,1.07475 23.454594,6.717188 25.562872,0c2.108278,-6.717188 -13.703808,-14.24044 -8.696647,-21.763691c5.007161,-7.523251 14.757947,-2.1495 21.346316,7.523251c6.588369,9.672751 2.635348,16.658627 23.454594,21.495003c20.819246,4.836376 16.60269,2.1495 67.464899,6.179813c18.974503,1.880813 5.53423,37.884943 -1.844743,41.646569z" id="svg_2"/>
                       <path stroke="#000000" fill="none" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m66.254152,10.479045c-2.767115,3.358594 -4.348324,6.582845 -8.301345,5.105063c-3.953021,-1.477781 -3.821254,-5.776782 -3.425952,-7.254564c0.395302,-1.477781 1.712976,-2.955563 3.953021,-3.627282c2.240045,-0.671719 10.541391,2.418188 7.774276,5.776782z" id="svg_4"/>
                       <path stroke="#000000" fill="none" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m20.621437,32.316661l-3.74211,9.274558c-5.452217,0.004987 -6.985628,-3.479488 -7.393988,-4.953574c-0.40836,-1.474086 -0.026318,-3.432898 1.553637,-5.185701c1.579956,-1.752803 10.255704,-3.467521 9.582461,0.864717z" id="svg_5"/>
                       <path stroke="#000000" fill="none" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m19.416877,56.464597c-0.64469,4.336749 -0.345952,8.734744 -4.475059,9.574086c-4.129107,0.839343 -6.214263,-3.70569 -6.632324,-5.176946c-0.418061,-1.471256 -0.048931,-3.43264 1.519443,-5.196222c1.568374,-1.763582 10.232631,-3.537667 9.587941,0.799082z" id="svg_6"/>
                       <path stroke="#000000" fill="none" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" id="svg_10" d="m38.635535,32.553696c-6.2456,0.679599 -6.640902,4.977351 -4.532624,10.96552"/>
                       <path stroke="#000000" fill="none" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m34.563369,59.818135c-4.269089,1.75435 -5.982065,3.633913 -3.873787,9.622082" id="svg_11"/>
                       <path stroke="#000000" fill="none" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m73.775049,16.638196c-1.620526,-0.165181 -3.393024,0.621516 -3.997158,2.161836" id="svg_12"/>
                       <path stroke="#000000" fill="#e4dab6" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m93.582707,35.117693c0,0 5.665997,26.331379 -2.240045,31.973817c-6.0613,2.552532 18.052131,7.12022 18.262959,6.932139c1.660269,-0.456769 14.415352,-15.933171 3.610426,-34.875643c-11.06846,-5.508095 -18.842736,-4.567688 -19.63334,-4.030313z" id="svg_14"/>
					</g>				
                </g>
            <circle cx="100" cy="100" r="100" fill="transparent" stroke-width="2px" stroke="white"/>
			</svg>
            </div>
        </div></a>

        <div class="inputGroup inputGroup1">
            <input type="text" placeholder="Enter Name" id="name" name="username" required maxlength="50" />
            <span class="indicator"></span>
        </div>
        <div class="inputGroup inputGroup2">
            <input type="password" id="pswdSignup" placeholder="Enter Password" name="psw" required />
        </div>
        <div class="inputGroup inputGroup2">
            <input type="password" id ="pswRepeat" placeholder="Repeat Password" name="pswRepeat" required />
        </div>
        <div class="inputGroup inputGroup1">
            <input type="text" id="email" placeholder="Enter Email" class="email" name="uname" required maxlength="50" />
            <span class="indicator"></span>
        </div>
        <select id="select"></select>
        <input type="password" id="pswStore" class="inputGroup inputGroup2" placeholder="Store Password" name="storePsw" required>

        <div class="inputGroup inputGroup3">
            <span class="error-text"></span>
            <button type="submit" class="button" id="signUp">Sign Up</button>
        </div>
    </form>
</main>
`;

        const form = toHtml(html);

        const email = form.querySelector("#email"),
            pswd = form.querySelector("#pswdSignup"),
            mySVG = form.querySelector(".svgContainer"),
            name = form.querySelector("#name"),
            pswRepeat = form.querySelector("#pswRepeat"),
            pswStore = form.querySelector("#pswStore"),
            armL = form.querySelector(".armL"),
            armR = form.querySelector(".armR"),
            eyeL = form.querySelector(".eyeL"),
            eyeR = form.querySelector(".eyeR"),
            nose = form.querySelector(".nose"),
            mouth = form.querySelector(".mouth"),
            mouthBG = form.querySelector(".mouthBG"),
            chin = form.querySelector(".chin"),
            face = form.querySelector(".face");

        anim(email, pswd, mySVG, armL, armR, eyeL, eyeR, nose, mouth, mouthBG, chin, face, name, pswRepeat, pswStore);

        const storeList = form.getElementById('select');
        let a = this.storeList();
        a.then(list => {
            const arr = [];
            for (let i = 0; i < list.length; i++) {
                const store = `<option id="${list[i].id}">${list[i].name}</option>`;
                arr.push(store);
            }
            storeList.innerHTML = arr.join('');
            return storeList;
        })
        return [
            this.header.update({ link, span, display }),
            form,
            this.footer.update(),
        ];
    }

}

export default Signup;