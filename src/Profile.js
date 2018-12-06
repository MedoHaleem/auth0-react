import React, { Component } from "react";

class Profile extends Component {
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
            <>
                <div className="center">
                <h1>Profile</h1>
                <h3>{profile.name}</h3>
                <img
                    style={{ maxWidth: 250, maxHeight: 250 }}
                    src={profile.picture}
                    alt="profile pic"
                />
                    <h3>{profile.email}</h3>
                </div>
            </>
        );
    }
}

export default Profile;

