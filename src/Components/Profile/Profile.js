import React from "react";

function Profile({profile, auth}) {

    if (!profile) return null;
    return (
        <>
            <div className="center">
                <h1>Profile</h1>
                <h3 id="name">{profile.nickname}</h3>
                <img
                    style={{maxWidth: 250, maxHeight: 250}}
                    src={profile.picture}
                    alt="profile pic"
                />
                <h3>{profile.email}</h3>
                <h2>role: {profile["http://localhost:3000/roles"]}</h2>
                <h2>Access Token</h2>
                <pre> {auth.getAccessToken()}</pre>
            </div>
        </>
    );

}

export default Profile;

