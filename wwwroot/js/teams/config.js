// Config object to be passed to Msal on creation
const appClientId = "21aa6760-ecb1-4a1d-bcf0-40e13a866b1f";

const msalConfig = {
    auth: {
        clientId: appClientId,
        authority: "https://login.microsoftonline.com/common"
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
    scopes: ["User.Read", "Calendars.ReadWrite", "OnlineMeetings.ReadWrite"]
};

// Add here the endpoints for MS Graph API services you would like to use.
const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
    graphCalendarEndpoint: "https://graph.microsoft.com/v1.0/me/events",
    graphOnlineMeetingEndpoint: "https://graph.microsoft.com/v1.0/me/onlineMeetings"
};

// Add here scopes for access token to be used at MS Graph API endpoints.
const tokenRequest = {
    scopes: ["User.Read"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};

const calendarRequest = {
    scopes: ["Calendars.ReadWrite"],
    forceRefresh: false
}

const onlineMeetingRequest = {
    scopes: ["OnlineMeetings.ReadWrite"],
    forceRefresh: false
}

const silentRequest = {
    scopes: [appClientId, "User.Read", "OnlineMeetings.ReadWrite"]
};
