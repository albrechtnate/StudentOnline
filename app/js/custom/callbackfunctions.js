
// ----- Callback Functions: Functions That Run after an Asynchronous Operation ----- //


// Inserts Data into the DOM
function insertintoDOM(elementid, data){

	$('#' + elementid).text(data);
}

// Inserts Data into the DOM
function appendIntoDOM(elementid, data){

	var currenttext = $('#' + elementid).text();
	$('#' + elementid).text(currenttext + data);
}

// Creates an Alert Displaying the Data
function specialalert(elementid, data){

	alert(data);
}