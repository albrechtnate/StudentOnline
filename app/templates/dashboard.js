getDataFromIDB("student", "name", "", function(result){
	$('#title').text(result[0] + " " + result[2]);
})

getDataFromIDB("classes", "3714", "classname", function(result){
	contentsection.append($(document.createElement('p')).attr("id", "classlist").text("Class: " + result));
});