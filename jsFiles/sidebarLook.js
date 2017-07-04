

$(document).ready(function () { 
	"use strict";

	console.log ("changing sidebar look");

	var sideBar = $("#sideBar");
	$(sideBar).css({"backgroundColor":"white"});
	//class="active" style="font-size:20px; color:red"
	$(sideBar).children().first().children().css
	({"fontSize":"20px","color":"red"});

	$(sideBar).children().first().children().children().children().css
	({"fontSize":"18px","color":"black"});

	$(sideBar).children().first().children().children().children().children()	.css
	({"fontSize":"18px","color":"gray"});


});