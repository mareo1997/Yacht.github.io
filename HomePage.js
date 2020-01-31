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

function myDEST(){
	window.open("Destination.html", "_self")
}

function myORDER(){
	window.open("Options.html", "_self")
}

function mySingle(){
	window.open("Single.html", "_self")
}

var destandplaces = {};
destandplaces['dest1'] = ['Belize'];
destandplaces['dest2'] = ['Jamaica'];
destandplaces['dest3'] = ['Thailand'];
destandplaces['dest4'] = ['Sea'];

function DESTCHANGE(){
	var destinationList = document.getElementById("destination");
	var placeList = document.getElementById("place");
	var selectdestination = destinationList.options[destinationList.selectedIndex].value;
	while (placeList.options.length) {
		placeList.remove(0);
	}
	var dest = destandplaces[selectdestination];
	if (dest) {
		var i;
	    for (i = 0; i < dest.length; i++) {
	      var destination = new Option(dest[i], i);
	      placeList.options.add(destination);
	    }
	}
}

function myMulti(){
	window.open("Multi.html", "_self")
}

function validateForm(){
	window.open("Login.html")
}

function myFAQ(){
	window.open("FAQ.html", "_self")
}

function myBackgroundimg(){
	document.body.style.backgroundImage = "url('https://www.fraseryachts.com/uploads/image/yachts/queen-anne/Gentech-yachts_yacht_" +
			"for_sale_Queen-anne_12467.jpg')";
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
	
}

function myMenu(){
	document.getElementById("myDropDown").classList.toggle("show");
}

window.onclick = function(e) {
	  if (!e.target.matches('.dropbtn')) {
	  var myDropdown = document.getElementById("myDropdown");
	    if (myDropdown.classList.contains('show')) {
	      myDropdown.classList.remove('show');
	    }
	  }
}

function myAmericas(){
	window.open("Americas.html", "_self")
}

function more1(){
	var w = document.getElementById("americas");
	w.innerHTML = 
"The Americas include an array of beautiful charter destinations. Sail the out-islands of the Bahamas and discover a sailor's " +
"paradise in the uncrowded Abacos or explore the 120-mile long archipelago of the Exumas, where you can visit the world-famous " +
"swimming pigs. Or, head to exotic Belize, which offers awe-inspiring natural wonders and waters that beckon for adventure.<br><br>" +

"The charter passages of the Americas provide visitors with both serene jaunts and vibrant city attractions. Belize's ideal location " +
"in Central America allows visitors to bask in warm temperatures accompanied by coastal island breezes. Feast your eyes on lush " +
"exotic scenery, explore ancient Mayan ruins, and discover natural underwater beauty at its finest while snorkeling or diving along " +
"the second largest barrier reef in the world.<br><br>" +

"The ''off-the-beaten-path'' Abacos and Exumas deliver a Bahamas vacation unlike any other, featuring uncrowded beaches, laid-back " +
"vibes, and ultimate tranquility on the water. Cruise throughout isolated cays and magnificent coral reefs, where civilization feels " +
"far away but paradise feels like the norm.";
}

function more2(){
	var x = document.getElementById("caribbean");
	    x.innerHTML = 
"Cruise the calm waters of the Caribbean, where the British Virgin Islands grant easy, line-of-sight navigation and trade winds keep " +
"your course steady. Follow the sun to St. Lucia and drop anchor to take in the warm glow of the sunset. Find out how Grenada lives " +
"up to its nickname ''The Spice Island of the Caribbean''. Spend your days shopping on the beautiful streets of St. Thomas. Immerse " +
"yourself in the unspoiled paradise of Puerto Rico's Spanish Virgin Islands. Or, rekindle your love for open water adventure in " +
"Antigua's first-rate sailing wonderland.<br><br>" +

"Discover the blissful white sands of the world-class Caribbean islands from the deck of your private state-of-the-art yacht. Look " +
"out over the jade-colored sea and breath in the rejuvenating air fringed with the sweet aroma distinct to these outlying islands. " +
"Each charter day waits with new surprises of hidden-away eateries, sunken caves, and rich history.<br><br>"+

"Sailors with all levels of expertise will find accommodating waterways that make for some of the most enjoyable sailing experiences. " +
"Cruise through protected anchorages and into full-service marinas where your voyage is king. The ever-enchanting Caribbean opens a " +
"world of possibilities, both onshore and off, with hidden coves, warm island culture, beachside dining, and unrivaled snorkeling & " +
"diving conditions.";
}

function more3(){
	var y = document.getElementById("exotic");
    y.innerHTML = 
"Choose your cruising wonderland, each with its own magical allure, in some of the world's most exotic sailing destinations. The Far " +
"East beckons with Thailand's sparkling beachfront resorts and skyscraping limestone spires rising from an emerald sea. The South " +
"Pacific awaits with its breathtaking collage of palm-fringed beaches and colorful coral reefs-blended with the warmest of " +
"hospitality. While the Seychelles offer a unique paradise of otherworldly, secluded isles, giant tortoises and rare sea birds. " +
"Whatever your choice, these far-off islands will tempt you to return again and again.<br><br>"+

"Nowhere else has a tropical destination been so sought after than the waters of the South Pacific. While exploring this sprawling " +
"area of diverse islands, you will find yourself drawn to Tahiti's pristine diving conditions, Bora Bora's famous lagoon, and the " +
"beautiful temples of Tonga.<br><br>" +

"The Indian Ocean offers a bounty of breathtaking sights, but none quite like The Seychelles, a group of granite and coral islands " +
"off the coast of East Africa. Cruise through azure waters to experience an untouched landscape filled with vibrant flora, exotic " +
"wildlife and geological formations like the Aldabra, the world's largest raised coral atoll.<br><br>" +

"A Thailand yacht charter is a voyage to a tropical wonderland, where stone pinnacles rise from an emerald-colored sea, and strange " +
"open-air caves await exploration. Experience the exotic shores aboard a kayak or stand up paddle board amongst colorful coral and " +
"vibrant fish. Or, head inland to try the acclaimed local cuisine.<br><br>"+

"Come aboard and escape the ordinary. Something extraordinary awaits in any of these premier exotic destinations."
}

function more4(){
	var z = document.getElementById("exotic");
    z.innerHTML = 
"Immerse yourself in scenic coastlines and storied histories on a yacht charter in the dazzling Mediterranean. Begin an Italian " +
"adventure by casting off from the colorful harbor of Procida, a short trip from bustling Pozzuoli. Revel in the culture, cuisine, " +
"and secluded anchorages that abound as you cruise through the Aegean Sea. Or, explore the many timeless treasures nestled " +
"throughout the enchanting Dalmatian Islands.<br><br>" +

"With seven Mediterranean charter bases, The Moorings provides ideal sailing locations to suit every taste preference. Protected " +
"waters with short passages will lead you to quick day trips between islands while longer, open-sea crossings will help you reach " +
"remote harbors unspoiled by time. Whether you choose to plan ahead or leave it to chance, you’ll find no end to what you can do in " +
"this cruising paradise.<br><br>" +

"First time visitors and seasoned sailors will find it hard to resist Greece’s captivating appeal, but Italy’s Amalfi coast offers a " +
"culture just as rich and sights just as stunning. Split your days between sea and land while island-hopping in style along Croatia’s " +
"splendid Dalmation Coast, or indulge your senses in contemporary ports balanced by historic villages in Palma de Mallorca, Spain. No " +
"matter where you undock in the Mediterranean, dream vacations become Five-Star escapes you’ll never forget."
}

function myCaribbean(){
	window.open("Caribbean.html", "_self")
}

function myExotics(){
	window.open("Exotics.html", "_self")
}

function myMediterranean(){
	window.open("Mediterranean.html", "_self")
}

console.log(data)