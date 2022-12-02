const strategy = Deno.readTextFileSync('prod.txt').toString().split('\n');

const myMoveValues = new Map<string, { score: number }>();
myMoveValues.set('X', { score: 1 });
myMoveValues.set('Y', { score: 2 });
myMoveValues.set('Z', { score: 3 });

const opponentMoveValues = new Map<
  string,
  { beats: string; loses: string; draws: string }
>();
opponentMoveValues.set('A', { beats: 'Z', loses: 'Y', draws: 'X' });
opponentMoveValues.set('B', { beats: 'X', loses: 'Z', draws: 'Y' });
opponentMoveValues.set('C', { beats: 'Y', loses: 'X', draws: 'Z' });

const winScore = 6;
const loseScore = 0;
const drawScore = 3;

let score = 0;

strategy.forEach((move) => {
  const opponentMove = move.split(' ')[0];
  const myOutcome = move.split(' ')[1];

  const oppMoveValue = opponentMoveValues.get(opponentMove);

  if (oppMoveValue != undefined) {
    if (myOutcome == 'X') {
      const myMove = oppMoveValue.beats;
      const myMoveValue = myMoveValues.get(myMove);
      if (myMoveValue != undefined) {
        score = score + myMoveValue?.score + loseScore;
      }
    }

    if (myOutcome == 'Y') {
      const myMove = oppMoveValue.draws;
      const myMoveValue = myMoveValues.get(myMove);
      if (myMoveValue != undefined) {
        score = score + myMoveValue?.score + drawScore;
      }
    }

    if (myOutcome == 'Z') {
      const myMove = oppMoveValue.loses;
      const myMoveValue = myMoveValues.get(myMove);
      if (myMoveValue != undefined) {
        score = score + myMoveValue?.score + winScore;
      }
    }
  }
});

console.log(score);
