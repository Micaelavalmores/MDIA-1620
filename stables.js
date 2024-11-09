// let horseName = "Sparkles"; /*let can be updated and use camelCase for variables*/
// console.log(horseName);
// horseName = "Yeehaw"
// console.log(horseName)
// let horseAge = 2;
// console.log(horseAge)
// let isHorseInside = "inside";
// console.log(isHorseInside)


// // LESSON-4 CODE
// console.log(typeof horseName)
// console.log(typeof false)
// /*u can use this if you dont know whether it is a variable or not*/

// const STABLES_MONTHLY_FEE = 100;
// console.log(STABLES_MONTHLY_FEE)
// /* constants cannot be updated and use UPPERCASE for constants*/

// console.log(STABLES_MONTHLY_FEE * 3); 
// /* (+) adds two numbers (-) subtracts (*)multiply (/) divide*/
// console.log("hi" + " there");
// /* you can also log it for numbers*/
// //type corercion means you combine a string or a number//
// //NaN means "not a number"//
// //for booleans true=1 and false=0//

// console.log("The stable monthly fee is " + STABLES_MONTHLY_FEE);
// //concatenation. you can join variables together

// let horseNickname = "Sparks"
// let discount = STABLES_MONTHLY_FEE * 3 *.10;

// console.log(`My horse's name is ${horseName} and his nickname is ${horseNickname}`);
// console.log(`You can save $${discount} if you stay for 3 months`)


// //Lesson-5


// if (horseName !== "blueberry") {
//     console.log(`${horseName} has come to visit the stables`);
// } else {
//     console.log(horseName + "is lonely");
// }

// if (!isHorseInside){
//     console.log(`${horseName} is outside`);
// } else {
//     console.log(`${horseName} is inside`);
// }


// //Lesson-6

// let word = "Honey"
// console.log(word.charAt(0));
// //H Indexes are offsets. First letter of "Honey" is H
// console.log(word.charAt(2));
// //n. Start from 0 1 2 3...letters in the "word".
// console.log(word.charAt(4));
// //y
// console.log(word.length);
// //tells you how long the word is (7)

// let horseNames = [horseName, "Sparkles", "Blueberry"];
// let horseAges = [horseAge, 5, 69];
// let horseLocations = [isHorseInside, "outside"];
// console.log(horseNames.length)
// //always square brackets [] for Arrays
// horseNames.push("Peonies");
// console.log(horseNames.at(3));
// //.at to pick an item
// horseNames.splice(1, 0, "Maximus");
// //first number: which placement within the items, 
// //second number:how many you want to delete, 
// //last number: item name
// console.log(horseNames);
// console.log(horseNames [1]);
// console.log(horseAges[1]);
// //logs out an item
// console.log(`Welcome to my stables! There are ${horseNames.length} horses staying here. Their names are ${horseNames} and they are ${horseAges} years old.`);
// if(horseNames.length < 5) {
//     console.log("These stables are unpopular");
// } else {
//     console.log("What a popular stable!")
// }
// console.log(horseAges[1] * horseAges[2]);

// //Lab06

// console.log(`Welcome to my stables! There are ${horseNames.length} horses and their lovely names are ${horseNames}. They are ${horseAges} years old but they are the best horses in town!`);
// console.log(`${horseNames[0]} is ${horseLocations[1]}`);
// console.log(`${horseNames[2]} is ${horseLocations[0]}`);
// console.log(`${horseNames[3]} is ${horseLocations[1]}`);
// console.log(`${horseNames[4]} is ${horseLocations[0]}`);
// console.log(`${horseNames[1]} is ${horseLocations[0]}`);

//Lesson 10 

// let strawberry = {
//     name: "Strawberry",
//     nickname: "Shortcake",
//     age: 2,
//     isInside: false,
//     intro() {
//         console.log(`My horse is called ${this.name} and they are ${this.age}`)
//     }
// };
// console.log("My horse is called " + strawberry.name + " and they are " + strawberry.age);

// function intro(horseName, horseAge) {
//     console.log (
//         "My horse is named " +
//         horseName +
//         " and they are " +
//         horseAge
//     )
// }

// intro(strawberry.name, strawberry.age);

// function nameInfo(horse, key){
//     console.log(`This horse is ${key}d ${horse[key]}`)
// }
// nameInfo(strawberry, "nickname");
// nameInfo(strawberry, "name");

// console.log(strawberry);
// strawberry.faveSnack = "hay";
// console.log(strawberry);

// function rentNotice() {
//     console.log(`${this.name}'s monthly rent is $${this.MOTHLY_RENT}!`)
// }

function createHorse(name, nickname, age, faveTreat, isInside) {
    // const tempObj = {};

    this.name= name;
    this.nickname= nickname;
    this.age= age;
    this.faveTreat= faveTreat;
    this.isInside= isInside;
    this.rent = 125;
    this.intro = function () {
        console.log(
            `My horse is called ${this.name} and they are ${this.age} years old!`
        );
    };
    // return tempObj;
};

const strawberry = new createHorse("Strawberry", "Berry", 2, "Hay", true)
const blueberry = new createHorse("Blueberry", "Blue", 3, "Carrot", false)
const raspberry = new createHorse("Raspberry", "Red", 4, "Grass", true)

console.log(strawberry);
console.log(blueberry);
console.log(raspberry);
