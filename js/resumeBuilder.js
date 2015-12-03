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
    "skills": [
        "Android",
        " JavaScript",
        " Mandarin"
    ]
}

if(bio.skills.length > 0) {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    };
}

var work = {
    "jobs": [
        {
            "employer": "Detroit Labs",
            "title": "Junior Developer",
            "location": "Detroit",
            "dates": "8 September 2014 - present",
            "description": "Write code, learn about Android and other mobile development frameworks"
        },
        {
            "employer": "Jalen Rose Leadership Academy",
            "title": "Algebra II Teacher",
            "location": "Detroit",
            "dates": "August 2013 - June 2014",
            "description": "Teach 100 students Algebra II concepts to prepare them to make growth on March ACT exam"
        },
        {
            "employer": "Teach For America",
            "title": "Corps Member",
            "location": "Detroit",
            "dates": "June 2013 - June 2014",
            "description": "Teach in an underserved schools in order to reduce racial achievement gap in United States"
        }

    ]
}

function displayWork() {
    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerAndTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerAndTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

$("#main").append(internationalizeButton);
function inName() {
    var splitName = bio.name.split(" ");
    console.log(splitName);
    splitLastName = splitName[1].toUpperCase();
    var newSplitName = splitName[0] + " " + splitLastName;
    console.log(newSplitName);
    bio.name = newSplitName;
    return newSplitName;
}

var projects = {
    "projects": [
        {
            "title": "DTE",
            "dates": "15 December 2014 - 11 August 2015",
            "description": "Doing the needful for an electric company",
            "images": [
                "http://thinkenergy.org/wp-content/uploads/2012/11/DTE-2013-EO-logo-e1377106854655.png",
                "https://www.newlook.dteenergy.com/wps/wcm/connect/fafbf419-58c7-43b3-9029-ec55102f57a1/DTE-white-logo-updated.png?MOD=AJPERES&CACHEID=fafbf419-58c7-43b3-9029-ec55102f57a1",
                "http://www.samuelhawley.com/forepaugh-elephant-topsy.jpg"
            ]
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "Princeton University",
            "location": "Princeton, New Jersey",
            "degree": "AB",
            "majors": [
                "Economics"
            ],
            "dates": 2013,
            "url": "http://www.princeton.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Algorithms and Data Structures",
            "school": "Stanford University",
            "date": 2015,
            "url": "http://www.coursera.org"
        }
    ]
}
