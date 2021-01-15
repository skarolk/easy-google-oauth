# easy-google-oauth v. 1.0.8
Easy integration of Google OAuth 2.0 for React projects.

### This package will allow you to quickly add a sign in and sign out component to your app for front end authentication using Google OAuth 2.0.

<img src="https://i.imgur.com/Cs65R6X.png" />
<img src="https://i.imgur.com/UWBzFPg.png" />

## Installation

In your terminal run ```npm i easy-google-oauth --legacy-peer-deps```

## How to Use

### 1) Google OAuth 2.0 requires a clientId

Enter the Google developer console and click credentials:

<img src="https://i.imgur.com/ohG9suN.png" />

Click ```CREATE CREDENTIALS``` > ```OAuth client ID```:

<img src="https://i.imgur.com/wfgk2XT.png" />

Follow the steps to create your clientId.

### 2) To use the component

```import GoogleOAuth from "easy-google-oauth";```

```<GoogleOAuth clientId={<yourClientId>} />```

### 3) Handling login

The GoogleOAuth component takes a function as a prop to handle both login success and failure, these functions should take a response as an argument (see sample below):

```googleLoginSuccess={googleLoginSuccess}```

```googleLoginFailure={googleLoginFailure}```

### 4) Handling logout

The GoogleOAuth component takes a function as a prop to handle both logout success and failure:

```googleLogoutSuccess={googleLogoutSuccess}```

```googleLogoutFailure={googleLogoutFailure}```

### 5) Setting logout timer

The GoogleOAuth component takes an integer as a prop to set the number of hours before a user's session times out:

```expirationHourMultiplier={<numberOfHours>}```

### 6) Sample use

Functions:

```
const googleLoginSuccess = (res) => {
    console.log(res);
}

const googleLoginFailure = (res) => {
    console.log(res);
}

const googleLogoutSuccess = () => {
    console.log('Logged out Successfully')
}

const googleLogoutFailure = () => {
    console.log('Logout Failure');
}
```

Component:
```
<GoogleOAuth
    clientId={clientId}
    expirationHourMultiplier={24}
    googleLoginSuccess={googleLoginSuccess}
    googleLoginFailure={googleLoginFailure}
    googleLogoutSuccess={googleLogoutSuccess}
    googleLogoutFailure={googleLogoutFailure}
/>
```

### If you'd like to help!
Feel free to contact me or add some PRs to the repo I've included!
