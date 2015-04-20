// ----- ContentEditable Watcher: Functions That Watch for Changes to Editable Content so That the Indexed (Local) and Remotes Databases Can Be Updated ----- //


// Watch for Changes Made to ContentEditable Data
function contentEditableWatcher() {
	$("*[ContentEditable]").on("input", function(event){
		$(event.target).off();
		$(event.target).on("blur", function(){
			$(event.target).off();
			getUpdatedContent(event.target);
			contentEditableWatcher();
		});
	});
}

function getUpdatedContent(target){
	var timestamp = Date.now();
	var data = {timestamp: timestamp, elementID: $(target).attr("id"), data: $(target).text()};
	var date = JSON.stringify(data);
	insertIntoIDB("localchanges", timestamp, data);
}