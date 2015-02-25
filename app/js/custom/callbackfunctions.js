
// ----- Callback Functions: Functions That Run after an Asynchronous Operation ----- //


// Inserts Data into the DOM
function insertintoDOM(elementid, data){

	$('#' + elementid).text(data);
}

// Creates an Alert Displaying the Data
function specialalert(elementid, data){

	alert(data);
}