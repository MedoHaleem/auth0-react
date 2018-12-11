import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        const {isAuthenticated, login} = this.props.auth;
        return (
            <div>
                <h1>Welcome to Aslovi Customer Service</h1>
                {isAuthenticated() ? (
                    <Link id="profile" to="/profile">View profile</Link>
                ) : (
                    <button className="button" onClick={login}>Log In</button>
                )}
            </div>

        );
    }
}

export default Home;
