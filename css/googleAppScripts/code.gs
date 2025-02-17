var TO_ADDRESS = "jamesawilson1996@gmail.com, beckyholden99@gmail.com"; // email to send the form data to

/**
 * This method is the entry point.
 */
function doPost(e) {
  var mailData = e.parameters;

  if (mailData.invite_code != "61125") { // validate invite code before saving data
    Logger.log("Incorrect Invite Code");
    return ContentService
        .createTextOutput(JSON.stringify({"result":"error", "message": "Sorry, your invite code (" + mailData.invite_code + ") is incorrect."}))
        .setMimeType(ContentService.MimeType.JSON);
  }

  if (mailData.invoker == "requests") { // invoker is set on submission of the form to tell the API which route to go down
    var result = requests(e);
  }
  else {
    var result = rsvp(e);
  }
  return result;
}

/**
 * This method handles rsvp responses
 */
function rsvp(e) {

  try {
    Logger.log(e); // the Google Script version of console.log see: Class Logger
    
    var mailData = e.parameters; // just create a slightly nicer variable name for the data
    
    record_data(e, 'responses');
    
    MailApp.sendEmail({
      to: TO_ADDRESS,
      subject: "A new guest RSVP'd for your wedding",
      replyTo: String(mailData.email), // This is optional and reliant on your form actually collecting a field named `email`
      htmlBody: formatMailBody(mailData)
    });

    return ContentService    // return json success results
          .createTextOutput(JSON.stringify({"result":"success","data": JSON.stringify(e.parameters) }))
          .setMimeType(ContentService.MimeType.JSON);
  } catch(error) { // if error return this
    Logger.log(error);
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "message": "Sorry, there is an issue with the server."}))
          .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * This method handles song requests
 */
function requests(e) {
  try {
    Logger.log(e); // the Google Script version of console.log see: Class Logger
    
    var mailData = e.parameters; // just create a slightly nicer variable name for the data
    
    var validEmail = compareValidEmail(mailData);

    if (!validEmail) {
      return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "message": "Sorry, there is no RSVP response yet for your email (" + mailData.requester + ") or you have RSVP'd as unable to attend."}))
          .setMimeType(ContentService.MimeType.JSON);
    }

    record_data(e, 'songRequests');

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


/**
 * This method inserts the data received from the html form submission
 * into the sheet. e is the data received from the POST
 */
function record_data(e, sheetName) {
  Logger.log(JSON.stringify(e)); // log the POST data in case we need to debug it
  try {
    var doc     = SpreadsheetApp.getActiveSpreadsheet();
    var sheet   = doc.getSheetByName(sheetName); // select the responses sheet
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow()+1; // get next row
    var row     = [ new Date().toUTCString() ]; // first element in the row should always be a timestamp
    // loop through the header columns
    for (var i = 1; i < headers.length; i++) { // start at 1 to avoid Timestamp column
      if(headers[i].length > 0) {
        row.push(e.parameter[headers[i]]); // add data to row
      }
    }
    // more efficient to set values as [][] array than individually
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
  }
  catch(error) {
    Logger.log(error);
    Logger.log(e);
    throw error;
  }
  finally {
    return;
  }
}

/**
 * This method checks if the user email exists in the responses sheet.
 */
function compareValidEmail(mailData) {
  try {
    var doc     = SpreadsheetApp.getActiveSpreadsheet();
    var responsesSheet   = doc.getSheetByName('responses'); // select the responses sheet
    var emailRange = responsesSheet.getRange('B2:C');
    var emails = emailRange.getValues();
    
    // Convert the input email to lowercase for case-insensitive comparison
    var inputEmail = mailData.requester[0].trim().toLowerCase();

    for (var i = 0; i < emails.length; i++) {
      var email = emails[i][1].trim().toLowerCase(); // Trim and convert to lowercase
      if (email === inputEmail) {
        if (emails[i][0] === "yes") {
          return true
        }
      }
    }
    return false
  }
  catch(error) {
    Logger.log(error);
    Logger.log(mailData);
    throw error;
  }
}


/**
 * This method is just to prettify the email.
 */
function formatMailBody(obj) { // function to spit out all the keys/values from the form in HTML
  var result = "";
  for (var key in obj) { // loop over the object passed to the function
    result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + obj[key] + "</div>";
    // for every key, concatenate an `<h4 />`/`<div />` pairing of the key name and its value, 
    // and append it to the `result` string created at the start.
  }
  return result; // once the looping is done, `result` will be one long string to put in the email body
}