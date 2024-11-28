// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//

let horses = [
    {
        name: "Tiramisu",
        nickname: "Cake",
        faveTreat: "matcha",
        age: 2,
        monthlyRent: 200,
        isInside: true,
        unique01: "hate coffee beans",
        unique02: "love running around",
    },
    {
        name: "Macaroon",
        nickname: "Pinkie",
        faveTreat: "ice",
        age: 1,
        monthlyRent: 250,
        isInside: false,
        unique01: "love to sleep",
        unique02: "don't have a lot of energy",
    },
    {
        name: "Chocolate",
        nickname: "Milk",
        faveTreat: "brownie",
        age: 5,
        monthlyRent: 180,
        isInside: false,
        unique01: "like to eat",
        unique02: "are super picky",
    }
];

let message = "Welcome to our Stables!";
const lateFee = 25;
let availableStalls = 4;
//------------------------- First day -------------------------//

function horse(name, nickname, faveTreat, age, monthlyRent, isInside, unique01, unique02) {
    this.name = name;
    this.nickname =  nickname;
    this.faveTreat = faveTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isInside = isInside;
    this.unique01 = unique01;
    this.unique02 = unique02;
    this.horseIntro = function () {
        return `Hi! Meet ${this.name} but we call em' ${this.nickname}. They're about ${this.age} years old and they pay ${this.monthlyRent} a month in rent. They ${this.unique01} but they ${this.unique02}.`
    };
    this.horseTrait = function () {
        return `${this.name} can run for ${this.age * 2} hours a day until they're tired. But if you give them some ${this.faveTreat}, they'll be up and runnin' again`
    };

};

const tiramisu = new horse("Tiramisu", "Cake", "matcha", 2, 200, true, "hate coffee beans", "love running around");
const macaroon = new horse("Macaroon", "Pinkie", "ice", 1, 250, false, "love to sleep", "don't have a lot of energy");
const chocolate = new horse("Chocolate", "Milk", "brownie", 5, 180, false, "like to eat", "are super picky" );

console.log(tiramisu.horseIntro());
console.log(tiramisu.horseTrait());

console.log(macaroon.horseIntro());
console.log(macaroon.horseTrait());

console.log(chocolate.horseIntro());
console.log(chocolate.horseTrait());

const applefritter = {
    name: "AppleFritter",
    nickname: "Apple",
    faveTreat: "straw",
    age: 3,
    monthlyRent: 215,
    isInside: true,
    unique01: "kick fences",
    unique02: "doesn't like to talk",
};

horses.push(applefritter);

horses[0].isHungry = true;
horses[1].isHungry = false;
horses[2].isHungry = false;
horses[3].isHungry = true;
//------------------------- Stable roster -------------------------//

// function horse(name, nickname, faveTreat, age, monthlyRent, isInside, unique01, unique02) {
//     this.name = name;
//     this.nickname =  nickname;
//     this.faveTreat = faveTreat;
//     this.age = age;
//     this.monthlyRent = monthlyRent;
//     this.isInside = isInside;
//     this.unique01 = unique01;
//     this.unique02 = unique02;
//     this.horseIntro = function () {
//         return `Hi! Meet ${this.name} but we call em' ${this.nickname}. They're about ${this.age} years old and they pay ${this.monthlyRent} a month in rent. They ${this.unique01} but they ${this.unique02}.`
//     };
//     this.horseTrait = function () {
//         return `${this.name} can run for ${this.age * 2} hours a day until they're tired. But if you give them some ${this.faveTreat}, they'll be up and runnin' again`
//     };

// };
// horses = [
//     {
//         name: "Tiramisu",
//         nickname: "Cake",
//         faveTreat: "matcha",
//         age: 2,
//         monthlyRent: 200,
//         isInside: true,
//         unique01: "hate coffee beans",
//         unique02: "love running around",
//     },
//     {
//         name: "Macaroon",
//         nickname: "Pinkie",
//         faveTreat: "ice",
//         age: 1,
//         monthlyRent: 250,
//         isInside: false,
//         unique01: "love to sleep",
//         unique02: "don't have a lot of energy",
//     },
//     {
//         name: "Chocolate",
//         nickname: "Milk",
//         faveTreat: "brownie",
//         age: 5,
//         monthlyRent: 180,
//         isInside: false,
//         unique01: "like to eat",
//         unique02: "are super picky",
//     },
//     {
//         name: "AppleFritter",
//         nickname: "Apple",
//         faveTreat: "straw",
//         age: 3,
//         monthlyRent: 215,
//         isInside: true,
//         unique01: "kick fences",
//         unique02: "doesn't like to talk",
//     }
// ];
// horses[0].isHungry = true;
// horses[1].isHungry = false;
// horses[2].isHungry = false;
// horses[3].isHungry = true;


//---------------------- Growing business ----------------------//

let numberOfStables = 15;

const remainingStalls = numberOfStables - horse.length;

console.log(`Our stables has ${numberOfStables} and ${horse.length} are occupied. We have ${remainingStalls} unoccupied stalls left.`)

if (remainingStalls < 2 ) {
    console.log(`We need to build more stalls`)
} else {
    console.log(`We have ${numberOfStables} available!`)
};

function lateRent(horse) {
    const totalDue = horse.monthlyRent + lateFee;

    console.log(`${horse.name}'s rent is late! They will have to pay ${totalDue} by the end of the month.`);

};

lateRent(horses[0]);
lateRent(horses[1]);
lateRent(horses[2]);
lateRent(horses[3]);

// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.



// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.

// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.

// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.