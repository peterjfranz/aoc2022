var fs = require('fs');
var array = fs.readFileSync('input.txt').toString().split('\n');

let maxCal = 0;
let elfCal = 0;
let elfCals = new Array();

array.forEach((element) => {
  if (element == '') {
    maxCal = Math.max(maxCal, elfCal);
    elfCals.push(elfCal);
    elfCal = 0;
  } else {
    elfCal += parseInt(element);
  }
});

elfCals.sort((a, b) => b - a);

console.log(maxCal);
console.log(elfCals[0], elfCals[1], elfCals[2]);
console.log(elfCals[0] + elfCals[1] + elfCals[2]);
