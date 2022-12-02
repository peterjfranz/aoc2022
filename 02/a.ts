const strategy = Deno.readTextFileSync('prod.txt').toString().split('\n');

const myMoveValues = new Map<string, { beats: string; score: number }>();
myMoveValues.set('X', { beats: 'C', score: 1 });
myMoveValues.set('Y', { beats: 'A', score: 2 });
myMoveValues.set('Z', { beats: 'B', score: 3 });

const opponentMoveValues = new Map<string, { beats: string }>();
opponentMoveValues.set('A', { beats: 'Z' });
opponentMoveValues.set('B', { beats: 'X' });
opponentMoveValues.set('C', { beats: 'Y' });

const winScore = 6;
const loseScore = 0;
const drawScore = 3;

let score = 0;

strategy.forEach((move) => {
  const opponentMove = move.split(' ')[0];
  const myMove = move.split(' ')[1];

  const myMoveValue = myMoveValues.get(myMove);
  const oppMoveValue = opponentMoveValues.get(opponentMove);

  if (myMoveValue != undefined && oppMoveValue != undefined) {
    if (oppMoveValue?.beats == myMove) {
      score = score + myMoveValue?.score + loseScore;
    } else if (myMoveValue?.beats == opponentMove) {
      score = score + myMoveValue.score + winScore;
    } else {
      score = score + myMoveValue.score + drawScore;
    }
  }
});

console.log(score);
