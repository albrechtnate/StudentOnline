
// ----- Indexed Database: Functions Relating to the Setup of the Database and the Insertion/Retrieval of Information ----- //


// Establishes the Indexed Database
function establishIDB() {

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

// Inserts Data Into the Indexed Database
function insertIntoIDB(key, object) {

	var transaction = db.transaction(["student"],"readwrite");
	var store = transaction.objectStore("student");
	var request = store.put(object, key);
}

// Retrieves Data From the Indexed Database
function getDataFromIDB(callback, elementid, datakey, value, optional_second_value) {

	var transaction = db.transaction(["student"], "readonly");
	var objectStore = transaction.objectStore("student");
	var ob = objectStore.get(datakey);
	optional_second_value = optional_second_value || null;

	ob.onsuccess = function(e) {
		var result = e.target.result;
		if (optional_second_value === null){
			callback(elementid, result[value]);
		}
        else{
        	callback(elementid, result[value][optional_second_value]);
        }
	};
}