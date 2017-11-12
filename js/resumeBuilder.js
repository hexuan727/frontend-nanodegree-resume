var bio = {
  "name": "Harry He",
  "role": "Front-end developer",
  "contacts": {
    "mobile": "5179190028",
    "email": "hexuan@ufl.edu",
    "github": "hexuan727",
    "location": "Gainesville"
  },
  "welcomeMessage": "Welcome to my personal page!",
  "skills": [
    "HTML5", "CSS3", "JavaScript"
  ],
  "biopic": "images/fry.jpg"
}

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLocation);

  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPicture);
  $("#header").append(formattedWelcome);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
  }
}

bio.display();

var work = {
  "jobs":
  [
  	{
  		"employer": "Planet Express",
  		"title": "Delivery Boy",
  		"dates": "January 3000 - future",
      "location": "Shanghai",
  		"description": "xxxxxxxxxxxxxxx"
  	},
    {
  		"employer": "Planet Express",
  		"title": "Delivery Boy",
  		"dates": "January 3000 - future",
      "location": "Shanghai",
  		"description": "xxxxxxxxxxxxxxx"
  	}
  ]
}

work.display = function() {
  for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

work.display();

var project = {
  "projects":
  [
    {
      "title": "Sample Project 1",
      "dates": "2017",
      "description": "XXXXXXXXXXXXXXXXXX",
      "images": ["images/bang.png"]
    },
    {
      "title": "Sample Project 2",
      "dates": "2017",
      "description": "XXXXXXXXXXXXXXXXXX",
      "images": ["images/zhixi.png"]
    }
  ]
}

project.display = function() {
  for (var i = 0; i < project.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[i].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", project.projects[i].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[i].description);
    $(".project-entry:last").append(formattedDescription);

    if(project.projects[i].images.length > 0) {
      for (var j=0; j < project.projects[i].images.length; j++) {
        var formattedImages = HTMLprojectImage.replace("%data%", project.projects[i].images[j]);
        $(".project-entry:last").append(formattedImages);
      }
    }
  }
}

project.display();

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
}

education.display = function() {

}

education.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
