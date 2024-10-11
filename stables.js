let horseName = "Sparkles"; /*let can be updated and use camelCase for variables*/
console.log(horseName);
horseName = "Yeehaw"
console.log(horseName)
let horseAge = 2;
console.log(horseAge)
let isHorseInside = true;
console.log(isHorseInside)


// LESSON-4 CODE
console.log(typeof horseName)
console.log(typeof false)
/*u can use this if you dont know whether it is a variable or not*/

const STABLES_MONTHLY_FEE = 100;
console.log(STABLES_MONTHLY_FEE)
/* constants cannot be updated and use UPPERCASE for constants*/

console.log(STABLES_MONTHLY_FEE * 3); 
/* (+) adds two numbers (-) subtracts (*)multiply (/) divide*/
console.log("hi" + " there");
/* you can also log it for numbers*/
//type corercion means you combine a string or a number//
//NaN means "not a number"//
//for booleans true=1 and false=0//

console.log("The stable monthly fee is " + STABLES_MONTHLY_FEE);
//concatenation. you can join variables together

let horseNickname = "Sparks"
let discount = STABLES_MONTHLY_FEE * 3 *.10;

console.log(`My horse's name is ${horseName} and his nickname is ${horseNickname}`);
console.log(`You can save $${discount} if you stay for 3 months`)


//Lesson-5



if (horseName !== "blueberry") {
    console.log("`{horseName} has come to visit the stables`");
} else {
    console.log(horseName + "is lonely");
}

if (!isHorseInside){
    console.log(`${horseName} is outside`);
} else {
    console.log(`${horseName} is inside`);
}
