const rucksacks = Deno.readTextFileSync('prod.txt').toString().split('\n');

// console.log('A'.charCodeAt(0) - 38);
// console.log('a'.charCodeAt(0) - 96);

const rs_compartments = rucksacks.map((r: string) => {
  return [
    r.substring(0, r.length / 2 - 1),
    r.substring(r.length / 2, r.length),
  ];
});

let sharedItems: string[] = [];
let sharedItemsComp: string[] = [];
rs_compartments.forEach((r) => {
  sharedItemsComp = [];
  for (let i = 0; i < r[0].length; i++) {
    if (r[1].includes(r[0][i]) && !sharedItemsComp.includes(r[0][i]))
      sharedItemsComp.push(r[0][i]);
  }
  //console.log(sharedItemsComp);

  sharedItems = sharedItems.concat(sharedItemsComp);
});

//console.log(sharedItems);
const values = sharedItems.map((r) => {
  console.log(r);
  return r!.charCodeAt(0) < 97 ? r!.charCodeAt(0) - 38 : r!.charCodeAt(0) - 96;
});

const theSum = values.reduce((acc, val) => {
  return (acc += val);
});
console.log(theSum);
