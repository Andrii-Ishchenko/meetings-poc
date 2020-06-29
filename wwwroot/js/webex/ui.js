let authForm = document.getElementById("auth_form")
let authCodeInput = document.getElementById("authCode")
let authCode;

$(document).ready(onLoad)

function signIframe() {
    authForm.target = "webex_frame";
    authForm.submit()
}

function signReload() {
    //authForm.target = "_self";

    authForm.submit();
}

function signAjaxReload() {
    let actionUri = "https://webexapis.com/v1/authorize"

    $.ajax(actionUri,{
        type: "get",
        contentType: "application/x-www-form-urlencoded",
        data: {
            client_id: clientID,
            response_type: "code",
            redirect_uri: "https://localhost:44367/Home/Webex",
            scope: "spark:kms meeting:schedules_read meeting:schedules_write meeting:preferences_read meeting:preferences_write meeting:recordings_read meeting:recordings_write",
            state : "some_state"
        }
    })
}

function onLoad() {
    if (authCodeInput && authCodeInput.value) {
        authCode = authCodeInput.value
    }

}

$("#auth_form").submit(function (event) {
    console.log($(this).serialize());
    //event.preventDefault();
});

function GetAccessToken() {
    getAccessToken(authCode, accessTokenSuccess, accessTokenError)
}

function NewMeeting() {

    var requestParams = {
        title: "Meeting POC",
        agenda: "Agenda Meeting POC",
        password: "password",
        start: "2020-06-24T15:00Z",
        end: "2020-06-24T23:00Z",
        enabledAutoRecordMeeting: false,
        allowAnyUserToBeCoHost: true
    }

    createMeeting(requestParams, createMeetingSuccess, createMeetingError);
}

function accessTokenSuccess(data) {
    let accessToken = document.getElementById("accessToken")
    accessToken.value = data.access_token

    let expiresIn = document.getElementById("expiresIn")
    expiresIn.value = data.expires_in

    let refreshToken = document.getElementById("refreshToken")
    refreshToken.value = data.refresh_token

    let refreshTokenExpiresIn = document.getElementById("refreshTokenExpiresIn")
    refreshTokenExpiresIn.value = data.refresh_token_expires_in
}

function accessTokenError(data) {
    console.log("FAIL:")
    console.dir(data);
}

function createMeetingSuccess(data) {
    console.dir(data);
}

function createMeetingError(data ) {
    console.log("FAIL:")
    console.dir(data);
}