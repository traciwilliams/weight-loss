/*
when a button is clicked then the display number fumction is taking the value of the button clikced


*/


window.onload = function() {
	console.log("weight loss - javascript loaded")
}

function displaynumber(x) {
	//console.log(x);
	//console.log(calform.text1.value);
	//calform.text1.value = x;
	calform.text1.value = calform.text1.value + x;
}


var holder = document.getElementById("text1");

function clearnumber() {
	holder.value = "";

}


var bmi1 = docutment.getElementById("bmi1");


function bmiCal() {

	BMI = (Weight (lbs) / (Height (in))2) x 703 (kg/m2)/(lb/in2).
}