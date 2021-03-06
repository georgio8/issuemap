/* Default configuration for Issue Map
 * settings for London Cycling Campaign
 * equivalent to URL parameters:
http://maps.camdencyclists.org.uk/issuemap/issuemap_test.html?title=LCC-related%20consultations%20on%20Cyclescape&center=51.51,-0.12&zoom=13&bbox=-0.5534,51.29,0.2565,51.6936&categories=TfL:tfl* /camden/islington/Richmond:rcc/wandsworth/westminster

 * 12 Jan 2016
 */

var config = {
	"mapTitle": "LCC – related consultations on Cyclescape",
	"mapCenter": [51.51, -0.12],
	"bbox": "-0.5534,51.2702,0.2565,51.6936",
	"info": "./docs/info.html",
	"mapZoom": "13",
	"baseLayer": "MapBox",
	"staleMargin": 365, // no. of days without posts
	"expiredMargin": 30, // extra days beyond expiry date
	"showExpired": false,
	"showStale": false,
	"firstMenu": {
		"name": "Mayors Vision",
		"specialTag": 
			{
				"name": "Consultations",
				"tag": "\"consultation\"",
				"otherName": "Other Discussions",
				"specialOnOff":"on",
				"otherOnOff": "on"
			},
		"selectors": [  
		   {  
			  "tags":"\"cycle-superhighway\"",
			  "menuItem":"Superhighways",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"better-junction\"",
			  "menuItem":"Better Junctions",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"mini-holland\"",
			  "menuItem":"Mini-Hollands",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"quietway\"",
			  "menuItem":"Quietways",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"car-free-places\"",
			  "menuItem":"Car Free Places",
			  "onOff":"on"
		   },
		],
	},
	"secondMenu": {
		"name": "Boroughs",
		"specialTag": 
			{
				"name": "Consultations",
				"tag": "\"consultation\"",
				"otherName": "Other Issues",
				"specialOnOff":"on",
			},
		"selectors": [  
		   {  
			  "tags":"\"tfl\"",
			  "menuItem":"TfL",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"bromley\"",
			  "menuItem":"Bromley",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"camden\"",
			  "menuItem":"Camden",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"city-of-london\"",
			  "menuItem":"City of London",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"croydon\"",
			  "menuItem":"Croydon",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"ealing\"",
			  "menuItem":"Ealing",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"enfield\"",
			  "menuItem":"Enfield",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"hackney\"",
			  "menuItem":"Hackney",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"hounslow\"",
			  "menuItem":"Hounslow",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"kensington-and-chelsea\"",
			  "menuItem":"Ken & Chelsea",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"lambeth\"",
			  "menuItem":"Lambeth",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"newham\"",
			  "menuItem":"Newham",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"islington\"",
			  "menuItem":"Islington",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"richmond\"",
			  "menuItem":"Richmond",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"southwark\"",
			  "menuItem":"Southwark",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"tower-hamlets\"",
			  "menuItem":"Tower Hamlets",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"waltham-forest\"",
			  "menuItem":"Waltham Forest",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"wandsworth\"",
			  "menuItem":"Wandsworth",
			  "onOff":"on"
		   },
		   {  
			  "tags":"\"westminster\"",
			  "menuItem":"Westminster",
			  "onOff":"on"
		   },
		]
	}
}