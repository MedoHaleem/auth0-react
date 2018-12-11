import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Home from './Home/Home';
import ProfileContainer from '../Containers/ProfileContainer';
import Nav from './Layout/Nav';
import './App.css';
import Auth from '../Authorization/Auth';
import PrivateRoute from '../PrivateRoute';
import AuthContext from '../AuthContext';
import Callback from './Callback';
import CustomerContainer from '../Containers/CustomersContainer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: new Auth(this.props.history),
            tokenRenewalDone: false
        };
    }

    componentDidMount() {
        this.state.auth.renewToken(() => {
            this.setState({tokenRenewalDone: true});
        });
    }

    render() {
        const {auth} = this.state;
        if (!this.state.tokenRenewalDone) return "loading ....";
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
                    <PrivateRoute path="/profile" component={ProfileContainer}/>
                    <PrivateRoute path="/customers" auth={auth} component={CustomerContainer}/>
                </div>
            </AuthContext.Provider>
        </>;
    }
}

export default App;
