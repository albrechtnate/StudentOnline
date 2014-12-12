//@prepros-prepend js-modules/*.js

// var studentonline = {};
// studentonline.indexedDB = {};

// studentonline.indexedDB.db = null;

// studentonline.indexedDB.open = function() {
// 	var version = 1;
// 	var request = indexedDB.open("data", version);

// 	request.onsuccess = function(e) {
// 		studentonline.indexedDB.db = e.target.result;
// 	};

// 	request.onerror = studentonline.indexedDB.onerror;
// };

// var personSection = document.getElementById("person");

// function domInsert(i) {
// 	x = document.createElement('p');
// 	x.innerText = i;
// 	personSection.appendChild(x);
// }

// var idbSupported = false;
// var db;

// document.addEventListener("DOMContentLoaded", function(){

//     if("indexedDB" in window) {
//         idbSupported = true;
//     }

//     if(idbSupported) {
//         var openRequest = indexedDB.open("new", 6);

//         openRequest.onupgradeneeded = function(e) {
//             console.log("Upgrading...");
//             var thisDB = e.target.result;

//             if(!thisDB.objectStoreNames.contains("people")) {
//                 thisDB.createObjectStore("people", { autoIncrement: true} );
//             }
//         }

//         openRequest.onsuccess = function(e) {
//             console.log("Success!");
//             db = e.target.result;

//             var transaction = db.transaction(["people"],"readwrite");
//             var store = transaction.objectStore("people");

//             var person = {
//             	name: "Joe",
//             	email: "smith@nz.com",
//             	created: new Date()
//             }

//             var request = store.add(person);

//             request.onsuccess = function(e) {
//             	console.log("Value Added to Database");
//             }

//             request.onerror = function(e) {
//             	console.log("Error adding value to database. ");
//             	console.dir(e);
//             }

//             var thing = store.get(43);
//             thing.onsuccess = function(x) {
//             	result = x.target.result;
//             	for (i in result) {
//             		domInsert(result[i]);
//             	}
//             }
//         }

//         openRequest.onerror = function(e) {
//             console.log("Error");
//             console.dir(e);
//         }

//     }

// },false);

function loadContent(file) {

    xmlhttp=new XMLHttpRequest();

    xmlhttp.onreadystatechange=function() {

	    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	        document.getElementById("content-section").innerHTML=xmlhttp.responseText;
	    }
    }

    xmlhttp.open("GET","pages/"+file+".php", true);
    xmlhttp.send();
}

loadContent("profile");