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
			dashboardTemplateInsertion();
		};
		request.onerror = function(e) {
			console.log("Error");
			console.dir(e);
		};
	}
}

function getDataFromIDB(callback, elementid, datakey, value, optional_second_value) {
	var transaction = db.transaction(["student"], "readonly");
	var objectStore = transaction.objectStore("student");
	var ob = objectStore.get(datakey);
	optional_second_value = optional_second_value || null;
	ob.onsuccess = function(e) {
		var result = e.target.result;
		if (optional_second_value === null){ callback(elementid, result[value]); }
        else{ callback(elementid, result[value][optional_second_value]); }
	};
}
	// Begin: getDataFromIDB Callback Functions
	function insertintoDOM(elementid, data){
		$('#' + elementid).text(data);
	}
	function specialalert(elementid, data){
		alert(data);
	}
	// End: getDataFromIDB Callback Functions

function dashboardTemplateInsertion(){
	var contentsection = $("#content-section");

	getDataFromIDB(insertintoDOM, "pagetitle", "student", "name", "0");
var span = $(document.createElement('span')).attr("id", "infospan").text("test");
	var test = $(document.createElement('p')).attr("id", "info").text("Class: ");
		contentsection.append(test);
		test.append(span);
		getDataFromIDB(insertintoDOM, "info", "classes", "3714", "class");
}

/* ----------------------- End Function Declarations ----------------------- */

(function () {
	document.addEventListener("DOMContentLoaded", function(){
		IDBSupported();
		establishIDB();
	});
})();