import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import "../GoogleOAuth.css"

const GoogleLogout = ({googleLogoutSuccess, googleLogoutFailure, clientId, setUser}) => {
    const onLogoutSuccess = () => {
        setUser(null)
        googleLogoutSuccess && googleLogoutSuccess()
    };

    const onFailure = () => {
       googleLogoutFailure && googleLogoutFailure()
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <button onClick={signOut} className="button">
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="google logout" className="icon" />
            <span className="buttonText">Sign out</span>
        </button>
    );
}

export default GoogleLogout;