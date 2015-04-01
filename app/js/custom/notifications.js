
// ----- Web Notifications API: Functions That Manage Displaying Notifications to the User ----- //

if (Notification.permission == "default"){
	Notification.requestPermission();
}

function notify (title, description, tag, icon) {
	if (Notification.permission == "granted"){
		if (icon == ""){ icon = "http://bdpamiddletn.org.previewdns.com/wp-content/uploads/2011/11/Categories-applications-education-university.ico"; }
		console.log(icon);
		var notification = new Notification(title, {
			body: description,
			tag: tag,
			icon: icon
		});
	}
	else{
		console.warn("Permission to display notifications has not been granted.")
		alert(title);
	}
}