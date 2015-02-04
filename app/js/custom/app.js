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

    var template-insertion = document.getElementById("template-insertion");
}

loadContent("dashboard");