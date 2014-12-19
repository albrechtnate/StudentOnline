var idbSupported = false;

(function () {
	document.addEventListener("DOMContentLoaded", function(){
		if("indexedDB" in window) {
			idbSupported = true;
		}
		console.log(idbSupported);
	});
})();

function loadJSON(file) {

$(document).ready(function(){
			var url="resources/sample_profile_data.json";
			$.getJSON(url,function(json){
				console.log("Success");
			});
		});
}