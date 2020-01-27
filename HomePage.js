// Try edit message
const data = {
  message: 'Yacht Charter Fleet',
  type: 'Type',
  dest: 'Destination',
  time: 'Number of nights',
}

$('#msg').html(data.message)
$('#type').html(data.type)
$('#dest').html(data.dest)
$('#time').html(data.time)

function validateForm(){
	window.open("Login.html")
}

function myFAQ(){
	window.open("FAQ.html", "_self")
}

function myOPTIONS(){
	window.open("Options.html", "_self")
}

function myHOME(){
	window.open("Home.html", "_self")
}

console.log(data)