var variables = ["eye_color", "hair_color", "skin_color", "height"];

var eye_color_a = "";
var eye_color_b = "";
var hair_color_a = "";
var hair_color_b = "";
var skin_color_a = 50;
var skin_color_b = 50;
var height_a = 0;
var height_b = 0;

var eye_color_c = "ice o'";
var hair_color_c = "nice";
var skin_color_c = 0;
var height_c = 50;

var eye_result = "ice o'"
var skin_result = "icy"
var height_r = "nice o'";

function isNumber(obj) { return !isNaN(parseFloat(obj)) }



function genetics(variables) {
	var eye_color_a = prompt("What is Character A's eye color?");
	var eye_color_b = prompt("What is Character B's eye color?"); // Different has a lower chance.
	var hair_color_a = prompt("What is Character A's hair color?");
	var hair_color_b = prompt("What is Character B's hair color?"); // Other has a lower chance.
	var skin_color_a = prompt("What is Character A's skin color? Pick a number from 0 to 100. 0 is the lightest, while 100 is pitch black.");
	var skin_color_b = prompt("What is Character B's skin color? Pick a number from 0 to 100. 0 is the lightest, while 100 is pitch black."); // Averaged.
	var height_a = prompt("How tall is Character A? Pick a number from 0 to 100. 50 = 5ft tall, 44 = 4.4ft, etc.");
	var height_b = prompt("How tall is Character B? Pick a number from 0 to 100. 50 = 5ft tall, 44 = 4.4ft, etc.");


	// Now, determine the offspring's genes!
	// Chances: 40% A, 40% B, 7% R, 3% M

		function generate() {

		function generateEyes() {
			eye_color_c = Math.floor((Math.random() * 100) + 1);
		}
		function generateHair() {
			hair_color_c = Math.floor((Math.random() * 100) + 1);
		}

		generateEyes();
		generateHair();

		skin_color_c = +skin_color_a + +skin_color_b;
		skin_color_c = +skin_color_c / 2;

		height_c = +height_a + +height_b;
		height_c = +height_c / 2;
		}
	generate();

		function calculate() {

		if (eye_color_c <= 47) {
			eye_result = eye_color_a;
		} else if (eye_color_c <= 94) {
			eye_result = eye_color_b;
		} else if (eye_color_c <= 97) {
			eye_result = eye_color_a + " and " + eye_color_b;
		} else if (eye_color_c <= 100) {
			eye_result = "Mutation!";
		} else {
			eye_result = "Error";
		} // End eye color calculation

		if (hair_color_c <= 47) {
			hair_result = hair_color_a;
		} else if (hair_color_c <= 94) {
			hair_result = hair_color_b;
		} else if (hair_color_c <= 97) {
			hair_result = "white"
		} else if (hair_color_c <= 100) {
			hair_result = "Mutation!";
		} else {
			hair_result = "Error";
		}

		if (skin_color_c <= 10) {
			skin_result = "very pale";
		} else if (skin_color_c <= 20) {
			skin_result = "pale";
		} else if (skin_color_c <= 40) {
			skin_result = "tan";
		} else if (skin_color_c <= 60) {
			skin_result = "dark tan";
		} else if (skin_color_c <= 80) {
			skin_result = "dark";
		} else if (skin_color_c <= 90) {
			skin_result = "very dark";
		} else if (skin_color_c <= 100) {
			skin_result = "extremely dark";
		} else {
			skin_result = "Error";
		} // End skin tone calculation

		if (height_c <= 100 && height_c >= 0) {
			return;
		} else {
			height_c = "Error";
		}

	}

	function write() {
		document.getElementById("aEyes").innerHTML = eye_color_a;
		document.getElementById("aHair").innerHTML = hair_color_a;
		document.getElementById("aSkin").innerHTML = skin_color_a;
		document.getElementById("aHeight").innerHTML = height_a;
		document.getElementById("bEyes").innerHTML = eye_color_b;
		document.getElementById("bHair").innerHTML = hair_color_b;
		document.getElementById("bSkin").innerHTML = skin_color_b;
		document.getElementById("bHeight").innerHTML = height_b;
		document.getElementById("cEyes").innerHTML = eye_color_c;
		document.getElementById("cHair").innerHTML = hair_color_c;
		document.getElementById("cSkin").innerHTML = skin_color_c;
		document.getElementById("cHeight").innerHTML = height_c;
	}
	calculate();
	write();
	alert("The results are: " + eye_result + " eyes, " + hair_result + " hair, " + skin_result + " skin, and " + height_c + " feet tall.");
}