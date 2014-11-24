//@prepros-prepend vendor/*.js
//@prepros-prepend foundation/*.js
//@prepros-prepend js-modules/*.js

var studentonline = {};
studentonline.indexedDB = {};

studentonline.indexedDB.db = null;

studentonline.indexedDB.open = function() {
	var version = 1;
	var request = indexedDB.open("data", version);

	request.onsuccess = function(e) {
		studentonline.indexedDB.db = e.target.result;
	};

	request.onerror = studentonline.indexedDB.onerror;
};