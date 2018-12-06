import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import Nav from './Nav';
import './App.css';
import Auth from './Authorization/Auth';
import PrivateRoute from './PrivateRoute';
import AuthContext from './AuthContext';
import Callback from "./Callback";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: new Auth(this.props.history)
        };
    }

    render() {
        const {auth} = this.state;
        return <>
            <AuthContext.Provider value={auth}>
                <Nav auth={auth}/>
                <div className="body">
                    <Route
                        path="/"
                        exact
                        render={props => <Home auth={auth} {...props} />}
                    />
                    <Route
                        path="/callback"
                        render={props => <Callback auth={auth} {...props} />}
                    />
                    <PrivateRoute path="/profile" component={Profile} />
                </div>
            </AuthContext.Provider>
        </>;
    }
}

export default App;
