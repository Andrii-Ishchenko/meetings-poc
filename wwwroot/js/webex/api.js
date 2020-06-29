let authResponseObject;
let bearerToken;

function getAccessToken(code, successCallback, errorCallback) {
    var data = {
        grant_type: "authorization_code",
        client_id: clientID,
        client_secret: clientSecret,
        code: code,
        redirect_uri : truncateParams(window.location.href)
    }

    console.dir(data);

     $.ajax(webexAPI.auth.endpoint, {
        type: webexAPI.auth.httpMethod,
        data: data,
        success: function (data) {
            authResponseObject = data;
            bearerToken = `Bearer ${data.access_token}`
            successCallback(data)
         },
         error: errorCallback,
         contentType: webexAPI.auth.contentType
    })

}

function createMeeting(requestParams, success, error) {
    $.ajax(webexAPI.createMeeting.endpoint, {
        type: webexAPI.createMeeting.httpMethod,
        contentType: webexAPI.createMeeting.contentType,
        headers: { Authorization: bearerToken, Accept: 'application/json' },
        data: JSON.stringify(requestParams),
        success: success,
        error: error
    })
}

function truncateParams(uri) {
    var newUri = uri.split("?")[0]
    console.log(`Truncating ${uri} to ${newUri}`)
    return newUri;
}
