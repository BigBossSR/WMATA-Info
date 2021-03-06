templates = {}

var userLocation =function (callback) {
	navigator.geolocation.getCurrentPosition(laterFunction)

	function laterFunction (position){
		callback(position.coords)
	}
}

function stationCall (callback) {
	/*
	$.ajax({
		url: "/stations.js",
		method: "get",
		success: function(data) {
			callback(data)
		}
	})
	*/

	callback(dummyStationData)
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

function listTrains (array) {
	array = _.first(array, 4)
	$("#metro-location").text("")
	_.each(array, function(station){

		var $htmlString = templates.metroStations(station)
		$("#metro-location").append($htmlString)

		var soonestTrain = _.sortBy(station.NextTrain, function(train){
			return parseInt(train.min)
		})

		_.each(soonestTrain, function(train){


			var $htmlString = templates.metroStations(train)
			$("#metro-location").append($htmlString)
			//console.log(train)
			//sort by time, only show 5 pers station?
			//send to handlebars for station
		})
	})
}

function listBikes (array) {
	bikeList = _.first(array, 10)
	bikeList = _.sortBy(bikeList, function(station){
		return 0 - station.ba
	})
	$("#bikes-location").text("")
	_.each(bikeList, function(station){
		if (station.ba == 0) {
			station.score = "none"
		}

		if (0 < station.ba < 4) {
			station.score = "low"
		}

		if (4 < station.ba < 10) {
			station.score = "med"
		}

		if (station.ba > 10) {
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

	theProcess()

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
