import React, {useState, Fragment} from 'react';
import GoogleLogin from "./GoogleLogin/GoogleLogin"
import GoogleLogout from "./GoogleLogout/GoogleLogout"

const GoogleOAuth = ({
                         googleLoginSuccess,
                         googleLoginFailure,
                         googleLogoutSuccess,
                         googleLogoutFailure,
                         clientId,
                         expirationHourMultiplier
                     }) => {
    const [user, setUser] = useState(null)

    return (
        <Fragment>
            {user ?
                <GoogleLogout
                    setUser={setUser}
                    clientId={clientId}
                    googleLogoutSuccess={googleLogoutSuccess}
                    googleLogoutFailure={googleLogoutFailure}
                /> : <GoogleLogin
                    setUser={setUser}
                    clientId={clientId}
                    expirationHourMultiplier={expirationHourMultiplier}
                    googleLoginSuccess={googleLoginSuccess}
                    googleLoginFailure={googleLoginFailure}
                />
            }
        </Fragment>
    )
}

export default GoogleOAuth