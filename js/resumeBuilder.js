

var bio = {
	"name" : "Ben Upham",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "bcupham@gmail.com",
		"mobile" : "323-420-4999",
		"twitter" : "bcupham",
		"github" : "benclarke",
		"location" : "Los Angeles"
	},
	"welcomeMessage" : "Welcome to my fake Javascript resume!!!",
	"skills" : ["HTML", "CSS", "PHP", "Javascript"],
	"biopic" : "images/me.jpg",
};

bio.display = function () {
	//display name & role
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	//display contact info
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedContacts = formattedMobile + formattedEmail + formattedtwitter + formattedgithub + formattedlocation;
	$("#topContacts").append(formattedContacts);
	$("#footerContacts").append(formattedContacts);


// var HTMLbioPic = '<img src="%data%" class="biopic">';
// var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

	//display photo
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);

	//display welcome message
	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);

	//display skills
	if ( bio.skills.length > 0 ) {
		$("#header").append(HTMLskillsStart);
		var i;
		for ( i in bio.skills ) {
			var newSkill = bio.skills[i];
			newSkill = HTMLskills.replace("%data%", newSkill);
			$("#skills").append(newSkill);
		}
	}

}

bio.display();


//internationalize button
$("#name").after(internationalizeButton);

function inName() {
	var names = name.split(" ");
	var firstName = names[0].substr(0,1).toUpperCase() + names[0].slice(1);
	var lastName = names[1].toUpperCase();
	return firstName + " " + lastName;
}

//education
var education = {
	"schools" : [
		{
			"name" : "Udacity",
			"location" : "San Francisco",
			"degree" : "Nanodegree",
			"major" : "Front End Developer",
			"dates" : "October 2015 - present"
		},
		{
			"name" : "New York University",
			"location" : "New York",
			"degree" : "MFA",
			"major": "Screenwriting",
			"dates" : "September 2003 - May 2005"
		},
	],
	"onlineCourses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : "October 2015 - November 2015",
			"url" : "https://www.udacity.com"
		},
		{
			"title" : "Introduction to PHP",
			"school" : "Lynda.com",
			"dates" : "August 2015 - September 2015",
			"url" : "https://www.Lynda.com"
		}
	]
};

education.display = function () {
	if ( education.schools.length > 0 ) {
		for ( school in education.schools ) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%" , education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%" , education.schools[school].degree);
			var formattedLocation = HTMLschoolLocation.replace("%data%" , education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%" , education.schools[school].major);
			var formattedDates = HTMLschoolDates.replace("%data%" , education.schools[school].dates);
			$(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
		}
	}
	if ( education.onlineCourses.length > 0 ) {
		$("#education").append(HTMLonlineClasses);
		for ( course in education.onlineCourses ) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%" , education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%" , education.onlineCourses[course].school);
			var formattedURL = HTMLonlineURL.replace("%data%" , education.onlineCourses[course].url);
			var formattedDates = HTMLonlineDates.replace("%data%" , education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedURL);
		}
	}
}

education.display();


//projects
var projects = {
	"projects" : [
		{
			"title" : "Bach in the Subways",
			"dates" : "June 2015 - present",
			"description" : "New website for international music non-profit",
			"images" : [
					"images/bits1.jpg",
					"images/bits1.jpg",
			]
		},
		{
			"title" : "Tiny Pine Press",
			"dates" : "March 2013 - September 2015",
			"description" : "Rebuilt website for small business.",
			"images" : [
					"images/tpp1.jpg",
					"images/tpp1.jpg",

			]
		}
	]
};

projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%" , projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%" , projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%" , projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription);
		for (image in projects.projects[project].images) {
			var formattedImg = HTMLprojectImage.replace("%data%" , projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImg);
		}
	}
}

projects.display();


//work
var work = {
	"jobs" : [
		{
			"employer" : "Tiny Pine Press",
			"title" : "Co-Owner",
			"location" : "Los Angeles, CA",
			"dates" : "March 2013 - September 2015",
			"description" : "Co-owner, high-end stationery business."
		},
		{
			"employer" : "FIJI Water",
			"title" : "Social Media & Digital Manager",
			"location" : "Los Angeles, CA",
			"dates" : "August 2010 - March 2013",
			"description" : "Social media and digital manager for bottled water company."
		}
	]
};

work.display = function () {
	if ( work.jobs.length > 0 ) {
		for ( job in work.jobs ) {
			var formattedEmployer =  HTMLworkEmployer.replace( "%data%" , work.jobs[job].employer );
			var formattedTitle = HTMLworkTitle.replace( "%data%" , work.jobs[job].title );
			var workTitleEntry = formattedEmployer + formattedTitle;
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(workTitleEntry);
			var formattedDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);

		}
	}
}

work.display();


displayMap = function() {
	$("#mapDiv").append(googleMap);

}

displayMap();



















