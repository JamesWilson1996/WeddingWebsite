/**
 * This method handles rsvp responses
 */
var TO_ADDRESS = "jamesawilson1996@gmail.com, beckyholden99@gmail.com"; // email to send the form data to

function rsvp(e) {
  try {
    Logger.log(e); // the Google Script version of console.log see: Class Logger

    var mailData = e.parameters; // just create a slightly nicer variable name for the data

    if (mailData.invite_code != "61125" && mailData.invite_code != "25116") { // validate invite code before saving data
      Logger.log("Incorrect Invite Code");
      return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "message": "Sorry, your invite code (" + mailData.invite_code + ") is incorrect."}))
          .setMimeType(ContentService.MimeType.JSON);
    }

    var update = compareValidEmail(mailData.email[0], "rsvp")

    if (mailData.invite_code[0] == "61125") {
      e.parameter.guest_type = "All Day";
    }
    else {
      e.parameter.guest_type = "Evening";
    }

    record_data(e, 'responses', update);
    
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