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

function redirect() {
    window.open("Home Page.html", "_self")
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
		window.open("40+.html", "_self")
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
/*    document.body.style.backgroundImage = "url('https://www.fraseryachts.com/uploads/image/yachts/queen-anne/Gentech-yachts_yacht_for_sale_Queen-anne_12467.jpg')";*/
      document.body.style.backgroundImage = "url('https://i.insider.com/5b59df8d1982d835008b460a?width=1100&format=jpeg&auto=webp')";
}

function start() {
    myBackgroundimg();
    date();
    boats();
}
window.onload = start;

/*function readmore(more){
	if(more == 'sail'){
		document.getElementById("readsail").style.display= "none";
		document.getElementById(more).style.display= "block";
	}else if(more == 'power'){
		document.getElementById("readpower").style.display= "none";
		document.getElementById(more).style.display= "block";
	}else if(more == 'crew'){
		document.getElementById("readcrew").style.display= "none";
		document.getElementById(more).style.display= "block";
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

function readless(less){
  if(less == 'americas'){
		document.getElementById(less).style.display= "none";
        document.getElementById("readamericas").style.display= "block";
  }else if(less == 'caribbean'){
		document.getElementById(less).style.display= "none";
		document.getElementById("readcaribbean").style.display= "block";
  }else if(less == 'exotic'){
		document.getElementById(less).style.display= "none";
		document.getElementById("readexotic").style.display= "block";
  }else if(less == 'medi'){
		document.getElementById(less).style.display= "none";
        document.getElementById("readmedi").style.display= "block";
  }else if(less == 'sail'){
		document.getElementById(less).style.display= "none";
		document.getElementById("readsail").style.display= "block";
  }else if(less == 'power'){
		document.getElementById(less).style.display= "none";
		document.getElementById("readpower").style.display= "block";
  }else if(less == 'crew'){
		document.getElementById(less).style.display= "none";
		document.getElementById("readcrew").style.display= "block";
  }
}*/

function mySocial(open){
	if(open == 'fb'){
		window.open("https://www.facebook.com/")
	}else if(open == 'tweet'){
		window.open("https://twitter.com/home")
	}else if(open == 'you'){
		window.open("https://www.youtube.com/")
	}
}

function openForm(x) {
    var name = document.getElementById(x).innerHTML;
    var select = document.getElementById("boatname");
    var option = document.createElement("option");
    option.text = name;
    select.add(option);
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    var removeboat = document.getElementById("boatname");
    removeboat.remove(removeboat.selectedIndex);
    document.getElementById("formcontent").reset();
    document.getElementById("myForm").style.display = "none";
}

function resetForm(){
        document.getElementById("quote").reset();
}

function image(x){
	document.getElementById(x).style.display = "block";
}

function box(y){
	if(y == "101"){
		window.open("40′ VANDUTCH BLACK.html", "_self")
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

function openModal() {
    document.getElementById("gallery").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("gallery").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function date(){
	var timestamp = new Date();
	var yr = timestamp.getFullYear();
	var month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	var i;
	var renew = 0;
	for(i=0;i<13;i++){
		if(updatemonth == "December"){
			var renew = 12;
			yr = yr + 1;
			var update = new Date()
			var updatemonth = month[update.getMonth() + i - renew]
			var select = document.getElementById("date");
			var option = document.createElement("option");
			option.text = updatemonth + " " + yr;
			select.add(option);
		}else{
			var update = new Date()
			var updatemonth = month[update.getMonth() + i - renew]
			var select = document.getElementById("date");
			var option = document.createElement("option");
			option.text = updatemonth + " " + yr;
			select.add(option);
		}
	}
}

function boats() {
    var yacht = new Array();
    yacht[0] = "3900 - 3 Cabin Catamaran";
    yacht[1] = "35.2 - 2 Cabin Monohull";
    yacht[2] = "394 PC - 4 Cabin Catamaran";
    yacht[3] = "514 PC - 4 Cabin Catamaran";
    yacht[4] = "5800 Legacy - 6 Cabin Catamaran";
    yacht[5] = "5800 Master - 6 Cabins Catamaran";
    var i;
    for (i = 0; i < 6; i++) {
        var boat = yacht[i];
        var select = document.getElementById("boats");
        var option = document.createElement("option");
        option.text = boat;
        select.add(option);
    }
}

/*function email() {
    var fname = document.getElementById("fullname");
    var typeselect = document.getElementById("types").selectedIndex;
    var typeoption = document.getElementById("types").options;
    var destselect = document.getElementById("destination").selectedIndex;
    var destoption = document.getElementById("destination").options;
    var timeselect = document.getElementById("times").selectedIndex;
    var timeoption = document.getElementById("times").options;
    alert(
        "Dear " + fname.value + ",\n" +
        "Your request for a " + typeoption[typeselect].text +
        " going towards the " + destoption[destselect].text +
        " for " + timeoption[timeselect].text +
        " nights will cost around $5000.00"
    );
}

function reminder(){
	document.getElementById("myForm").style.display = "none";	
	var timestamp = new Date();
	var yr = timestamp.getFullYear();
	var mth = timestamp.getMonth();
	var dy = timestamp.getDate();
    var remind = new Date(yr, mth, dy, 18);
    setInterval(reminderemail(), 5000);
}

function reminderemail() {
    var fname = document.getElementById("fullname");
    var typeselect = document.getElementById("types").selectedIndex;
    var typeoption = document.getElementById("types").options;
    var destselect = document.getElementById("destination").selectedIndex;
    var destoption = document.getElementById("destination").options;
    var timeselect = document.getElementById("times").selectedIndex;
    var timeoption = document.getElementById("times").options;
    alert(
        "Dear " + fname.value + ",\n" +
        "This is an reminder that your request for a " + typeoption[typeselect].text +
        " going towards the " + destoption[destselect].text +
        " for " + timeoption[timeselect].text +
        " nights will cost around $5000.00"
    );
}*/
