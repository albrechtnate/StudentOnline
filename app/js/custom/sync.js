var idbSupported = false;

function IDBSupport () {
	document.addEventListener("DOMContentLoaded", function(){
		if("indexedDB" in window) {
			idbSupported = true;
		}
		console.log(idbSupported);
	});
}
IDBSupport();