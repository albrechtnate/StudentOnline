# StudentOnline - Wilmington Christian School Classs of 2015 Senior Computing Project

StudentOnline is a web application designed to help Teachers, Students, and Administrators manage their grades and academic lives online.

Thesis: *Prove by example that "Web applications, with the technology available to us today, are serious alternatives to traditional native-based applications."*

## To Begin Working With This Repo...
- Install Git and Clone this Project with *'git clone https://github.com/photoguy2801/StudentOnline.git'*
- Install NodeJS (Make sure NPM is checked during installation)
- Install Gulp Globally by typing *'npm install -g gulp'* (May need to prepend *sudo* to the command)
- Traverse within command line to project folder and run *'npm install'*
- Following sucessful installation of all Node packages, if on a Mac/Unix, run *'npm run ustart*, if on Windows run *'npm run wstart'*, or if neither work, *'npm start'*
- This will start a local web server on *http://localhost:8080* with livereload included
	- This will compile sass and minify & concatenate files
	- **Important: To stop the server and use the command line again, press Ctrl+C**

## Project Goals:
- Must work with 3 different views/access-levels (Student, Teacher, Administrator)
- Must be built from the ground-up to be offline enabled
- Must be built "mobile-first" and responsive from the ground-up
- Must use a modular design that can easily be changed, added to, or updated
- Only has to work in the latest version of Google Chrome
- Must use Web Notifications API
- Must implement tasteful sound-effects on interaction
- Must include animations to transition from one state to the next