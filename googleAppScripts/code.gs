/**
 * This method is the entry point.
 */
function doPost(e) {
  if (e.parameters.invoker == "requests") { // invoker is set on submission of the form to tell the API which route to go down
    var result = requests(e);
  }
  else {
    var result = rsvp(e);
  }
  return result;
}