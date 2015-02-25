function dashboardTemplateInsertion(){
	var contentsection = $("#content-section");

	getDataFromIDB(insertintoDOM, "pagetitle", "student", "name", "0");
	var test = $(document.createElement('p')).text("Class: ");
		getDataFromIDB(insertintoDOM, "infospan", "classes", "3714", "class");
		test.append($(document.createElement('span')).attr("id", "infospan"));
		contentsection.append(test);
}