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
			doWork();
		};
		request.onerror = function(e) {
			console.log("Error");
			console.dir(e);
		};
	}
}

function getDataFromIDB(datakey, value, optional_second_value) {
	var transaction = db.transaction(["student"], "readonly");
	var objectStore = transaction.objectStore("student");
	var ob = objectStore.get(datakey);
	optional_second_value = optional_second_value || null;
	dfd = $.Deferred();
	ob.onsuccess = function(e) {
		var result = e.target.result;
		if (optional_second_value === null){
			// return result[value];
			dfd.resolve("One");
		}
        else{
        	// return result[value][optional_second_value];
        	dfd.resolve("Two");
        }
	};
	return dfd.promise();
}

(function () {
	document.addEventListener("DOMContentLoaded", function(){
		IDBSupported();
		establishIDB();
	});
})();

function doWork(){
	console.log(getDataFromIDB("student", "name", "0"));
	$('#pagetitle').text("HEY!");
}