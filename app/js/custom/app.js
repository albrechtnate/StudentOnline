
// ----- App : Javascript That Initializes the Application and Runs Other High-Level Functions ----- //

contentsection = $("#content-section");
var contentObj = {};

// Calls a Variety of Functions Once the DOM Content Has Been Loaded
(function () {

	document.addEventListener("DOMContentLoaded", function(){

		establishIDB();
	});
})();