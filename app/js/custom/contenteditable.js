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
	var id = $(target).attr("id");
	var data = $(target).text();
	var transaction = db.transaction(["localchanges"],"readwrite");
	var store = transaction.objectStore("localchanges");
	var request = store.put(data, id);
}