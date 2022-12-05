const input = await Deno.readTextFile('./prod.txt');

const lines = input.split('\n');

let fullOverlapCount = 0;
let partialOverlapCount = 0;

lines.forEach((line) => {
  const pair = line.split(',');
  const [l1, r1] = pair[0].split('-');
  const [l2, r2] = pair[1].split('-');

  if (
    (parseInt(l1) <= parseInt(l2) && parseInt(r1) >= parseInt(r2)) ||
    (parseInt(l2) <= parseInt(l1) && parseInt(r2) >= parseInt(r1))
  ) {
    //console.log(pair, first, second);
    fullOverlapCount++;
  } else if (
    (parseInt(l1) >= parseInt(l2) && parseInt(l1) <= parseInt(r2)) ||
    (parseInt(r1) >= parseInt(l2) && parseInt(r1) <= parseInt(r2))
  ) {
    //console.log(pair, first, second);
    partialOverlapCount++;
  }
});
console.log({ fullOverlapCount });
console.log({ partialOverlapCount });
console.log('total', fullOverlapCount + partialOverlapCount);
