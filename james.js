var userLat
var userLong
var bikeBank
var metroBank

templates = {}

var userLocation =function (callback) {
	navigator.geolocation.getCurrentPosition(laterFunction)

	function laterFunction (position){
		userLat = position.coords.latitude
		userLong = position.coords.longitude
		callback(position.coords)
	}
}

function stationCall (callback) {
	
	$.ajax({
		url: "https://iron-rail.herokuapp.com/v1?latitude="+userLat+"&longitude="+userLong,
		method: "get",
		data: "{rad:200}",
		success: function(data) {

			metroBank = _.filter(data.locations, function(item){
				return item.type == "metro"
			})

			bikeBank = _.filter(data.locations, function(item){
				return item.type == "bikeshare"
			})

			callback(data)
		}
	})
	

	//callback(dummyStationData)
}

function bikeCall (callback) {
	/*$.ajax({
		url: "/bikeshare_data.js",
		method: "get",
		success: function(data) {
			callback(data)
		}		
	})*/

	callback(bikeStations)
}


/*
function renderStations (dataArray, callback) {

	var location = dataArray[0]
	var stationList = dataArray[1]

	stationList = _.sortBy(stationList, function(station){
		var latDelta = Math.pow(location.latitude - station.lat, 2)
		var longDelta = Math.pow(location.longitude - station.long, 2)
		return latDelta + longDelta
	})

	callback(stationList)
}
*/

function listTrains (array) {
	array = _.first(array, 4)
	$("#metro-location").text("")
	_.each(array, function(station){

		var $htmlString = templates.metroStations(station)
		$("#metro-location").append($htmlString)

		var soonestTrain = _.sortBy(station.trains, function(train){
			return parseInt(train.min)
		})

		_.each(soonestTrain, function(train){
			if (parseInt(train.cars) > 0) { 
				var $htmlString = templates.metroStations(train)
				$("#metro-location").append($htmlString)
			}
		})
	})
}

function listBikes (array) {
	bikeList = _.first(array, 10)
	bikeList = _.sortBy(bikeList, function(station){
		return 0 - station.num_bikes
	})
	$("#bikes-location").text("")
	_.each(bikeList, function(station){
		if (station.num_bikes == 0) {
			station.score = "none"
		}

		if (0 < station.num_bikes < 5) {
			station.score = "low"
		}

		if (6 < station.num_bikes < 10) {
			station.score = "med"
		}

		if (station.num_bikes > 10) {
			station.score = "high"
		}

		var $htmlString = templates.bikes(station)
		$("#bikes-location").append($htmlString)
	})
}




$(document).on("ready", function(){

/*	userLocation(function(location){
		stationCall(function(stationList){
			renderStations([location, stationList])
			//getTrains(stationList, trainList)
		})
	})
*/
	templates.metroStations = Handlebars.compile($("#metroTemplate").html())

	templates.bikes = Handlebars.compile($("#bikeTemplate").html())
	
	/*
	var theProcess = function() {
		userLocation(function(location){
			stationCall(function(stationList){
				renderStations([location, stationList], listTrains)
			})
			bikeCall(function(stationList){
				renderStations([location, stationList], listBikes)
			})
		})
	}
	*/

	var theProcess = function() {
		userLocation(function(location){
			stationCall(function(location) {
				listTrains(metroBank)
				listBikes(bikeBank)
				console.log("tick")
			})
		})
	}

	setInterval(theProcess(), 15000)

	//setInterval(theProcess, 45000)


})




/* JUNK DRAWER //


var olderLocation = function() {
		navigator.geolocation.getCurrentPosition(function(position){
		var userLat = position.coords.latitude
		var userLong = position.coords.longitude

	})
}
function printCoords (data) {

}
function printStations (data) {

}

//async option - if Train Data is in a different database
var filteredList

function asyncTrains (dataFromTrainCall) {
	_.each(filteredList, function(listItem){
		code = filteredList.code;
		_.each(dataFromTrainCall, function(train){
			if (train.locationCode == code) {
				console.log(train)
			}
		})
	})
}

function getTrainData (callback) {

	callback(incomingTrains)
}

//sure ain't working
	userLocation(function(location){
		stationCall(function(stationList){
			renderStations(function(array){
				getTrainData(function(trainList){
					asyncTrains(dataFromTrainCall)
				})
			})
			//getTrains(stationList, trainList)
		})
	})
*/
