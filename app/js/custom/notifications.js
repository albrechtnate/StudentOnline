
// ----- Web Notifications API: Functions That Manage Displaying Notifications to the User ----- //

if (Notification.permission == "default"){
	Notification.requestPermission();
}

function notify (title, description, tag, icon, onclick) {
	if (Notification.permission == "granted"){
		if (icon === ""){ icon = "http://icons.iconarchive.com/icons/matthew-kelleigh/mac-town-vol2/32/School-Bus-1-icon.png"; }
		var notification = new Notification(title, {
			body: description,
			tag: tag,
			icon: icon
		});
		if (onclick !== ""){ notification.onclick = onclick; }
	}
	else{
		console.warn("Permission to display notifications has not been granted.");
		alert(title);
	}
}