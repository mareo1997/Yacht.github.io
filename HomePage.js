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

function myPage(open){
	if(open == 'home'){
		window.open("Home.html", "_self")
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

function myBackgroundimg(){
	document.body.style.backgroundImage = "url('https://www.fraseryachts.com/uploads/image/yachts/queen-anne/Gentech-yachts_yacht_" +
			"for_sale_Queen-anne_12467.jpg')";
}

function readmore(more){
	if(more == 'sail'){
	document.getElementById(more).innerHTML = 
		"Our top-performing fleet of Sailing yachts features an array of classic monohulls and spacious catamarans that were " +
		"custom-designed and constructed by world-renowned yacht builders Beneteau and Robertson & Caine. With such a " +
		"state-of-the-art sailing platform at your feet, and over 20 exquisite vacation destinations in your favor, the world is " +
		"yours to discover. Whether you take command of the helm or hire a skilled skipper to navigate the journey, a Five-Star " +
		"charter experience waits aboard your own premier Sailing yacht.<br><br>" +

		"To ensure every Sailing passage with us is unique and unforgettable, all monohulls and catamarans come " +
		"fully-equipped with a sleek modern design, spacious interior, and stylish onboard accomodations. With yachts featuring as " +
		"many as 6 cabins, charter groups of up to 13 guests can enjoy a first-class sailing vacation without compromising onboard " +
		"comfort. Line of sight navigation and cutting-edge technology ensure a safe and enjoyable charter experience that is second " +
		"to none.";
	}else if(more == 'power'){
	document.getElementById(more).innerHTML = 
		"Power across the water on a well-equipped, high-performance Power catamaran. The award-winning yacht builders at Robertson & " +
		"Caine have built our spacious Power catamarans to be fuel-efficient, fast, stable and fun. Available in 14 destinations " +
		"throughtout the Caribbean, Americas, Mediterranean, Indian Ocean and Far East, our Power Charters deliver speed and comfort " +
		"so you can see more and arrive in style.<br><br>" +
			
		"A cutting-edge fleet comprised of custom-designed yachts with the most innovative features ensures an unrivaled Power charter " +
		"experience during each unique passage with us. With Power catamarans ranging in size from 37' to 51', an " +
		"unforgettable vacation awaits aboard the ultimate cruising platform that best suits the needs and preferences of your " +
		"charter party. Enjoy a spacious layout, modern amenities, and easy maneuverability while cruising from point A to point B " +
		"swiftly and comfortably.";
	}else if(more == 'crew'){
		document.getElementById(more).innerHTML= 
		"Escape ordinary vacations and come discover one of a kind onboard luxury on your own first-class yacht. Indulge in the most " +
		"blissful surroundings while an expert captain and personal gourmet chef provide a Five-Star charter experience for your " +
		"entire group. With a resort-like vacation platform at your feet, and all-inclusive leisure in your favor, unforgettable " +
		"moments on the water await.<br><br>" +
			
		"Step aboard one of our state-of-the-art yachts designed specifically for the ultimate Crewed vacation experience on the water. " +
		"Our innovative fleet features a wide range of expertly-crafted yachts that deliver impeccable performance and resort-like " +
		"accomodations. Explore some of the most exquisite destinations in the world while cutting-edge technology and stylish " +
		"comfort provide a safe and smooth vacation on the water that is impossible to forget.";
	}else if(more == 'americas'){
		document.getElementById(more).innerHTML = 
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
	}else if(more == 'caribbean'){
		document.getElementById(more).innerHTML = 
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
	}else if(more == 'exotic'){
		document.getElementById(more).innerHTML = 
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
	}else if(more == 'medi'){
		document.getElementById(more).innerHTML = 
		"Immerse yourself in scenic coastlines and storied histories on a yacht charter in the dazzling Mediterranean. Begin an Italian " +
		"adventure by casting off from the colorful harbor of Procida, a short trip from bustling Pozzuoli. Revel in the culture, cuisine, " +
		"and secluded anchorages that abound as you cruise through the Aegean Sea. Or, explore the many timeless treasures nestled " +
		"throughout the enchanting Dalmatian Islands.<br><br>" +

		"With seven Mediterranean charter bases, We provide ideal sailing locations to suit every taste preference. Protected " +
		"waters with short passages will lead you to quick day trips between islands while longer, open-sea crossings will help you reach " +
		"remote harbors unspoiled by time. Whether you choose to plan ahead or leave it to chance, you'll find no end to what you can do in " +
		"this cruising paradise.<br><br>" +

		"First time visitors and seasoned sailors will find it hard to resist Greece's captivating appeal, but Italy's Amalfi coast offers a " +
		"culture just as rich and sights just as stunning. Split your days between sea and land while island-hopping in style along Croatia's " +
		"splendid Dalmation Coast, or indulge your senses in contemporary ports balanced by historic villages in Palma de Mallorca, Spain. No " +
		"matter where you undock in the Mediterranean, dream vacations become Five-Star escapes you'll never forget."
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

function closeForm(){
	  document.getElementById("myForm").style.display = "none";
}

function image(x){
	document.getElementById(x).style.display = "block";
}

function box(y){
	if(y == "101"){
		window.open("3900-3.html", "_self")
	}
	else if(y == "102"){
		window.open("352-2.html", "_self")
	}
	else if(y == "201"){
		window.open("394PC-4.html", "_self")
	}
	else if(y == "202"){
		window.open("514PC-4.html", "_self")
	}
	else if(y == "301"){
		window.open("5800Legacy-6.html", "_self")
	}
	else if(y == "302"){
		window.open("5800Master-6.html", "_self")
	}
}

function span(z){
	document.getElementsByClassName("close")[0];
	document.getElementById(z).style.display = "none";
}

console.log(data)