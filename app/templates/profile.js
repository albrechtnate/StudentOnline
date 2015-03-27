getDataFromIDB("student", "photo", "", function(result){
	contentsection.append($(document.createElement('img')).attr("id", "classlist").attr("src", result));
});

getDataFromIDB("classes", "", "", function(result){
	for (i in result){
		$("#classschedule").append($(document.createElement('li')).text(result[i]["classname"]));
	}
})