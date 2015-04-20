
// ----- Indexed Database: Functions Relating to the Setup of the Database and the Insertion/Retrieval of Information ----- //


// Establishes the Indexed Database
function establishIDB() {

	var version = 14;
	var request = window.indexedDB.open("data", version);

	request.onupgradeneeded = function(e) {
		console.log("Upgrading...");
		db = e.target.result;
		if(db.objectStoreNames.contains("student")) {
			db.deleteObjectStore("student");
		}
		if(db.objectStoreNames.contains("localchanges")) {
			db.deleteObjectStore("localchanges");
		}
		if (!db.objectStoreNames.contains("localchanges")) {
			db.createObjectStore("localchanges");
		}
		if (!db.objectStoreNames.contains("localchanges")) {
			db.createObjectStore("localchanges");
		}
	};
	request.onsuccess = function(e) {
		db = e.target.result;
		syncLooper();
		loadContent("dashboard");
	};
	request.onerror = function(e) {
		console.log("Error");
		console.dir(e);
	};
}

// Inserts Data Into the Indexed Database
function insertIntoIDB(objectstore, key, object) {

	var transaction = db.transaction([objectstore],"readwrite");
	var store = transaction.objectStore(objectstore);
	var request = store.put(object, key);
}

// Retrieves Data From the Indexed Database
function getDataFromIDB(datakey, value, optional_second_value, callback) {

	var transaction = db.transaction(["student"], "readonly");
	var objectStore = transaction.objectStore("student");
	var ob = objectStore.get(datakey);
	value = value || null;
	optional_second_value = optional_second_value || null;

	ob.onsuccess = function(e) {
		var result = e.target.result;
		if (value === null){
			callback(result);
		}
		else if (optional_second_value === null){
			callback(result[value]);
		}
        else{
        	callback(result[value][optional_second_value]);
        }
	};
}