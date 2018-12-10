import auth0 from 'auth0-js';

const REDIRECT_ONLOGIN = "redirect_onlogin";

let idToken = null;
let accessToken = null;
let expiresAt = null;

export default class Auth {
    constructor(history) {
        this.history = history;
        this.userProfile = null;
        this.auth0 = new auth0.WebAuth({
            domain: process.env.REACT_APP_AUTH0_DOMAIN,
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
            audience: process.env.REACT_APP_AUTH0_AUDIENCE,
            responseType: "token id_token",
            scope: "openid profile email"
        });
    }

    login = () => {
        localStorage.setItem(REDIRECT_ONLOGIN, JSON.stringify(this.history.location));
        this.auth0.authorize();
    };
    handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                let redirectLocation = localStorage.getItem(REDIRECT_ONLOGIN) === undefined ? "/" : JSON.parse(localStorage.getItem(REDIRECT_ONLOGIN));
                this.history.push(redirectLocation);
            } else if (err) {
                this.history.push('/');
                alert(`Error: ${err.error}`);
            }
            localStorage.removeItem(REDIRECT_ONLOGIN);
        });
    };

    getProfile = () => {
        return new Promise((resolve, reject) => {
            if (this.userProfile) return resolve(this.userProfile);
            this.auth0.client.userInfo(this.getAccessToken(), (err, profile) => {
                if (err) {
                    reject(err);
                } else {
                    if (profile) this.userProfile = profile;
                    resolve(profile);
                }
            });
        });
    };


    getAccessToken = () => {
        if (!accessToken) {
            throw new Error("No access token found.");
        }
        return accessToken;
    };


    setSession = authResult => {
        //set time when token expire, we get time in seconds convert it to milliseconds and get current UTC time in  UNIX Epoch time
        expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
        accessToken = authResult.accessToken;
        idToken = authResult.idToken;
    };

    isAuthenticated() {
        return new Date().getTime() < expiresAt;
    }

    logout = () => {
        this.auth0.logout({
            clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
            returnTo: 'http://localhost:3000/'
        });
    };

    renewToken(cb) {
        this.auth0.checkSession({}, (err, result) => {
            if (err) {
                console.log(`Error: ${err.error} - ${err.error_description}.`);
            } else {
                this.setSession(result);
            }
            if (cb) cb(err, result);
        });
    }

}