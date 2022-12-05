export const x = '';

const input = await Deno.readTextFile('./prod.txt');

const lines = input.split('\n');

const moves = lines
  .filter((f) => f.startsWith('move'))
  .map((m) => {
    const move = m.split(' ');
    return [move[1], move[3], move[5]].map((m) => parseInt(m));
  });

const data = lines.filter((f) => !f.startsWith('move') && f != '');

//console.log(data);

const testtt = [
  ['a', 'b'],
  ['c', 'd'],
];

const stackCount = (data[0].length + 1) / 4;
const stacks: string[][] = [[]];
for (let i = 0; i < stackCount - 1; i++) {
  stacks.push([]);
}
for (let i = data.length - 2; i >= 0; i--) {
  //console.log(data[i]);
  for (let j = 1, k = 0; j < data[i].length - 1; j = j + 4, k++) {
    //console.log(data[i].charAt(j));
    const crate = data[i].charAt(j);
    if (crate != ' ') {
      stacks[k].push(crate);
    }
  }
}
console.log('stacks', stacks);
//console.log(moves);

moves.forEach((m) => {
  const fromStack = m[1] - 1;
  const toStack = m[2] - 1;
  for (let i = 0; i < m[0]; i++) {
    //const moveCrate = stacks[fromStack].pop();
    stacks[toStack].push(stacks[fromStack].pop()!);
  }
});
console.log('stacks', stacks);

const answer = stacks.map((s) => s.pop()).join('');

console.log(answer);
