
// ----- Template Loading: Functions Relating to the Loading of HTML and Javascript Page Templates ----- //


// Asynchronously Loads the HTML Template for the Requested Page
function loadContent(file) {

	contentObj.currentPage = file;

	xmlhttp=new XMLHttpRequest();

	xmlhttp.onreadystatechange=function() {

		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById("content-section").innerHTML=xmlhttp.responseText;
			loadJSTemplate(file);
			contentEditableWatcher();
		}
		if (xmlhttp.readyState==4 && xmlhttp.status==404) {
			document.getElementById("content-section").innerHTML='<div data-alert="" class="alert-box alert radius">Page failed to load. Sorry about that!<a href="#" class="close">×</a></div>';
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
			var script = document.createElement('script');
			script.innerHTML = xmlhttp.responseText;
			document.getElementById("content-section").appendChild(script);
		}
	};

	xmlhttp.open("GET","templates/"+file+".js", true);
	xmlhttp.send();
}