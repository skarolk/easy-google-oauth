export const tokenRefresh = (res, expirationHourMultiplier) => {
    // Time to renew access token
    let refreshTimer = (res.tokenObj.expires_in || 3599) * expirationHourMultiplier;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTimer = (newAuthRes.expires_in || 3599) * expirationHourMultiplier;
        localStorage.setItem('authToken', newAuthRes.id_token);

        // Trigger the next tokenRefresh timer
        setTimeout(refreshToken, refreshTimer);
    };

    // Trigger first tokenRefresh timer
    setTimeout(refreshToken, refreshTimer);
};