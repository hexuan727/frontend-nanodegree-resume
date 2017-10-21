var bio = {
  "name": "Harry He",
  "role": "Front-end developer",
  "contacts": {
    "mobile": "5179190028",
    "email": "hexuan@ufl.edu",
    "github": "hexuan727",
    "location": "Gainesville",
  },
  "welcomeMessage": "Welcome to my personal page!",
  "skills": [
    "HTML5", "CSS3", "JavaScript"
  ],
  "biopic": "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcome);
$("#header").append(formattedSkills);

var education = {
  "schools":
  [
    {
      "name":"University of Florida",
      "city": "Gainesville",
      "degree": "Masters",
      "majors": ["ECE"],
      "dates": 2016
    },
    {
      "name":"Michigan State University",
      "city": "East Lansing",
      "degree": "Bachelors",
      "majors": ["ECE"],
      "dates": 2011
    }
  ],
  "onlineCourse":
  [
    {
      "title": "Front-end development",
      "school": "Udacity",
      "dates": 2017,
      "url": "https://classroom.udacity.com/nanodegrees/nd001-cn-basic/parts/8466cc34-4001-4ac3-a908-01729473d5e2"
    }
  ]
};

var work = {
  "jobs":
  [
  	{
  		"employer": "Planet Express",
  		"title": "Delivery Boy",
  		"dates": "January 3000 - future",
  		"description": "xxxxxxxxxxxxxxx"
  	},
  	{
  		"employer": "Planet Express",
  		"title": "Delivery Boy",
  		"dates": "January 3000 - future",
  		"description": "xxxxxxxxxxxxxxx"
  	}
  ]
};

var projects = {
  "projects":
  [
    {
      "title": "Sample Project 1",
      "dates": "2014",
      "description": "saasfsfassdfdsfdscsdvdsvfdbgfbgfh",
      "images": [
      "http://...........",
      "http://..........."
    ]
    }
  ]
};
