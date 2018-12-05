import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from './logo.svg';

class Nav extends Component {
    render() {
        return (
            <nav>
            <ul>
                <li>
                    <img src={logo}  className="logo-nav" alt="logo"/>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
            </nav>
        );
    }
}

export default Nav;