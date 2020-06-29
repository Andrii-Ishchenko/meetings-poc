const clientID = "C27471a41abda4e0a6637923a5fbe1fd6970e4a692b368972d9795ce0e1d7de0d";

const clientSecret = "3100b15df22f89c215f1500c47b8b0257637090b4236618cd21ac1ab0a777cdd";

const webexAPI = {
    auth: {
        endpoint: "https://webexapis.com/v1/access_token",
        httpMethod: "POST",
        contentType:"application/x-www-form-urlencoded"
    },
    createMeeting: {
        endpoint: "https://webexapis.com/v1/meetings",
        httpMethod: "POST",
        contentType: "application/json;charset=UTF-8"
    }
}
