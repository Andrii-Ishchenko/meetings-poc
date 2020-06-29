const loginPopupBtn = document.getElementById("loginPopup")
const loginRedirectBtn = document.getElementById("loginRedirect")
const signOutBtn = document.getElementById("signOutBtn")
const authUserLabel = document.getElementById("authorizedUserLabel")

const createMeetingForm = document.getElementById("createMeetingForm");
const addToCalendarCheckbox = document.getElementById("addToCalendar");
const meetingTitle = document.getElementById("meetingTitle")


const linkFormGroup = document.getElementById("linkFormGroup");
const meetingLink = document.getElementById("meetingLink")
const meetingLinkInfo = document.getElementById("teams-link-placeholder")

function postAuth(account) {
    const authorized = !!account;

    $(authUserLabel).removeClass('d-none')
        .addClass(authorized ? '' : 'd-none');

    $(loginPopupBtn).removeClass('d-none')
        .addClass(authorized ? 'd-none' : '');

    $(loginRedirectBtn).removeClass('d-none')
        .addClass(authorized ? 'd-none' : '');

    $(signOutBtn).removeClass('d-none')
        .addClass(authorized ? '' : 'd-none');

    authUserLabel.innerText = authorized ? account.username : "Not Authorized"
    createMeetingForm.classList.remove("d-none");
}


function checkInitialAuthAndUpdateUI()
{

}

function createNewMeeting() {

    const meetingObject =
    {
        //"startDateTime": "2020-06-22T13:30:00.000Z",
        //"endDateTime": "2011-06-22T13:45:00.000Z",
        "subject": meetingTitle.value
    }

    let addToCalendar = addToCalendarCheckbox.checked

    if (addToCalendar) {
        createOnlineMeetingWithCalendar(meetingObject, createOnlineMeetingWithCalendarCallback);
    } else {
        createOnlineMeeting(meetingObject, createOnlineMeetingCallback);
    }

}

function createOnlineMeetingCallback(response, endpoint) {
    meetingLink.setAttribute("href", response.joinUrl)
    meetingLink.innerText = "Meeting Link";

    meetingLinkInfo.setAttribute("placeholder", response.joinUrl);
    meetingLinkInfo.setAttribute("value", response.joinUrl);

    linkFormGroup.classList.remove("d-none")
}

function createOnlineMeetingWithCalendarCallback(response, endpoint) {
  
}

function copyMeetingLink() {
    meetingLinkInfo.select()
    document.execCommand("copy");
}