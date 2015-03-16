// getDataFromIDB(insertintoDOM, "title", "student", "name", "0");

// var test = $(document.createElement('p')).attr("id", "class").text("Class: ");
// 		getDataFromIDB(appendintoDOM, "class", "classes", "3714", "class");
// contentsection.append(test);

getDataFromIDB("classes", "3714", "", function(result){
	$('#title').text(result);
})