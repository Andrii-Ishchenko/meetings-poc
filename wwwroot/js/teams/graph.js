// Helper function to call MS Graph API endpoint 
// using authorization bearer token scheme
function callMSGraph(endpoint, accessToken, callback, init) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", bearer);

    const options = {
        method: init.method ? init.method : 'GET',
        headers: headers,
        body: init.body
    };

    console.log('request made to Graph API at: ' + new Date().toString());

    fetch(endpoint, options)
        .then(response => response.json())
        .then(response => callback(response, endpoint))
        .catch(error => console.log(error));
}

async function seeProfile() {
    const currentAcc = myMSALObj.getAccountByUsername(username);
    if (currentAcc) {
        const response = await getTokenPopup(loginRequest, currentAcc).catch(error => {
            console.log(error);
        });

        const init = {
            method: "GET",
        }

        callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, updateUI, init);
        profileButton.style.display = 'none';
    }
}

async function createOnlineMeeting(meetingObject, callback) {
    const currentAcc = myMSALObj.getAccountByUsername(username);
    if (currentAcc) {
        const response = await getTokenPopup(onlineMeetingRequest, currentAcc).catch(error => {
            console.log(error);
        });

        const init = {
            method: "POST",
            body: JSON.stringify(meetingObject)
        }

        callMSGraph(graphConfig.graphOnlineMeetingEndpoint, response.accessToken, callback, init);
    }
}

async function createOnlineMeetingWithCalendar(object, callback) {
    const currentAcc = myMSALObj.getAccountByUsername(username);
    if (currentAcc) {
        const response = await getTokenPopup(calendarRequest, currentAcc).catch(error => {
            console.log(error);
        });

        const init = {
            method: "POST",
            body: JSON.stringify(object)
        }

        callMSGraph(graphConfig.graphCalendarEndpoint, response.accessToken, callback, init);
    }
}
