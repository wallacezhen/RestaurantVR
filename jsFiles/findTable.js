
$(document).ready(function () { 
	"use strict";
		console.log("finding tabledafds");

	$("#findTable").click(function(){

		console.log("asdf");
		var date = $("#datePicker").datepicker().val();
		var time = $("#time").val();
		var numPeople = $("#numPeople").val();
		var restaurant = $("#restaurant").val();

		console.log("finding table");
		console.log(`date: ${date}`);
		console.log(`time: ${time}`);
		console.log(`numPeople: ${numPeople}`);
		console.log(`restaurant: ${restaurant}`);
	});


});