
// ----- Indexed Database: Functions Relating to the Setup of the Database and the Insertion/Retrieval of Information ----- //


// Establishes the Indexed Database
function establishIDB() {

	var version = 2;
	var request = window.indexedDB.open("StudentOnline", version);

	request.onupgradeneeded = function(e) {
		console.log("Upgrading...");
		db = e.target.result;
		if(db.objectStoreNames.contains("datastore")) {
			db.deleteObjectStore("datastore");
		}
		if(db.objectStoreNames.contains("localhanges")) {
			db.deleteObjectStore("localhanges");
		}
		if (!db.objectStoreNames.contains("datastore")) {
			db.createObjectStore("datastore");
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
function getDataFromIDB(datakey, value, optional_second_value, callback, localchangesobject) {

	getLocalChanges(value, callback);

	var transaction = db.transaction(["datastore"], "readonly");
	var objectStore = transaction.objectStore("datastore");
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

// Wipe ObjectStore
function wipeObjectStore(store) {

	var transaction = db.transaction([store], "readwrite");
	var objectStore = transaction.objectStore(store);
	objectStore.openCursor().onsuccess = function(event){
		var cursor = event.target.result;
		if (cursor){
			objectStore.delete(cursor.key);
			cursor.continue();
		}
	};
}

// Checks the Local Changes Table For Objects That Match
function checkInLocalChanges(localchangesobject, value, callback) {

	if (value in localchangesobject){
		callback(localchangesobject[value]);
	}
}

// Retrieves List of Local Changes
function getLocalChanges(value, callback, forsync) {

	var transaction = db.transaction(["localchanges"], "readonly");
	var objectStore = transaction.objectStore("localchanges");
	var localchangesobject = {};
	objectStore.openCursor().onsuccess = function(event){
		var cursor = event.target.result;
		if (cursor){
			localchangesobject[cursor.value.elementID] = cursor.value.data;
			cursor.continue();
		}
		else if (forsync === true){
			callback(localchangesobject);
		}
		else{
			checkInLocalChanges(localchangesobject, value, callback);
		}
	};
}