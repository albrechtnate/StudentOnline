
// ----- Database Synchronization: Functions That Manage Syncing between the Remote Server and Indexed Database ----- //


// Asynchronously Loads JSON Data Returned By Remote Server
function loadJSON(file) {

	var url="resources/sample_profile_data.json";

	$.getJSON(url)
		.done(function(json){
			var shaObj = new jsSHA(JSON.stringify(json), "TEXT");
			var checksum = shaObj.getHash("SHA-256", "HEX");
			diffcheck(checksum, json);
		})
		.fail(function(jqxhr, textStatus, error){
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
		});
}

// Parses JSON From Remote Server For Insertion Into Indexed Database
function getProperties(object) {

	for (var key in object) {
			insertIntoIDB("datastore", key, object[key]);
	}
}

// Loads the Data JSON From the Server Every 5 Seconds
function syncLooper(){

	loadJSON();
	window.setInterval(function(){
		loadJSON();
	}, 5000);
}

// Compares the Checksum of the Newly Loaded JSON Data to That of the Previous and Updates It If Nessecary
function diffcheck(checksum, json) {

	if (typeof currentChecksum === 'undefined'){
		currentChecksum = checksum;
		getProperties(json);
	}
	else if (checksum != currentChecksum) {
		currentChecksum = checksum;
		getProperties(json);
		notify("Data Has Been Updated", "Click to refresh the page and update the data", "dataupdate", "", function(){
			loadContent(contentObj.currentPage);
		});
	}
}