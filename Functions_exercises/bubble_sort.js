// function teaAndBiscuits () {
//   reader.question('Would you like some tea?', function (res) {
//     console.log(`You replied ${res}.`);
//     reader.question('Would you like some biscuits?', function (res2) {
//       console.log(`You replied ${res2}.`);
// 
//       const first = (res === 'yes') ? 'do' : 'don\'t';
//       const second = (res2 === 'yes') ? 'do' : 'don\'t';
// 
//       console.log(`So you ${first} want tea and you ${second} want biscuits.`);
//       reader.close();
//     });
//   });
// }

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} greater than ${el2}?`, function (res) {
    if (res === "yes"){
      // console.log("Your response was yes.");
      callback(true);
    } else {
      callback(false);
    }
  });
}

// askIfGreaterThan(2,1, res => console.log(`${res}`));

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  
  
  if (i === arr.length-1){
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i+1], (bool) => {
      if (bool === true){
        madeAnySwaps = true;
        // console.log(`${madeAnySwaps}`);
        [arr[i],arr[i+1]] = [arr[i+1], arr[i]];
        
        // console.log("you have made swaps");
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      } else {
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  }
  
    
    
  
}

// innerBubbleSortLoop([3,1,2], 0, false, outerBubbleSortLoop);

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  console.log("Start");
  function outerBubbleSortLoop(madeAnySwaps=true) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps === true){
      console.log("Begin Bubble Sort Loop");
      innerBubbleSortLoop(arr , 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop();

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([88,75,1,3,100], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});