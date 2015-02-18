function loadContent(file) {

	xmlhttp=new XMLHttpRequest();

	xmlhttp.onreadystatechange=function() {

		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById("content-section").innerHTML=xmlhttp.responseText;
		}
	};

	xmlhttp.open("GET","pages/"+file+".html", true);
	xmlhttp.send();
	console.log("Ajax fetched: " + file + ".html");

	// loadJSTemplate(file);
}

function loadJSTemplate(file){

	xmlhttp=new XMLHttpRequest();

	xmlhttp.onreadystatechange=function() {

		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			eval(xmlhttp.responseText);
		}
	};

	xmlhttp.open("GET","templates/"+file+".js", true);
	xmlhttp.send();
	console.log("Ajax fetched: " + file + ".js");
}

loadContent("dashboard");