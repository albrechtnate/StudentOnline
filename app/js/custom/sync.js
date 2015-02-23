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

function getProperties(object) {
	for (var key in object) {
		// if (moreProps(object[key]) === false){
			console.log(key + ": " + object[key]);
			insertIntoIDB(key, object[key]);
		// }
	}
}

// (function () {
// 	document.addEventListener("DOMContentLoaded", function(){
// 		IDBSupported();
// 		establishIDB();
// 	});
// })();