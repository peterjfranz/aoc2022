const array = Deno.readTextFileSync('input.txt').toString().split('\n');

let maxCal = 0;
let elfCal = 0;
const elfCals = [];

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

//part 1 answer
console.log(maxCal);

//part 2 answer
console.log(elfCals[0] + elfCals[1] + elfCals[2]);
