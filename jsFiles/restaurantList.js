$(document).ready(function(){
	//"use strict";

	console.log("creating restaurant list");
	
	var restaurantContainer = $("#restaurantList");
	var restaurant = $(restaurantContainer).children().first();

	console.log(restaurant);

	for (var i = 0; i<3; i++){
		$(restaurant).clone().appendTo(restaurantContainer);
	}

});
	