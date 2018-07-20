const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.towers = [[1,2,3], [], []];
    
  }
  
  run (completionCallback){
    while (!this.isWon()){
      this.promptMove();
      
    }
    completionCallback();
  }
  
  
  promptMove() {
    // console.log(`[${this.towers[0]}], [${this.towers[1]}], [${this.towers[2]}]`);
    reader.question("Where do you want to pass a disc from?", (res) => {
      // console.log(`you want to move from tower ${startTowerIDx}`);
      reader.question("Where do you want to pass a disc to?", (res1) => {
        // console.log(`you want to move to tower ${endTowerIdx}`);
        let startTowerIDx = parseInt(res);
        let endTowerIdx = parseInt(res1);
        // if (this.towers[startTowerIDx].length === 0) {
        //   this.promptMove();
        // } else if (this.towers[endTowerIdx].length > 0 && this.towers[startTowerIDx][0] > this.towers[endTowerIdx][0]) {
        //   this.promptMove();
        // }
        if (!isValid(startTowerIDx, endTowerIdx)) {
          promptMove();
        }
        this.move(startTowerIDx, endTowerIdx);
      });
    });
    reader.close();
  }
  
  isValid(startTowerIDx, endTowerIdx){
    if (this.towers[startTowerIDx].length === 0) {
      return false;
    } else if (startTowerIDx === endTowerIdx) {
      return false;
    } else if (this.towers[endTowerIdx].length > 0 && this.towers[startTowerIDx][0] > this.towers[endTowerIdx][0]) {
      return false;
    }
    return true;
  }
  
  move(startTowerIDx, endTowerIdx) {
    let piece = this.towers[startTowerIDx].shift();
    this.towers[endTowerIdx].unshift(piece);
    this.print();
  }
  
  print(){
    console.log(JSON.stringify(this.towers));
  }
  
  isWon(){
    return this.towers[1].length === 3 || this.towers[2].length === 3;
  }
}

let game = new Game();
game.run(function() {
  console.log("Congrats you won!");
});
// game.promptMove();
// game.print();