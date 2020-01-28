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

function myHOME(){
	window.open("Home.html", "_self")
}

function myORDER(){
	window.open("Options.html", "_self")
}

function mySingle(){
	window.open("Single.html", "_self")
}

function myMulti(){
	window.open("Single.html", "_self")
}

function validateForm(){
	window.open("Login.html")
}

function myFAQ(){
	window.open("FAQ.html", "_self")
}

function myQUOTE(){
	var a = document.getElementById("types");
	var c = document.getElementById("dests");
	var e = document.getElementById("times");
	var g = document.getElementById("budget");
	
	var b = x.selectedIndex;
	var d = x.selectedIndex;
	var f = x.selectedIndex;
	var h = x.selectedIndex;
	
	var i;
	
	document.getElementById("demo").innerHTML = a.options[b].text;
}

console.log(data)