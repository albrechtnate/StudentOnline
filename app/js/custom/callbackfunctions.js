
// ----- Callback Functions: Functions That Run after an Asynchronous Operation ----- //


// Inserts Data into the DOM
function insertintoDOM(elementid, data){

	$('#' + elementid).text(data);
}

// Inserts Data into the DOM
function appendintoDOM(elementid, data){

	var currenttext = $('#' + elementid).text();
	$('#' + elementid).text(currenttext + data);
}

function insertintoAttr(elementid, attribute, data){

	$('#' + elementid).attr(attribute, data);
}

// Creates an Alert Displaying the Data
function specialalert(elementid, data){

	alert(data);
}