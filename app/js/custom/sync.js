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
			$.getJSON(url)
			.done(function(json){
				student = json.student;
				console.log(student.LastName);
				return student;
			})
			.fail(function(jqxhr, textStatus, error){
				var err = textStatus + ", " + error;
				console.log( "Request Failed: " + err );
			})
			;
		});
}

loadJSON();