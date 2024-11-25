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

// Initialize a variable called "horses" that will store the horses in your stable.
let horses = [];

// Create a variable and use it to store a message visitors to the stable.
let message = "Welcome to our Stables!";
// Create a variable and use it to store the cost of a late payment fee.
const lateFee = 25;
// Create a variable and use it to store the number of available stalls in the stable.
let availableStalls = 4;
//------------------------- First day -------------------------//

// Using a constructor, add at least 3 horses to your stables.
//
// The horse should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)
// - a method that introduces your horse and references at least 3 object properties.
// - a second, unique method of your choice

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

// let horse = [
//     {
//         name: "Tiramisu",
//         nickname: "Cake",
//         favouriteTreat: "Matcha",
//         age: 2,
//         monthlyRent: 200,
//         isInsdie: true,
//         unique: ("Hates coffee beans", "An introvert"),
//         horseIntroduction: function () {
//             return `Hi! This is ${this.name} but we call her ${this.nickname}. `
//         }
//     }
// ];

// console.log(horses[7]);
// Store the horses you've just created in your "horses" variable.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.

//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.

// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

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