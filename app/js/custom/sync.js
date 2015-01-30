var idbSupported = false;

function IDBSupported() {
	if("indexedDB" in window) {
		idbSupported = true;
	}
}

function establishIDB() {
	if (idbSupported) {
		var version = 13;
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

	j
		.fail(function(jqxhr, textStatus, error){
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
		});
}

function insertIntoIDB(key, object) {
	var transaction = db.transaction(["student"],"readwrite");
	var store = transaction.objectStore("student");
	var request = store.put(object, key);
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

// function getDataFromIDB(datakey) {
// 	var transaction = db.transaction(["student"], "readonly");
// 	var objectStore = transaction.objectStore("student");
// 	var ob = objectStore.get("data");
// 	ob.onsuccess = function(e) {
// 		var result = e.target.result;
//         console.log(result["LastName"]);
// 	};
// }