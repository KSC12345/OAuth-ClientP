'use strict';
var ClientCredentials = require('simple-oauth2').ClientCredentials;
var AuthorizationCode = require('simple-oauth2').AuthorizationCode;

const config = {
    client: {
        id: '5bd7006b3a2e0a7eaaaf',
        secret: '88d6692e1f678066469615cfe89ae4a08d14ab13'
    },
    auth: {
        tokenHost: 'https://github.com',
        tokenPath: '/login/oauth/access_token',
        authorizePath: '/login/oauth/authorize',
    }
};

const config1 = {
    client: {
        id: '5bd7006b3a2e0a7eaaaf',
        secret: '88d6692e1f678066469615cfe89ae4a08d14ab13'
    },
    auth: {
        tokenHost: 'https://github.com',
        tokenPath: '/login/oauth/access_token',
    }
};
const client = new ClientCredentials(config1);
const authoRizeClient = new AuthorizationCode(config);
async function getAccessTokenWithCode(options) {

    try {
        const accessToken = await authoRizeClient.getToken(options);
        return accessToken;
    } catch (error) {
        console.log('Access Token error', error.message);
        return error;
    }

    return null;
}

async function getAuthorizeURI() {
    // Authorization uri definition
    const authorizationUri = authoRizeClient.authorizeURL({
        redirect_uri: 'http://localhost:3000/profile/oAuthCallback',
        scope: 'notifications',
        state: '3(#0/!~',
    });

    return authorizationUri;
}

async function getAccessTokenWithSecret() {

    const tokenParams = {
        scope: 'notifications',
        state: '3(#0/!~'
    };

    try {
        const accessToken = await client.getToken(tokenParams);
        return accessToken;
    } catch (error) {
        console.log('Access Token error', error.message);
        return error;
    }
    return null;

}

module.exports = { getAccessTokenWithCode, getAuthorizeURI, getAccessTokenWithSecret };