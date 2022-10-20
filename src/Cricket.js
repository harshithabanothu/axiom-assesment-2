class Cricketmatch {
  constructor(currentscore, currentover, target, totalovers) {
    this.currscore = currentscore;
    this.currover = currentover;
    this.target = target;
    this.totalovers = totalovers;
  }
  requirerunrate() {
    let neededruns = this.target - this.currscore;
    let ballsleft = this.remainingballs();
    return (neededruns * 6) / ballsleft;
  }
  remainingballs() {
    let totalballs = this.totalovers * 6;
    let ballsCompleted =
      Math.floor(this.currover) * 6 + 10 * (this.currover % 1);
    return totalballs - ballsCompleted;
  }
  displayresult() {
    let neededruns = this.target - this.currscore;
    return `Need ${neededruns} runs in ${this.remainingballs()} balls \n Required runrate: ${this.requirerunrate()}`;
  }
}

class T20 extends Cricketmatch {
  constructor(currentscore, currentover, target) {
    super(currentscore, currentover, target, 20);
  }
}
class T10 extends Cricketmatch {
  constructor(currentscore, currentover, target) {
    super(currentscore, currentover, target, 10);
  }
}
class ODI extends Cricketmatch {
  constructor(currentscore, currentover, target) {
    super(currentscore, currentover, target, 50);
  }
}
class Test extends Cricketmatch {
  constructor(currentscore, currentover, target) {
    super(currentscore, currentover, target, 90);
  }
}

export { T20, T10, ODI, Test };

//This is an example
let myMatch = new T20(120, 15.5, 170);
console.log(myMatch.displayresult());
