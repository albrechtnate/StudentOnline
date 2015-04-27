getDataFromIDB("student", "name", "", function(result){
	$('#name').text(result[0] + " " + result[2]);
})

getDataFromIDB("student", "dashboard_content", "", function(result){
	$('#dashboard_content').text(result);
})

getDataFromIDB("classes", "3714", "classname", function(result){
	contentsection.append($(document.createElement('p')).attr("id", "classname").text("Class: " + result));
});