// Code your solution here
// find which names are matching


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, names){
    const result = drivers.filter(names => drivers.tolowerCase() === names.toLowerCase());
    return console.log(result);
}

function fuzzyMatch() {

}

function matchName() {

}