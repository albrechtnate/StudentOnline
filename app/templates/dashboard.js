getDataFromIDB("student", "name", "", function(result){
	$('#title').text(result[0] + " " + result[2]);
})

getDataFromIDB("student", "dashboard_content", "", function(result){
	$('#dashboard-message').text(result);
})

getDataFromIDB("classes", "3714", "classname", function(result){
	contentsection.append($(document.createElement('p')).attr("id", "classlist").text("Class: " + result));
});