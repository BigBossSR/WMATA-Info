	var dummyStationData = [
	{
	code: "A01",
    name: "Metro Center",
    lat: 38.8983144732,
    long: -77.0280779971,
    address: {
        "City": "Washington",
        "State": "DC",
        "Street": "607 13th St. NW",
        "Zip": "20005"
    	},
    NextTrain: [	
		    {
				destinationName: "Silver Spring",
				line: "RD",
				locationCode: "A01",
				locationName: "Metro Center",
				min: "4",
			},

			{
				destinationName: "Vienna",
				line: "OR",
				locationCode: "A01",
				locationName: "Metro Center",
				min: "9",
			},

			{
				destinationName: "Largo Town Center",
				line: "SV",
				locationCode: "A01",
				locationName: "Metro Center",
				min: "14",
			},
		]
    },



    {
	code: "A03",
	name: "Farragut North",
	lat: 38.9033231,
	long: -77.0398061,
	address: {
		"City": "Washington",
		"State": "DC",
		"Street": "1021 Connecticut",
		"Zip": "20005"
	},
	NextTrain: [{
		destinationName: "Shady Grove",
		line: "RD",
		locationCode: "A03",
		locationName: "Farragut North",
		min: "10",
		}],
    },



    {
	code: "A05",
	name: "Delancy St",
	lat: 40.718611,
	long: -73.988114,
	address: {
		"City": "New York",
		"State": "NY",
		"Street": "110 Delancy St",
		"Zip": "10002"
    	},
    NextTrain: 	{
		destinationName: "Coney Island",
		line: "F",
		locationCode: "A05",
		locationName: "Delancy St",
		min: "3",
		},	
    },

    {
	code: "A02",
	name: "Farragut West",
	lat: 38.9022481,
	long: -77.0399053,
	address: {
		"City": "Washington",
		"State": "DC",
		"Street": "1700 I St. NW",
		"Zip": "20005"
		},
    NextTrain: 
    	[
	    	{
			destinationName: "New Carrolton",
			line: "OR",
			locationCode: "A02",
			locationName: "Farragut West",
			min: "1",
			},

			{
			destinationName: "Wiehle-Reston East",
			line: "SV",
			locationCode: "A02",
			locationName: "Farragut West",
			min: "21",
			},

			{
			destinationName: "Franconia-Springfield",
			line: "BL",
			locationCode: "A02",
			locationName: "Farragut West",
			min: "6",
			},
    	]
    },

    {
	code: "A06",
	name: "Orient Express",
	lat: 41.0053215,
	long: 19.4060088,
	address: {
		"City": "Istanbul",
		"State": "Turkey",
		"Street": "101 Turk Drive",
		"Zip": "12345"
    	},
    NextTrain: [
	    	{
			destinationName: "Japan",
			line: "BB",
			locationCode: "A06",
			locationName: "Orient Express",
			min: "100",
			},

			{
			destinationName: "Budapest",
			line: "SR",
			locationCode: "A06",
			locationName: "Orient Express",
			min: "73",
			},

    	]
    },

    {
	code: "A04",
	name: "Dupont Circle",
	lat: 38.9101024,
	long: -77.0446448,
	address: {
		"City": "Washington",
		"State": "DC",
		"Street": "1620 Connecticut",
		"Zip": "20005"
	},
	NextTrain: [
		{
		destinationName: "Glenmont",
		line: "RD",
		locationCode: "A04",
		locationName: "Dupont Circle",
		min: "1",
		},	

		{
		destinationName: "Shady Grove",
		line: "RD",
		locationCode: "A04",
		locationName: "Dupont Circle",
		min: "5",
		},	

	]
},


]











var dummyTrainData = [
	{
		destinationName: "Silver Spring",
		line: "RD",
		locationCode: "A01",
		locationName: "Metro Center",
		min: "4",
	},

	{
		destinationName: "Vienna",
		line: "OR",
		locationCode: "A01",
		locationName: "Metro Center",
		min: "9",
	},

		{
		destinationName: "Largo Town Center",
		line: "SV",
		locationCode: "A01",
		locationName: "Metro Center",
		min: "14",
	},

	{
		destinationName: "New Carrolton",
		line: "OR",
		locationCode: "A02",
		locationName: "Farragut West",
		min: "1",
	},

	{
		destinationName: "Wiehle-Reston East",
		line: "SV",
		locationCode: "A02",
		locationName: "Farragut West",
		min: "21",
	},

	{
		destinationName: "Franconia-Springfield",
		line: "BL",
		locationCode: "A02",
		locationName: "Farragut West",
		min: "6",
	},

	{
		destinationName: "Shady Grove",
		line: "RD",
		locationCode: "A03",
		locationName: "Farragut North",
		min: "10",
	},

	{
		destinationName: "Glenmont",
		line: "RD",
		locationCode: "A04",
		locationName: "Dupont Circle",
		min: "1",
	},	

	{
		destinationName: "Shady Grove",
		line: "RD",
		locationCode: "A04",
		locationName: "Dupont Circle",
		min: "5",
	},	

	{
		destinationName: "Coney Island",
		line: "F",
		locationCode: "A05",
		locationName: "Delancy St",
		min: "3",
	},	

	{
		destinationName: "Japan",
		line: "BB",
		locationCode: "A06",
		locationName: "Orient Express",
		min: "100",
	},

	{
		destinationName: "Budapest",
		line: "SR",
		locationCode: "A06",
		locationName: "Orient Express",
		min: "73",
	},
	
]
