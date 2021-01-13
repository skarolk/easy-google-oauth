import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { tokenRefresh } from '../utils/tokenRefresh';
import "../GoogleOAuth.css"

const GoogleLogin = ({googleLoginSuccess, googleLoginFailure, clientId, setUser, expirationHourMultiplier}) => {
    const onSuccess = (res) => {
        setUser(res.profileObj)
        googleLoginSuccess && googleLoginSuccess(res)
        tokenRefresh(res, expirationHourMultiplier ? expirationHourMultiplier : 1);
    };

    const onFailure = (res) => {
        googleLoginFailure && googleLoginFailure(res)
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
    });

    return (
        <button onClick={signIn} className="button">
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="google login" className="icon" />
            <span className="buttonText">Sign in with Google</span>
        </button>
    );
}

export default GoogleLogin;