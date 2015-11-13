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
