// Try edit message

function myPage(open){
	if(open == 'home'){
		window.open("Home Page.html", "_self")
	}else if(open == 'contact'){		
		window.open("Contact.html", "_self")
	}else if(open == 'faq'){
		window.open("FAQ.html", "_self")
	}
}

function myDestination(open){
	if(open == 'americas'){
		window.open("Americas.html", "_self")
	}else if(open == 'caribbean'){		
		window.open("Caribbean.html", "_self")
	}else if(open == 'exotic'){
		window.open("Exotics.html", "_self")
	}else if(open == 'medi'){
		window.open("Mediterranean.html", "_self")
	}
}

function myType(open){
	if(open == 'sail'){
		window.open("Sail.html", "_self")
	}else if(open == 'power'){		
		window.open("Power.html", "_self")
	}else if(open == 'crew'){
		window.open("Crew.html", "_self")
	}	
}

function validateForm(){
	window.open("index/index.html", "_self")
}

function myQuote(){
	window.open("Quote.html", "_self")
}

function myBackgroundimg(){
	document.body.style.backgroundImage = "url('https://www.fraseryachts.com/uploads/image/yachts/queen-anne/Gentech-yachts_yacht_for_sale_Queen-anne_12467.jpg')";
}

function readmore(more){
	if(more == 'sail'){
		document.getElementById("readsail").style.display= "none";
		document.getElementById("sail").style.display= "block";
	}else if(more == 'power'){
		document.getElementById("readpower").style.display= "none";
		document.getElementById("power").style.display= "block";
	}else if(more == 'crew'){
		document.getElementById("readcrew").style.display= "none";
		document.getElementById("crew").style.display= "block";
	}else if(more == 'americas'){
		document.getElementById("readamericas").style.display= "none";
		document.getElementById(more).style.display= "block";
	}else if(more == 'caribbean'){
		document.getElementById("readcaribbean").style.display= "none";
		document.getElementById(more).style.display= "block";		
	}else if(more == 'exotic'){
		document.getElementById("readexotic").style.display= "none";
		document.getElementById(more).style.display= "block";		
	}else if(more == 'medi'){
		document.getElementById("readmedi").style.display= "none";
		document.getElementById(more).style.display= "block";		
	}
}

function mySocial(open){
	if(open == 'fb'){
		window.open("https://www.facebook.com/")
	}else if(open == 'tweet'){
		window.open("https://twitter.com/home")
	}else if(open == 'you'){
		window.open("https://www.youtube.com/")
	}
}

var dbConnection = SQL.connect({
	Driver: ""
})

var db = openDatabase();

var con = mysql.createConnection({
	host: "localhost",
	user: "myusername",
	password: "mypassword"
});

function openForm() {
	  document.getElementById("myForm").style.display = "block";
}

function closeForm(){
	  document.getElementById("myForm").style.display = "none";
}

function image(x){
	document.getElementById(x).style.display = "block";
}

function box(y){
	if(y == "101"){
		window.open("3900 - 3 Cabin Catamaran.html", "_self")
	}
	else if(y == "102"){
		window.open("35.2 - 2 Cabin Monohull.html", "_self")
	}
	else if(y == "201"){
		window.open("394 PC - 4 Cabin Catamaran.html", "_self")
	}
	else if(y == "202"){
		window.open("514 PC - 4 Cabin Catamaran.html", "_self")
	}
	else if(y == "301"){
		window.open("5800 Legacy - 6 Cabin Catamaran.html", "_self")
	}
	else if(y == "302"){
		window.open("5800 Master - 6 Cabins Catamaran.html", "_self")
	}
}

function span(z){
	document.getElementsByClassName("close")[0];
	document.getElementById(z).style.display = "none";
}

function editor(){
	  var x = document.getElementById("body");	  
	  if (x.contentEditable == "true") {
		  x.contentEditable = "false";
		  document.getElementById("edit").innerHTML = "Viewing as User";
	  }else if(x.contentEditable = "false"){
		  x.contentEditable = "true";
		  document.getElementById("edit").innerHTML = "Viewing as Administrator";
	  }
}

function saveEdits() {
  //get the editable element
  var editElem = document.getElementById("edit");
  //get the edited element content
  var userVersion = editElem.HTML;
  //save the content to local storage
  localStorage.userEdits = userVersion;
  //write a confirmation to the user
  document.getElementById("update").innerHTML="Edits saved!";
}

function checkEdits() {
  //find out if the user has previously saved edits
  if(localStorage.userEdits!=null)
    document.getElementById("edit").HTML = localStorage.userEdits;
}

function reminder(){
	document.getElementById("myForm").style.display = "none";	
	var timestamp = new Date();
	var yr = timestamp.getFullYear();
	var mth = timestamp.getMonth();
	var dy = timestamp.getDate();
	var remind = new Date(yr, mth, dy, 18);
	alert("reminder sent");
}