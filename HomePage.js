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
		window.open("50+.html", "_self")
	}else if(open == 'crew'){
		window.open("60+.html", "_self")
	}	
}

function myQuote(){
	window.open("Quote.html", "_self")
}

function myBackgroundimg(){
      document.body.style.backgroundImage = "url('https://i.insider.com/5b59df8d1982d835008b460a?width=1100&format=jpeg&auto=webp')";
}

function start() {
    boats();
    passengers();
    date();
    days();
    quote();
    delcalendar();
}
//window.onload = start;

function activate() {
    var elmnt = document.getElementById("myDIV");
    var y = elmnt.scrollTop;
    document.getElementById("demo").innerHTML = "Vertically: " + y + "px";
    if (y >= 40) {
        document.getElementById("van").style.display = "inline";
        document.getElementById("dutch").style.animationPlayState = "running";
    }
    if (y >= 360) {
        document.getElementById("mar").style.display = "inline";
        document.getElementById("quis").style.animationPlayState = "running";
    }
    if (y >= 800) {
        document.getElementById("sea").style.display = "inline";
        document.getElementById("ray").style.animationPlayState = "running";
    }
    if (y >= 1280) {
        document.getElementById("azi").style.display = "inline";
        document.getElementById("mut").style.animationPlayState = "running";
    }
    if (y >= 1680) {
        document.getElementById("monte").style.display = "inline";
        document.getElementById("carlo").style.animationPlayState = "running";
    }
    if (y >= 2080) {
        document.getElementById("ai").style.display = "inline";
        document.getElementById("con").style.animationPlayState = "running";
    }
}

function readmore(more){
	if(more == 'americas'){
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

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function image(x){
	document.getElementById(x).style.display = "block";
}

function box(y){
	if(y == "101"){
		window.open("40' VANDUTCH BLACK.html", "_self")
	}
	else if(y == "102"){
        window.open("43' MARQUIS.html", "_self")
	}
	else if(y == "201"){
        window.open("52' SEA RAY.html", "_self")
	}
	else if(y == "202"){
        window.open("55' AZIMUT.html", "_self")
	}
	else if(y == "301"){
        window.open("65' MONTE CARLO.html", "_self")
	}
	else if(y == "302"){
        window.open("69' AICON.html", "_self")
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
			renew = 12;
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

function deldays2() {
    var x = document.getElementById("days");
    var ul = document.getElementById("ul");
    var len = ul.children.length;
    var y;
    for (y = 0; y < 32; y++) {
        x.remove(x.selectedIndex);
    }
    for (y = 0; y < len; y++) {
        ul.removeChild(ul.children[0])
    }
}

function prev() {
    var prev = document.getElementById("li").innerHTML;
    var m = prev.split(" ", 2);
    var months = m[0]; //Assi-gn the month
    var timestamp = new Date();
    var currentmonth = timestamp.getMonth();
    var yr = m[1];
    var currentyear = timestamp.getFullYear();
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
    deldays2();
    for (i = 13; i > 0; i--) {
        if (months == month[0]) {
            currentyear = yr - 1;
            months = month[i - 2];
            document.getElementById("date").value = months + " " + currentyear;
            break;
        } else if (month[i] == month[currentmonth + 1] && yr == currentyear) {
            currentyear = yr;
            months = month[i - 1];
            document.getElementById("date").value = months + " " + currentyear;
            break;
        } else if (months == month[i] && yr > currentyear) {
            currentyear = yr;
            months = month[i - 1];
            document.getElementById("date").value = months + " " + currentyear;
            break;
        } else if (months == month[i]) {
            months = month[i - 1 + renew];
            document.getElementById("date").value = months + " " + currentyear;
            break;
        }
    }
    document.getElementById("li").innerHTML = months + " " + currentyear;
    calendar2(months, currentyear);
}

function next() {
    var next = document.getElementById("li").innerHTML;
    var m = next.split(" ", 2);
    var months = m[0]; //Assign the month
    var timestamp = new Date();
    var currentmonth = timestamp.getMonth();
    var yr = m[1];
	var currentyear = timestamp.getFullYear();
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
	deldays2();
	for (i = 0; i < 13; i++) {
	    if (months == month[11] && i >= 11) {
	        renew = 12;
	        currentyear = currentyear + 1;
	        months = month[i + 1 - renew];
	        //del();
	        document.getElementById("date").value = months + " " + currentyear;
	        break;
	    } else if (month[i] == month[currentmonth - 1] && yr > currentyear) {
	        currentyear = yr;
	        months = month[i + 1 - renew];
	        //del();
	        document.getElementById("date").value = months + " " + currentyear;
	        break;
	    } else if (months == month[i] && yr > currentyear) {
	        currentyear = yr;
	        months = month[i + 1 - renew];
	        //del();
	        document.getElementById("date").value = months + " " + currentyear;
	        break;
	    } else if (months == month[i]) {
	        months = month[i + 1 - renew];
	        //del();
	        document.getElementById("date").value = months + " " + currentyear;
	        break;
	    }
	}
	document.getElementById("li").innerHTML = months + " " + currentyear;
	calendar2(months, currentyear);
}

function calendar2(months, yr) {
    var count;
    var x = document.getElementById("budget").value;
    if (months == "April" || months == "June" || months == "September" || months == "November") {
        day = 31; //Months with 30 days
    } else if (months == "February" && yr % 4 == 0) {
        day = 30;
    } else if (months == "February" && yr % 4 != 0) {
        day = 29;
    } else if (months == "January" || months == "March" || months == "May" || months == "July" || months == "August" || months == "October" || months == "December") {
        day = 32; //Months with 31 days
    }
    for (count = 1; count < day; count++) {
        var ul = document.getElementById("ul");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(count + "\n" + x));
        ul.appendChild(li);
    }
    for (count = 1; count < day; count++) {
        var y = document.getElementsByTagName("LI")[count];
        y.id = count; //Assign id to li attribute based on the day
    }
    for (count = 1; count < day; count++) {
        var select = document.getElementById("days");
        var option = document.createElement("option");
        option.text = count;
        select.add(option);
    }
    assigndays();
}

function deldays() {
    var x = document.getElementById("days");
    var ul = document.getElementById("ul");
    var len = ul.children.length;
    var y;
    for (y = 0; y < 32;y++){
        x.remove(x.selectedIndex);
    }
    for (y = 0; y < len; y++){
        ul.removeChild(ul.children[0])
    }
    days();
}

function days() {
    var count;
    var mths = document.getElementById("date").value; //Seperate the month and year
    var m = mths.split(" ", 2);
    var months = m[0]; //Assign the month
    var yr = m[1]; //Assign the year
    if (months == "April" || months == "June" || months == "September" || months == "November") {
        day = 31; //Months with 30 days
    } else if (months == "February" && yr % 4 == 0) {
        day = 30;
    } else if (months == "February" && yr % 4 != 0) {
        day = 29;
    } else if (months == "January" || months == "March" || months == "May" || months == "July" || months == "August" || months == "October" || months == "December") {
        day = 32; //Months with 31 days
    }
    for (count = 1; count < day; count++) {
        var select = document.getElementById("days");
        var option = document.createElement("option");
        option.text = count;
        select.add(option);
    }
    calendar();
}

function calendar() {
    var count;
    var x = document.getElementById("budget").value;
    var mths = document.getElementById("date").value; //Seperate the month and year
    var m = mths.split(" ", 2);
    var months = m[0]; //Assign the month
    var yr = m[1]; //Assign the year
    if (months == "April" || months == "June" || months == "September" || months == "November") {
        day = 31; //Months with 30 days
    } else if (months == "February" && yr % 4 == 0) {
        day = 30;
    } else if (months == "February" && yr % 4 != 0) {
        day = 29;
    } else if (months == "January" || months == "March" || months == "May" || months == "July" || months == "August" || months == "October" || months == "December") {
        day = 32; //Months with 31 days
    }
    document.getElementById("li").innerHTML = mths;
    for (count = 1; count < day; count++) {
        var ul = document.getElementById("ul");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(count + "\n" + x));
        ul.appendChild(li);
    }
    for (count = 1; count < day; count++) {
        var y = document.getElementsByTagName("LI")[count];
        y.id = count; //Assign id to li attribute based on the day
    }
    assigndays();
}

function assigndays() {
    document.getElementsByTagName("LI")[1].onclick = function () { changeday(1) }
    document.getElementsByTagName("LI")[2].onclick = function () { changeday(2) }
    document.getElementsByTagName("LI")[3].onclick = function () { changeday(3) }
    document.getElementsByTagName("LI")[4].onclick = function () { changeday(4) }
    document.getElementsByTagName("LI")[5].onclick = function () { changeday(5) }
    document.getElementsByTagName("LI")[6].onclick = function () { changeday(6) }
    document.getElementsByTagName("LI")[7].onclick = function () { changeday(7) }
    document.getElementsByTagName("LI")[8].onclick = function () { changeday(8) }
    document.getElementsByTagName("LI")[9].onclick = function () { changeday(9) }
    document.getElementsByTagName("LI")[10].onclick = function () { changeday(10) }
    document.getElementsByTagName("LI")[11].onclick = function () { changeday(11) }
    document.getElementsByTagName("LI")[12].onclick = function () { changeday(12) }
    document.getElementsByTagName("LI")[13].onclick = function () { changeday(13) }
    document.getElementsByTagName("LI")[14].onclick = function () { changeday(14) }
    document.getElementsByTagName("LI")[15].onclick = function () { changeday(15) }
    document.getElementsByTagName("LI")[16].onclick = function () { changeday(16) }
    document.getElementsByTagName("LI")[17].onclick = function () { changeday(17) }
    document.getElementsByTagName("LI")[18].onclick = function () { changeday(18) }
    document.getElementsByTagName("LI")[19].onclick = function () { changeday(19) }
    document.getElementsByTagName("LI")[20].onclick = function () { changeday(20) }
    document.getElementsByTagName("LI")[21].onclick = function () { changeday(21) }
    document.getElementsByTagName("LI")[22].onclick = function () { changeday(22) }
    document.getElementsByTagName("LI")[23].onclick = function () { changeday(23) }
    document.getElementsByTagName("LI")[24].onclick = function () { changeday(24) }
    document.getElementsByTagName("LI")[25].onclick = function () { changeday(25) }
    document.getElementsByTagName("LI")[26].onclick = function () { changeday(26) }
    document.getElementsByTagName("LI")[27].onclick = function () { changeday(27) }
    document.getElementsByTagName("LI")[28].onclick = function () { changeday(28) }
    document.getElementsByTagName("LI")[29].onclick = function () { changeday(29) }
    document.getElementsByTagName("LI")[30].onclick = function () { changeday(30) }
    document.getElementsByTagName("LI")[31].onclick = function () { changeday(31) }
}

function changeday(day) {
    var days = document.getElementsByTagName("LI");
    document.getElementById("days").selectedIndex = day - 1;
    openForm();
}

function delcalendar() {
    var ul = document.getElementById("ul");
    var len = ul.children.length;
    var y;
    for (y = 0; y < len; y++) {
        ul.removeChild(ul.children[0])
    }
    calendar();
}

function boats() {
    var yacht = new Array();
    yacht[0] = "40' VANDUTCH BLACK";
    yacht[1] = "43' MARQUIS";
    yacht[2] = "52' SEA RAY";
    yacht[3] = "55' AZIMUT";
    yacht[4] = "65' MONTE CARLO";
    yacht[5] = "69' AICON";
    var i;
    for (i = 0; i < 6; i++) {
        var boat = yacht[i];
        var select = document.getElementById("boats");
        var option = document.createElement("option");
        option.text = boat;
        select.add(option);
    }
}

function passengers() {
    var count;
    var boat = document.getElementById("boats").value;
    if (boat == "65' MONTE CARLO" || boat == "69' AICON") {
        num = 14;
    } else if (boat == "55' AZIMUT" || boat == "52' SEA RAY" || boat == "43' MARQUIS") {
        num = 13;
    } else if (boat == "40' VANDUTCH BLACK") {
        num = 11;
    }
    for (count = 1; count < num; count++) {
        var select = document.getElementById("nums");
        var option = document.createElement("option");
        option.text = count;
        select.add(option);
    }
}

function delnums() {
    var x = document.getElementById("nums");
    var y;
    for (y = 0; y < 13; y++) {
        x.remove(x.selectedIndex);
    }
    passengers();
}

function delprice() {
    var x = document.getElementById("budget");
    x.remove(x.selectedIndex);
    quote();
}

function quote() {
    var boat = document.getElementById("boats").value;
    var time = document.getElementById("hours").value;
    var months = document.getElementById("date").value.split(" ", 2); //Seperate the month and year
    var months = months[0]; //Assign the month
    var quote = 0;
    if (boat == "40' VANDUTCH BLACK" || boat == "43' MARQUIS") {
        quote = 2200;
    } else if (boat == "55' AZIMUT" || boat == "52' SEA RAY") {
        quote = 2800;
    } else if (boat == "65' MONTE CARLO") {
        quote = 5000;
    } else if (boat == "69' AICON") {
        quote = 5100;
    }
    if (months == "March" || months == "April" || months == "May" || months == "June" || months == "July" || months == "August") {
        quote = quote + 2500;
    } else if (months == "January" || months == "February" || months == "September" || months == "October" || months == "November" || months == "December") {
        quote = quote + 1000;
    }
    if (time == "4") {
        quote = quote * 2;
    } else if (time == "8") {
        quote = quote * 4;
    }
    var select = document.getElementById("budget");
    var option = document.createElement("option");
    option.text = "$" + quote + ".00";
    select.add(option);
}

function submit() {
    closeForm();
    document.getElementById("emailform").style.display = "block";
}

function resetForm() {
    document.getElementById("emailform").style.display = "none";
}

function message() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("@").value;
    var boat = document.getElementById("boats").value;
    var nums = document.getElementById("nums").value;
    var dest = document.getElementById("destination").value;
    var months = document.getElementById("date").value.split(" ", 2); //Seperate the month and year
    var mth = months[0]; //Assign the month
    var yr = months[1]; //Assign the year
    var dy = document.getElementById("days").value;
    var time = document.getElementById("hours").value;
    var price = document.getElementById("budget").value;
    resetForm();
    alert(
        "To " + mail + "\n" +
        "Dear " + name + ",\n" +
        "Your request for a " + boat +
        " with " + nums +
        " passenger(s) to " + dest +
        " on " + mth + " " + dy + " " + yr +
        " will cost " + price + ".\n\n" +
        "Sincerly,\n" +
        "Yacht Charter Fleet"
        );
}

function reminder() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("@").value;
    var boat = document.getElementById("boats").value;
    var nums = document.getElementById("nums").value;
    var dest = document.getElementById("destination").value;
    var months = document.getElementById("date").value.split(" ", 2); //Seperate the month and year
    var mth = months[0]; //Assign the month
    var yr = months[1]; //Assign the year
    var dy = document.getElementById("days").value;
    var time = document.getElementById("hours").value;
    var price = document.getElementById("budget").value;
    alert(
        "To " + mail + "\n" +
        "Dear " + name + ",\n" +
        "This is a reminder about your request for a " + boat +
        " with " + nums +
        " passenger(s) to " + dest +
        " on " + mth + " " + dy + " " + yr +
        " will cost " + price + ".\n\n" +
        "Sincerly,\n" +
        "Yacht Charter Fleet"
        );
}

function contact() {
    var mail = document.getElementById("@").value;
    var msg = document.getElementById("msg").value;
    alert(
        "To " + mail + "\n" +
        msg
        );
}