/*
const names = prompt("What is your name?");

alert(`Welcome ${names}!`);

const age = prompt("How old are you?");

alert(`You are ${age} years old!`);

const adress = prompt("Where do you live?");

alert(`Adress set to ${adress}!`);


alert(`Welcome ${names}, it seems you are ${age} years old and you live at ${adress}!`);
*/

//

/*
let priceNvat = prompt("Please enter the price of your item:");
const vat = 1.21;
let priceWvat = priceNvat * vat;

console.log(parseFloat(priceWvat));

alert(`The price of your item is $${priceWvat} !`);
*/

/*
let radius = prompt("Enter the radius of the circle:");
const pi= 3.14;

let surface = pi * (radius**2);
alert(`The surface of the circle is ${surface} !`);
*/

/*
let num1 = prompt("Enter the 1st number");
let temp1 = parseFloat(num1);

let op = prompt("would you wish to + or - or * or /");
    op = op.trim();

let num2 = prompt("Enter the 2nd number");
let temp2 = parseFloat(num2);

let result = 0;

if (op == "+") {
    result = (temp1 + temp2);
    alert(`The result is ${result} !`);
} else if (op == "-") {
    result = (temp1 - temp2);
    alert(`The result is ${result} !`);
} else if (op == "*") {
    result = (temp1 * temp2);
    alert(`The result is ${result} !`);
} else if (op == "/") {
    result = (temp1 / temp2);
    alert(`The result is ${result} !`);
} else {
    alert(`Please enter a valid operator...`)
}   
*/

    //

//let fruits = ["apple", "orange", "banana"];

//fruits.unshift("cherry", "pinapple");
//fruits.push("plum", "grapes");
//fruits.splice(3, 1, "lemon");
//fruits.sort();

//console.log(fruits);

    //

//const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

//leaderboard.splice(1, 1, "Luna");
//leaderboard.splice(3,1, "Draco");

//console.log(leaderboard);

    //

/* 

const initialArray = [
    null,
    true,
    ["Apple", "two", undefined],
    false,
    ["three", "BeCode"],
    4,
    "I am a big bad wolf",
    ["one"],
];

initialArray.splice(0,8, "one");
initialArray.push("two", "three");

console.log(initialArray);
*/

    //

/* 

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");

console.log(planets);
*/

        // O B J E C T S

/*
let product = {
    name : "iPhone15",
    inStock: true,
    price: 1249.90,
    includedInPackage: ["case", "earphones", "charger"]
};

console.log( product.includedInPackage[1]);
*/

    //

/* 

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: "Ichiran Ramen",
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: "Brooklyn",
    state: "NY",
    zipcode: "11206",
};

  //YOUR CODE GOES DOWN HERE:

const fullAddress = [restaurant.address, restaurant.city, restaurant.state, restaurant.zipcode];

console.log(fullAddress);
*/

    //

/*
let temp;
const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
for(let i = animals.length - 1; i >= 0; i--) {
    console.log(animals[i]);
}
*/

    //

/* 
const users = [
    {
      firstName: "Vito",
      lastName: "Corleone",
    },
    {
      firstName: "William",
      lastName: "Wallace",
    },
    {
      firstName: "Harry",
      lastName: "Potter",
    },
    {
      firstName: "Amadeus",
      lastName: "Mozart",
    },
    {
      firstName: "Barack",
      lastName: "Obama",
    },
  ];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const fullName = `${user.firstName} ${user.lastName}`;
    console.log(`${i + 1}. My full name is ${fullName}.`);
  }
*/

  //
/*
  const seatingChart = [
    ["Colas", "Benoit", "Elodie"],
    ["Sola", "Irina", "Antonino", "Eli"],
    ["John", "Maryna", "Naike", "Fabrice"],
  ];
*/  
  // I can use nested loops to do that :
  
/* 
  for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
    console.log("ROW #" + i);
    for (let j = 0; j < row.length; j++) {
      console.log(row[j]);
    }
  }
*/

  //

/* 

let speed = -10;
while (speed < 100) {
    speed += 10;
    console.log(`The speed of the car is ${speed}MPH`);

};
*/

/* 
a = 1;
b = 10;

do {
    console.log(a);
    a++;
} while (a <= b);
*/

    //

/* 

*/