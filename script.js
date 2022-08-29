const name = prompt("Welcome to GC mini golf! What is your name. ");
console.log(name);
const numberOfHoles = prompt(
  `Hello, ${name}! Would you like to play 3 or 6 holes?`
);

let score = 0;
let par = 0;

if (numberOfHoles == "3") {
  for (let i = 0; i < 3; i++) {
    score += parseInt(prompt(`enter score for hole ${i + 1}: (Par is 3)`));
  }
  par = 9;
  if (score > par) {
    console.log(`Nice try, ${name}... Your total par was: +${score - par}`);
  }
  if (score < par) {
    console.log(`Great job, ${name}! Your total par was: -${par - score}`);
  }
  if (score == par) {
    console.log(`Good game, ${name}. Your total par was: 0`);
  }
}

if (numberOfHoles == "6") {
  for (let i = 0; i < 6; i++) {
    score += parseInt(prompt(`enter score for hole ${i + 1}:`));
  }
  par = 18;
  if (score > par) {
    console.log(`Nice try, ${name}... Your total par was: +${score - par}`);
  }
  if (score < par) {
    console.log(`Great job, ${name}! Your total par was: -${par - score}`);
  }
  if (score == par) {
    console.log(`Good game, ${name}. Your total par was: 0`);
  }
}
