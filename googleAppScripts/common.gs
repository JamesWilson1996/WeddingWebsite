/**
 * This method inserts the data received from the html form submission
 * into the sheet. e is the data received from the POST
 */
function record_data(e, sheetName, update) {
  Logger.log(JSON.stringify(e)); // log the POST data in case we need to debug it
  try {
    var doc     = SpreadsheetApp.getActiveSpreadsheet();
    var sheet   = doc.getSheetByName(sheetName); // select the responses sheet
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    var nextRow = sheet.getLastRow()+1; // get next row
    if (update.found) {
      nextRow = update.loc +1
    }

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
function compareValidEmail(email, invoker) {
  try {
    var doc     = SpreadsheetApp.getActiveSpreadsheet();
    var responsesSheet   = doc.getSheetByName('responses'); // select the responses sheet
    var emailRange = responsesSheet.getRange('B1:C');
    var emails = emailRange.getValues();
    
    // Convert the input email to lowercase for case-insensitive comparison
    var inputEmail = email.trim().toLowerCase();

    var result = {
      found: false,
      loc: null
    }

    for (var i = 0; i < emails.length; i++) {
      var email = emails[i][1].trim().toLowerCase(); // Trim and convert to lowercase
      if (email === inputEmail) {
        if (invoker === "requests") {
          if (emails[i][0] === "yes") {
            result = {
              found: true,
              loc: i
            }
            return result
          }
        }
        else {
          result = {
              found: true,
              loc: i
            }
          return result
        }        
      }
    }
    return result
  }
  catch(error) {
    Logger.log(error);
    Logger.log(mailData);
    throw error;
  }
}