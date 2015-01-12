var idbSupported = false;

function IDBSupported() {
	if("indexedDB" in window) {
		idbSupported = true;
	}
}

function establishIDB() {
	if (idbSupported) {
		var request = window.indexedDB.open("data", 2);
		request.onupgradeneeded = function(e) {
			console.log("Upgrading...");
			db = e.target.result;
			if (!db.objectStoreNames.contains("student")) {
        		db.createObjectStore("student");
        	}
		};
		request.onsuccess = function(e) {
			console.log("Success!");
			db = e.target.result;
		};
		request.onerror = function(e) {
			console.log("Error");
			console.dir(e);
		};
	}
}

function loadJSON(file) {

	var url="resources/sample_profile_data.json";
	$.getJSON(url)
		.done(function(json){
			// parseJSON(json.student);
		})
		.fail(function(jqxhr, textStatus, error){
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
		});
}

function insertData(data) {
	var transaction = db.transaction(["data"],"readwrite");
	var store = transaction.objectStore("student");
var person = {
    name:"John",
    email:"jsmith@yahoo.com",
    created:new Date()
}
	var request = store.add(person,1);
}


(function () {
	document.addEventListener("DOMContentLoaded", function(){
		IDBSupported();
		establishIDB();
		loadJSON();
		insertData();
	});
})();