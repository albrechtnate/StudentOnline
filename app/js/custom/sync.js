
// ----- Database Synchronization: Functions That Manage Syncing between the Remote Server and Indexed Database ----- //


// Asynchronously Loads JSON Data Returned By Remote Server
function loadJSON(file) {

	var url="resources/sample_profile_data.json";

	$.getJSON(url)
		.done(function(json){
			getProperties(json);
		})
		.fail(function(jqxhr, textStatus, error){
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
		});
}

// Parses JSON From Remote Server For Insertion Into Indexed Database
function getProperties(object) {

	for (var key in object) {
			insertIntoIDB(key, object[key]);
	}
}