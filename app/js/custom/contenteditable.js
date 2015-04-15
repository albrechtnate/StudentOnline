// ----- ContentEditable Watcher: Functions That Watch for Changes to Editable Content so That the Indexed (Local) and Remotes Databases Can Be Updated ----- //


// Watch for Changes Made to ContentEditable Data
function contentEditableWatcher() {
	$("*[ContentEditable]").on("input", function(event){
		$(event.target).on("input");
		console.log("Data Changed. Establishing Blur Event Listener.");
		$(event.target).on("blur", function(){
			console.log("Blur");
		});
	});
}