class AuthService {
    
    constructor() {
        this._token = localStorage.getItem('token');
        this._claims = null;
    }
    
    get token() {
        return this._token;
    }
    
    set token(token) {
        this._token = token;
        localStorage.setItem('token', token);
    }
    
    isAuthorized() {
        
    }
    
    tokenIsNotExpired() {
        
    }
    
    login(userData) {
        return fetch("https://pizza-tele.ga/api/v1/user/login", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: new Headers().append("Content-Type", "application/json")
        })
        .then(res => {
            if(res.ok) {
                return res.json().then(answer => {
                    this.token = answer.token;
                    return Promise.resolve({answer, status: res.status})
                })
            } else {
                return res.json().then(answer => Promise.reject({answer, status: res.status}))
            }
//            throw new Error(`${res.status}`);
        })
    }
    
    parseJwtClaims(jwtToken) {
        if (jwtToken) {
            let base64Url = jwtToken.split('.')[1]
            let base64 = base64Url.replace('-', '+').replace('_', '/')
            return JSON.parse(window.atob(base64))
        }
        return {}
    }
}

export const AUTH_SERVISE = new AuthService();
