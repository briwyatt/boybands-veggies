console.log("bands veggies exercise");


var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCountBands = bands.length;
var loopCountVeggies = vegetables.length;


// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping

for (i=0; i < loopCountBands; i++) {
	
	var bandEl = document.createElement("p");
	bandEl.innerHTML = bands[i];

	bandElement.appendChild(bandEl);

};

 for (i=0; i < loopCountVeggies; i++){
 	var veggieEl = document.createElement("p");
 	veggieEl.innerHTML = vegetables[i];

	veggieElement.appendChild(veggieEl);

 }