var idbSupported = false;

function IDBSupported() {
	if("indexedDB" in window) {
		idbSupported = true;
	}
}

function establishIDB() {
	if (idbSupported) {
		var version = 9;
		var request = window.indexedDB.open("data", version);
		request.onupgradeneeded = function(e) {
			console.log("Upgrading...");
			db = e.target.result;
			if(db.objectStoreNames.contains("student")) {
				db.deleteObjectStore("student");
			}
			if (!db.objectStoreNames.contains("student")) {
				db.createObjectStore("student");
			}
		};
		request.onsuccess = function(e) {
			db = e.target.result;
			loadJSON();
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
			insertIntoIDB(json);
		})
		.fail(function(jqxhr, textStatus, error){
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
		});
}

function insertIntoIDB(object) {
	var transaction = db.transaction(["student"],"readwrite");
	var store = transaction.objectStore("student");
	var request = store.put(object, "test");
}

function getProperties(object) {
	for (var key in object) {
		if (moreProps(object[key]) === false){
			console.log(key + ": " + object[key]);
			insertIntoIDB(key, object[key]);
		}
	}
}

function moreProps(possibleobject){
	if (typeof possibleobject == "object" && Object.getOwnPropertyNames(possibleobject).length > 0){
		getProperties(possibleobject);
	}
	else{
		return false;
	}
}

(function () {
	document.addEventListener("DOMContentLoaded", function(){
		IDBSupported();
		establishIDB();
	});
})();