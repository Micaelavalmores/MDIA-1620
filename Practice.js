//practice for quiz
let girlName = "Vivian";
let girlNickname = "ABG Girl";
let girlAge = "21"
let isGirlrRaving = "Raving"
let boyfriendName = "Kevin"
let otherMan = "Oscar"
let relationshipStatus = "taken"

const APARTMENT_PRICE = 1069;
let aptRent = APARTMENT_PRICE * 2;

//if (girlName !=="Alex") {
 //   console.log(`${girlName} cheated on her boyfriend`);
//} else {
  //  console.log(`${girllName} is such a loyal girlfriend`);
//}
//if (girlName) {
  //  console.log(`${boyfriendName} cheated on ${girlName} first`);
//} else {
  //  console.log(`${girlName} just does it to have fun`);
//}

let word = "Rave"
//console.log(word.charAt(6));
//console.log(word.length);

let girlNames = [girlName, "Alex", "Princess"];
let girlAges = [girlAge, "24", "22"];
let relationshipStatuses = [relationshipStatus, "heartbroken", "cheated"];
let apartmentLocation = "Downtown Vancouver"

//console.log(girlNames);

console.log(`${girlName} has a boyfriend named ${boyfriendName} and he had an affair with ${girlNames.at(1)}`);
console.log(`${girlName} was very ${relationshipStatuses.at(1)} because she got ${relationshipStatuses.at(2)} on by her boyfriend`);
console.log(`Once ${girlName} turned ${girlAge}, she started ${isGirlrRaving} and met ${otherMan}`);
console.log(`However, ${otherMan} has a girlfriend named ${girlNames.at(2)}`);
if (girlName === "Vivian") {
    console.log(`${otherMan} hooked up with ${girlName} that night without ${girlNames.at(2)} knowing`)
} else {
    console.log(`${otherMan} did not entertain ${girlNAme} during that night`)
};
console.log(`${girlNames.at(2)} was devastated and ${relationshipStatuses.at(1)} and broke up with ${otherMan}`);
console.log(`Soon after, ${girlName} moved in ${otherMan}'s studio apartment at ${apartmentLocation} with a rent costing ${aptRent}`);
console.log(`It took them ${word.length} years of living together until ${girlName} started cheating on ${otherMan} after she had gone ${isGirlrRaving}`);