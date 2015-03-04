
// ----- Template Loading: Functions Relating to the Loading of HTML and Javascript Page Templates ----- //


// Asynchronously Loads the HTML Template for the Requested Page
function loadContent(file) {

	xmlhttp=new XMLHttpRequest();

	xmlhttp.onreadystatechange=function() {

		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById("content-section").innerHTML=xmlhttp.responseText;
			loadJSTemplate(file);
		}
	};

	xmlhttp.open("GET","pages/"+file+".html", true);
	xmlhttp.send();

}

// Asynchronously Loads the Javascript Template for the Requested Page
function loadJSTemplate(file){

	xmlhttp=new XMLHttpRequest();

	xmlhttp.onreadystatechange=function() {

		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			eval(xmlhttp.responseText);
		}
	};

	xmlhttp.open("GET","templates/"+file+".js", true);
	xmlhttp.send();
}