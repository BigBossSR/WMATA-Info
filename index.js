var userLocation =function (callback) {
	console.log("hi twice")
	navigator.geolocation.getCurrentPosition(laterFunction)

	function laterFunction (position){
		console("Hi a third")
		callback(position.coords)
	}
}

var olderLocation = function() {
		navigator.geolocation.getCurrentPosition(function(position){
		var userLat = position.coords.latitude
		var userLong = position.coords.longitude
		console.log(userLong)
		console.log("anyone there?")
	})
}


function printCoords (data) {
	console.log(data)
	console.log("hi again")
}

$(document).on("ready", function(){
console.log("hi once")

userLocation()

olderLocation()



})

