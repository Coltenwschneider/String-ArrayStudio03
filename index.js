let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodArray = food.split(",").sort();
console.log(foodArray);

let equipmentArray = equipment.split(",").sort();
console.log(equipmentArray);
 
 let petsArray = pets.split(",").sort();
console.log(petsArray);

let sleepAidsArray = sleepAids.split(",").sort();
console.log(sleepAidsArray);



//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = []
cargoHold.push(foodArray);
cargoHold.push(equipmentArray);
cargoHold.push(petsArray);
cargoHold.push(sleepAidsArray);
console.log(cargoHold);

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require('readline-sync');

let cabinetSelect = input.question("Select a cabinet in the cargoHold: ");

let itemSelect = input.question("Select an item in the cargoHold.: ")

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (cabinetSelect > cargoHold.length) {
    console.log("That is an invalid number, please enter another number. ");
}
else {console.log(`User selected cabinet ${cabinetSelect}:     ${cargoHold[cabinetSelect-1]}.`);
}


//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

if (cargoHold[cabinetSelect-1].includes(itemSelect)) {
  console.log(`Cabinet ${cabinetSelect} does contain ${itemSelect}.`);
}
else {
  console.log(`Cabinet ${cabinetSelect} does not contain ${itemSelect}, please choose again.`);
}