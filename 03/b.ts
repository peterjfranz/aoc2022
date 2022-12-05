export const x = '';

const input = await Deno.readTextFile('./prod.txt');

const lines = input.split('\n');

const totalGroups = lines.length / 3;

let sum = 0;

const letterToNumber = (letter: string) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet.indexOf(letter) + 1;
};

for (let i = 0; i < totalGroups; i++) {
  const groupMember1 = lines[i * 3].split('');
  const groupMember2 = lines[i * 3 + 1].split('');
  const groupMember3 = lines[i * 3 + 2].split('');

  const badgeType = groupMember1
    .filter((f) => groupMember2.includes(f))
    .filter((f) => groupMember3.includes(f))[0];

  sum += letterToNumber(badgeType);

  console.log(totalGroups, i, badgeType, sum);
}

console.log(sum);
