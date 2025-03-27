/**
 * This method handles song requests
 */
function requests(e) {
  try {
    Logger.log(e); // the Google Script version of console.log see: Class Logger
    
    var data = e.parameters; // just create a slightly nicer variable name for the data

    var validEmail = compareValidEmail(data.requester[0], "requests");

    if (!validEmail.found) {
      return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "message": "Sorry, there is no RSVP response yet for your email (" + data.requester + ") or you have RSVP'd as unable to attend."}))
          .setMimeType(ContentService.MimeType.JSON);
    }

    var update = {found: false} // Always insert for requests

    record_data(e, 'songRequests', update);

    return ContentService    // return json success results
          .createTextOutput(JSON.stringify({"result":"success","data": JSON.stringify(e.parameters) }))
          .setMimeType(ContentService.MimeType.JSON);

  } catch(error) { // if error return this
    Logger.log(error);
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "message": "Sorry, there is an issue with the server.", "input": e, "detail": error}))
          .setMimeType(ContentService.MimeType.JSON);
  }
}