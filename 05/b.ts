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

const stackCount = (data[0].length + 1) / 4;
const stacks: string[][] = [[]];
for (let i = 0; i < stackCount - 1; i++) {
  stacks.push([]);
}
for (let i = data.length - 2; i >= 0; i--) {
  for (let j = 1, k = 0; j < data[i].length - 1; j = j + 4, k++) {
    const crate = data[i].charAt(j);
    if (crate != ' ') {
      stacks[k].push(crate);
    }
  }
}

moves.forEach((m) => {
  const fromStack = m[1] - 1;
  const toStack = m[2] - 1;
  const tempStack: string[] = [];
  for (let i = 0; i < m[0]; i++) {
    tempStack.push(stacks[fromStack].pop()!);
  }
  for (let i = 0; i < m[0]; i++) {
    stacks[toStack].push(tempStack.pop()!);
  }
});

const answer = stacks.map((s) => s.pop()).join('');

console.log(answer);
