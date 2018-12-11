import React, { Component } from "react";
import Profile from "../Components/Profile/Profile"
class ProfileContainer extends Component {
    state = {
        profile: null
    };

    componentDidMount() {
        this.loadUserProfile();
    }

    loadUserProfile() {
        this.props.auth.getProfile().then(profile => this.setState({ profile}))
    }

    render() {
        const { profile } = this.state;
        if (!profile) return null;
        return (
                <Profile  {...this.props} {...this.state} />
        );
    }
}

export default ProfileContainer;

