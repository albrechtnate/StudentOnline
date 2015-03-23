getDataFromIDB("student", "photo", "", function(result){
	contentsection.append($(document.createElement('img')).attr("id", "classlist").attr("src", result));
});

// getDataFromIDB("classes")