// //practice for quiz
// let girlName = "Vivian";
// let girlNickname = "ABG Girl";
// let girlAge = "21"
// let isGirlrRaving = "Raving"
// let boyfriendName = "Kevin"
// let otherMan = "Oscar"
// let relationshipStatus = "taken"

// const APARTMENT_PRICE = 1069;
// let aptRent = APARTMENT_PRICE * 2;

// //if (girlName !=="Alex") {
//  //   console.log(`${girlName} cheated on her boyfriend`);
// //} else {
//   //  console.log(`${girllName} is such a loyal girlfriend`);
// //}
// //if (girlName) {
//   //  console.log(`${boyfriendName} cheated on ${girlName} first`);
// //} else {
//   //  console.log(`${girlName} just does it to have fun`);
// //}

// let word = "Rave"
// //console.log(word.charAt(6));
// //console.log(word.length);

// //let randomNames = ["Renee", "Ymir"];
// //let joinedNames = randomNames.join();
// //console.log(joinedNames);


// let girlNames = [girlName, "Alex", "Princess"];
// let girlAges = [girlAge, "24", "22"];
// let relationshipStatuses = [relationshipStatus, "heartbroken", "cheated"];
// let apartmentLocation = "Downtown Vancouver"

// console.log(girlNames);

// console.log(`${girlName} has a boyfriend named ${boyfriendName} and he had an affair with ${girlNames.at(1)}`);
// console.log(`${girlName} was very ${relationshipStatuses.at(1)} because she got ${relationshipStatuses.at(2)} on by her boyfriend`);
// console.log(`Once ${girlName} turned ${girlAge}, she started ${isGirlrRaving} and met ${otherMan}`);
// console.log(`However, ${otherMan} has a girlfriend named ${girlNames.at(2)}`);
// if (girlName === "Vivian") {
//     console.log(`${otherMan} hooked up with ${girlName} that night without ${girlNames.at(2)} knowing`)
// } else {
//     console.log(`${otherMan} did not entertain ${girlNAme} during that night`)
// };
// console.log(`${girlNames.at(2)} was devastated and ${relationshipStatuses.at(1)} and broke up with ${otherMan}`);
// console.log(`Soon after, ${girlName} moved in ${otherMan}'s studio apartment at ${apartmentLocation} with a rent costing ${aptRent}`);
// console.log(`It took them ${word.length} years of living together until ${girlName} started cheating on ${otherMan} after she had gone ${isGirlrRaving}`);

// // //lessonn 8 Practice
// // function square(number) {
// //   return number * number;
// // }
// // square(5);

// // console.log(girlName + " is " + " an " + girlNickname);
// //  let templateLiteralIntro = `The girl's name is ${girlName} and she likes ${isGirlrRaving}!`
// //  console.log(templateLiteralIntro);

//  function isSheCheating(girl) {
//   if (girl===1) {
//     return girlNames[girl] + " is not cheating";
//   } else {
//     return girlNames[girl] + " is cheating";
//   }
    
//  }
//  console.log(isSheCheating(1));


// // function square(number) {
// //   return number + number;
// // }
// // square(5);
// // console.log(square(5));

// // function whatsCheating(answer) {
// //   return "She is " + answer;
// // }
// // whatsCheating("unloyal");
// // console.log(whatsCheating("unloyal"));


// // function paper(width, length) {
// //   return width * length;
// // }

// // console.log(paper(3, 9));

// function sephora(lipMask, perfume, blush) {
//   if (sephora === "foundation"); {
//   return lipMask + " is the best lipmask, " + perfume + " has the best scents, and " + blush + " has the best blush colors";
// } 
//    return "Sephora has boring brands";
// }

//   console.log(sephora("Laneige", "Replica", "Rare Beauty"));

// function password(userPassword, requiredLength) {
//   if (userPassword.length >= requiredLength) {
//     console.log("Password Accepted!"); 
//   } else {
//     console.log("Your password is too short!");
//   }
// }

// password("ilovemybird", 12);



// function cheat(Alex, Vivian) {
//   if (Alex == Vivian ) {
//     console.log ("Alex did not cheat");
//   } else {
//     console.log("Vivian was spreading rumours");
//   }
// }

// cheat([true, false]);

// let num = 10;
// if (num > 18){
//   num = num + 3;
//   //This number is 13 and is not greater than 18 therefore it is false
// } else {
//   num = num + 2;
//   //Since the IF statement is false, this will console log
// }
// console.log(num);

// let num = 10;
// let str = "10";
// str = "ten";
// if (num > 10){
//   num = 9;
// }
// console.log(num);
// console.log(str);

// let str = "Billie";
// function concat(extra) {
//   str = str + " " + extra;
// }
// concat=("and Teenie");
// console.log(str, concat);


// let arr = [1, 2, 3, 5];
// arr.splice(3, 0, "4");
// console.log(arr);

// let names = ["Vivian", "Honey", "Stephanie", "Samantha"];

// for (let i = 0; i < names.length; i++ ) {
//   console.log(`The ABG girls are ${names[i]}.`);
// }

let girls = [
  {
    name: "Vivian",
    age: 18,
    isSheRaving: false,
  },

{
  name: "Honey",
  age: 20,
  isSheRaving: true,
},

{
  name: "Stephanie",
  age: 23,
  isSheRaving: true,
}

]

// for (let i = 0; i < girls.length; i++) {
//   let message = girls[i]["name"];

//   if (!girls[i]["isSheRaving"]){
//     message += " is not old enough to rave";
//   }

//   message += ", let's go rave";

//   console.log(message);
// }

for (let i = 0; i < girls.length; i++) {
  let output = "";

  if (girls[i]["age"]< 20) {
    output = girls[i]["name"] + ", let's go rave now";
  } 
  output = girls[i]["name"] + " is too young";
};