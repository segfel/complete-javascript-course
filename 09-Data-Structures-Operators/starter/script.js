'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


/* 
    112: Enhanced Object Literals
*/

// compute property names
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fridayy', 'sat', 'sun'];
const [, , , , fri] = weekDays;
const openingHours = {
    [weekDays[3]]: {  // square brackets is needed to compute the property name. else, it'll not consider the variable for the property name
        open: 12,
        close: 22,
    },
    [fri]: {        // De-structure to get 'fridayy'
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

// Data needed for first part of the section
// Object Literal syntax
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // ES6 enhanced object literal
    openingHours,

    // ES6 enhanced object literal -- without the 'function' keyword
    order (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // function with object destructuring in the params
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex,
        time = '20:00',
        address
    }) {
        console.log(
            `Order received!! Your order of ${this.mainMenu[mainIndex]} and
            ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`
        );
    },

    orderPizza: function (mainIngredient, ...otherIngrdient) {
        console.log(mainIngredient);
        console.log(otherIngrdient);
    },


};

/*
    103: Destructuring Arrays
*/

// // Leave a hole to ignore a certain element in the array
// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// // Switching variables without temp
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive more than 1 return value from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [1, 2, [3, 4]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values -- can be used when we don't want to use undefined 
// // to a value that doesn't exist in the arrar
// const [p = 1, q = 1, r = 1] = [7, 8];
// console.log(p, q, r);

/*
    104: Destructuring Objects
*/

// const {
//     name: restaurantName,
//     openingHours,
//     categories: tags} = restaurant;
// console.log(restaurantName, openingHours, tags);

// // Default values
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 14, b: 7, c: 14};

// // Gives error as JS expects code inside -- {} -- to be a block.
// // So, we have to wrap it in parentheses
// ({a, b} = obj);

// // Nested Objects
// // const {fri} = openingHours;
// // console.log(fri);

// // We want only the open and close hours for friday and have a custom name for variables
// const {fri: {
//     open: openhours, close: closeHours
// }} = openingHours;
// console.log(openhours, closeHours);

// // Pass object into function
// restaurant.orderDelivery({
//     address: '29, 2nd main, water tank road',
//     mainIndex: 2,
//     starterIndex: 1,
//     time: '21:30'
// });

// restaurant.orderDelivery({  // using the default values in the function
//     address: '29, 2nd main, water tank road',
//     mainIndex: 3
// });

/*
    105: The Spread Operator
*/

// const newMenu = [...restaurant.mainMenu, 'Idli'];
// console.log(newMenu);

// // Join 2 arrays
// const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(allMenu);

// // Real world example
// const ingredients = [
//     // prompt(`Let's make pasta!! Ingrdient 1?`),
//     // prompt(`Ingrdient 2?`),
//     // prompt(`Ingrdient 3?`)
// ];
// console.log(ingredients);
// //basic way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// //spread operator
// restaurant.orderPasta(...ingredients);

// // Objects -- after ES2018

// const newRestaurant = {
//     foundedIn: 1998,
//     ...restaurant,
//     founder: 'Vishu'
// };
// console.log(newRestaurant);
// // create a copy of restaurant
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Om Ganesh Restaurant';
// console.log(restaurantCopy.name, restaurant.name);

/*
    106: Rest Pattern and parameters
*/

// // Spread -- on the RHS of =
// const array = [1, 2, 3, ...[4, 5]];
// // REST -- on the LHS of =
// const [a, b, ...others] = array;
// console.log(a, b, others);

// const [pizza, , risotto, ...otherMenu] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // Rest will ignore the skipped elements and only collect the remaining elements
// console.log(pizza, risotto, otherMenu);


// // Objects
// const {sat, ...weekDays} = restaurant.openingHours;
// console.log(sat, weekDays);

// // Functions
// // accepts arbitrary number of arguments
// const add = function (...numbers) {     // Unpack the values using rest
//     console.log(numbers);
//     const sum = numbers.reduce((a, b) => a + b);
//     console.log(sum);
// };

// add(2, 3, 4);
// add(2, 3, 4, 5, 6);
// const x = [4, 5, 6];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'tomato', 'spinach');

/*
    107: Short Circuiting(&& and ||)
*/

// // || --> returns the first truthy value. If there are no truthy values, returns the last value
// console.log(3 || 'Vishu'); // 3
// console.log('' || 'Vishu'); // vishu
// console.log(true || 0); //true
// console.log(undefined || null); // null
// console.log(undefined || 0 || '' || 'hello' || 23 || null); //hello

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// // avoid ternary operator and set default value
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----AND----');
// // && --> returns the first falsy value. If there are no falsy values, returns the last value
// console.log(0 && 'vishu'); // 0
// console.log(1 && 'vishu'); // vishu
// console.log('hello' && 23 && null && true); // null. Short circuits the true 'true'

// // Practical example
// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushrooms', 'tomato');
// }

// // we can avoid the if statement using &&
// // first operand is true, so will return the last value here
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'onions');

/*
    108: The Nullish Coalescing Operator(??) -- ES2020
*/

// restaurant.numGuests = 0;
// //Nullish --> null/undefined
// // Returns 0 for guestsCorrect
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

/*
    109: Logical Assingment Operators -- ES2021
*/

// const rest1 = {
//     name: 'Ayodhya',
//     // numGuests: 20
//     numGuests: 0
// };

// const rest2 = {
//     name: 'Udupi',
//     owner: 'Vishu'
// };

// // OR assingment operator -- returns the first truthy value/last value
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // AND assignment operator -- returns the first falsy value/last value
// rest1.owner = rest1.owner && `<ANONYMOUS>`;
// rest2.owner = rest2.owner && `<ANONYMOUS>`;
// rest1.owner &&= `<ANONYMOUS>`;
// rest2.owner &&= `<ANONYMOUS>`;

// // Nullish assingment operator
// rest1.numGuests = rest1.numGuests ?? 10;
// rest2.numGuests = rest2.numGuests ?? 10;
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;


// console.log(rest1);
// console.log(rest2);

/*
    110: Coding Challenge #1 -- Football betting app
*/

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 11.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// // 1: Create one player array for each team
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2: Bayern Munich Goal Keeper and players list
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3: allPlayers -- array of all players from both teams
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4: three substitute players used by Bayern Munich
// const finalPlayers = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(finalPlayers);
// // 5: One variable for each odd
// const {team1, x: draw, team2} = game.odds;
// console.log(team1, draw, team2);
// // 6: function to accept arbitrary number of player names

// const printGoals = function (...players) {
//     console.log(players);
//     console.log(`Number of Goals sccores -- ${players.length}`);
// };
// printGoals('Davies', 'Muller', 'Lewandoski', 'Kimmich', 'Alaba');
// printGoals(...game.scored);

// // 7: Likely winner based on the odds using short circuiting
// team1 < team2 && console.log(`Team 1 is more likely to win`);
// team2 < team1 && console.log(`Team 2 is more likely to win`);


/*
    111: Looping Arrays -- the for-of loop
*/

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//     console.log(item);
// }

// // Get index using entries() -- returns [index, element]
// for (const item of menu.entries()) {
//     console.log(item);
// }
// console.log(...menu.entries());     // returns all menu entries, but not in array -- [0,Dosa] [1,Rice] [2, chapathi]
// for (const [index, el] of [...menu.entries()]) {        // wrap menu.entries() in an array and destructure the array to get the index and element
//     console.log(`${index}: ${el}`);
// }


