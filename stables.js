// Welcome!
// 
// 
// 
// 
//
//
//        a@@@@a             
//         a@@@@@@@@@@@@a         
//       a@@@@@@by@@@@@@@@a       
//     a@@@@@S@C@E@S@W@@@@@@a     
//     @@@@@@@@@@@@@@@@@@@@@@     
//      `@@@@@@`\\//'@@@@@@'      
//           ,,  ||  ,, T_I_R_A_M_I_S_U__C_A_K_E
//          /(-\ || /.)m          
//     ,---' /`-'||`-'\ `----,    
//    /( )__))   ||   ((,==( )\   
// _ /_//___\\ __|| ___\\ __\\ ____ 
//     ``    `` /MM\   ''   ''

//------------------------- Seting up shop -------------------------//

let horses ;
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

//---------------------- Growing business ----------------------//

let numberOfStables = 15;

const remainingStalls = numberOfStables - horse.length;

console.log(`Our stables has ${numberOfStables} and ${horse.length} are occupied. We have ${remainingStalls} unoccupied stalls left.`)

if (remainingStalls < 2 ) {
    console.log(`We need to build more stalls`)
} else {
    console.log(`We have ${numberOfStables} available!`)
};

function lateRent(horses) {
    const totalDue = horses.monthlyRent + lateFee;

    console.log(`${horses.name}'s rent is late! They will have to pay ${totalDue} by the end of the month.`);

};

lateRent(horses[0]);
lateRent(horses[1]);
lateRent(horses[2]);
lateRent(horses[3]);


let treatCheck = "straw";
for (let i = 0; horses.length; i++) {
    if (horses[i].faveTreat === treatCheck) {
        console.log(`Affirmative! ${horses[i].name} loves ${treatCheck}`)
        break;
    } else {
        console.log(`Negative! ${horses[i].name} does not like ${treatCheck}. They prefer ${horses[i].faveTreat}.`)
    };
};

function nickNameCheck(horseName) {
    const horse = horses.find(horses => horses.name === horseName);
    if (horse) {
        return (horse.nickname);
    } 
}

console.log(nickNameCheck("Tiramisu"));

//------------------------- Day to day operations -------------------------//

function horseHabit () {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].unique01.includes('love') || horses[i].unique01.includes('like')) {
            console.log(`${horses[i].name} ${horses[i].unique01}.`);
        } else {
            console.log(`${horses[i].name} prefers something else.`);
        }
    }
}

horseHabit();

function movingHorses () {
    for (let i = 0; i < horses.length; i++) {
      horses[i].isInside = false;
      console.log(`${horses[i].name} was taken outside to play and spend time in the sun!`)
    } 
};

movingHorses();

locationUpdate = function () {
    if (!horses.isInside) {
        horses.isInside = true;
    } 
    else {
        (horses.isInside) 
        horses.isInside = false;
    }
    };

function feedHorses () {
    for (let i = 0; i < horses.length; i++) {
        if (!horses[i].isInside) {
            console.log(`${horses[i].name} come inside, it's time to eat! We have ${horses[i].faveTreat} for you!`);
            horses[i].isInside = true;
            console.log(`${horses[i].name} is inside and ready to feast!`);
        } 
        console.log(`${horses[i].name} is happily eating ${horses[i].faveTreat} now!`);
    };
    console.log(`All horses have a full stomach now!`);
};

feedHorses();

function bedTime (isDark) {
    for (let i = 0; i < horses.length; i++) {
        if (isDark) {
            if (horses[i].isInside) {
                console.log(`${horses[i].name}, please come inside and sleep.`)
            };
        }; 
    };
};

bedTime(true);

