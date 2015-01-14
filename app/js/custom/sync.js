var idbSupported = false;

function IDBSupported() {
	if("indexedDB" in window) {
		idbSupported = true;
	}
}

function establishIDB() {
	if (idbSupported) {
		var version = 7;
		var request = window.indexedDB.open("data", version);
		request.onupgradeneeded = function(e) {
			console.log("Upgrading...");
			db = e.target.result;
			if(db.objectStoreNames.contains("student")) {
				db.deleteObjectStore("student");
			}
			if (!db.objectStoreNames.contains("student")) {
				db.createObjectStore("student", { autoIncrement: true });
			}
		};
		request.onsuccess = function(e) {
			console.log("Success!");
			db = e.target.result;
			insertData();
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
			// console.log(json);
			// parseJSON(json.student);
		})
		.fail(function(jqxhr, textStatus, error){
			var err = textStatus + ", " + error;
			console.log( "Request Failed: " + err );
		});
}

function insertData() {
	var transaction = db.transaction(["student"],"readwrite");
	var store = transaction.objectStore("student");
	var person = {
		name: {
			first: "Jonathon",
			last: "Smith"
		},
		email: "jsmith@yahoo.com",
		created: new Date()
	};
// console.log(person);

	getProperties(person);

	// for (var i = 0; i < person.length; i++) {
	//     for (var prop in person[i]) {
	//         if (person[i].hasOwnProperty(prop)) {
	//             alert(person[i][prop]);
	//         }
	//     }
	// }

	// var request = store.put(person);
}

function getProperties(object) {
	for (var key in object) {
		console.log(object[key]);
		moreProps(object[key]);
	}
}

function moreProps(possibleobject){
	if (Object.keys(possibleobject).length !== 0){
		console.log("Has properties");
		// getProperties(possibleobject);
	}
	else{
		console.log("No more nested objects");
	}
}

(function () {
	document.addEventListener("DOMContentLoaded", function(){
		IDBSupported();
		establishIDB();
		loadJSON();
	});
})();