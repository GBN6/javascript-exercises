const findTheOldest = function(array) {
    // const oldest = array.sort((a, b) => {
    //     const firstPersonAge = a.yearOfDeath - a.yearOfBirth;
    //     const secondPersonAge = b.yearOfDeath - b.yearOfBirth; 
    //     return firstPersonAge > secondPersonAge ? -1 : 1;
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })
};

const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

// Do not edit below this line
module.exports = findTheOldest;
