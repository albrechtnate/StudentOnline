function loadContent(t){xmlhttp=new XMLHttpRequest,xmlhttp.onreadystatechange=function(){4==xmlhttp.readyState&&200==xmlhttp.status&&(document.getElementById("content-section").innerHTML=xmlhttp.responseText)},xmlhttp.open("GET",t+".php",!0),xmlhttp.send()}loadContent("profile");
