import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from '../../logo.svg';

class Nav extends Component {
    render() {
        const {isAuthenticated, login, logout} = this.props.auth;
        return (
            <nav>
                <ul>
                    <li>
                        <img src={logo} className="logo-nav" alt="logo"/>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/customers">Customers</Link>
                    </li>
                    <li>
                        <a href="#" onClick={isAuthenticated() ? logout : login}>
                            {isAuthenticated() ? " Log Out" : "Log In"} </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;