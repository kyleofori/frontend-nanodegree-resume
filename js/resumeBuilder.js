/*
This is empty on purpose! Your code to build the resume will go here.
 */

var awesomeThoughts;

awesomeThoughts = "I'm Kyle Ofori and I'm AWESOME!";

console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN (that\'s weird)');
// $( "#main" ).append(funThoughts);

var formattedName, formattedRole;
formattedName = HTMLheaderName.replace("%data%", "Kyle Ofori");
formattedRole = HTMLheaderRole.replace("%data%", "Mobile Developer");

$("#header").append(formattedName);
$("#header").append(formattedRole);

var skills = ["Android", " JavaScript", " Mandarin"];
var bio = {
	"name": "Kyle Ofori",
	"role": "Junior Developer",
	"contacts": {
		"mobile": "(330) 465-2060",
		"email": "kyle.ofori@detroitlabs.com",
		"github": "kyleofori",
		"twitter": "kdpofori",
		"location": "Detroit, Michigan, U.S.A."
	},
	"biopic": "images/fry.jpg",
	"welcomeMessage": "Welcome to visiting my page!",
	"skills": skills,
	"display": function() {}
}

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

var formattedFields = [formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation,
formattedBiopic, formattedWelcomeMessage, formattedSkills];

for(var i = 0; i < formattedFields.length; i++) {
	$("#header").append(formattedFields[i]);
}

var work = {};
work.position = "Junior Developer";
work.employer = "Detroit Labs";
work.years = 1;
work.city = "Detroit";

var education = {};
education["name"] = "Princeton University";
education["years"] = "2009-2013";
education["city"] = "Princeton, New Jersey";

$("#main").append(work["position"]);
$("#main").append(education.name);

