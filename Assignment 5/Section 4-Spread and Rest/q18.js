// Create a function named showSkills that accepts a developer's name as the first parameter and any  number of skills using a rest parameter. Display the name and skills.

function showSkill(name, ...skills) {
    console.log(name);
    console.log(skills);    
}


showSkill("Rahul","HTML","CSS","JavaScripts")