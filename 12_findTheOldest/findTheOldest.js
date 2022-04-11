const findTheOldest = function(people) {
    sortedPeople = people.sort((a, b) => 
            ((b.yearOfDeath ? b.yearOfDeath : new Date().getFullYear()) - b.yearOfBirth) - 
            ((a.yearOfDeath ? a.yearOfDeath : new Date().getFullYear()) - a.yearOfBirth));
    return sortedPeople[0];
}

// Do not edit below this line
module.exports = findTheOldest;
