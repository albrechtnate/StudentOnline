getDataFromIDB(insertintoDOM, "title", "student", "name", "0");

var test = $(document.createElement('p')).text("Class: ");
	var span = $(document.createElement('span')).attr("id", "infospan");
		getDataFromIDB(insertintoDOM, "infospan", "classes", "3714", "class");
	test.append(span);
contentsection.append(test);

// Adjust to using new cb function "appendIntoDOM" next work period.