// let number = 5;
// debugger;

// // function logNumber() {
// //   console.log(number);
// // }

// // number = 6;

// // logNumber();//6

// function logNumber() {
//   // let number = 4;
//   // debugger;
//   console.log(number);
// }

// number = 6;

// logNumber();
// debugger; //4


//no working 
function createCounter() {
  let counter = 0;
  const myFunction = function () {debugger
    counter = counter + 1;debugger
    return counter;debugger
  }
  return myFunction();
}
debugger
////
  const increment = createCounter();debugger
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger
   
console.log(c1, c2, c3);debugger
// no working

for(let i = 0; i< 9; i++) {
  for (let j = 0; j < 9; j++) {
    let num = 3;
    console.log(num); //yes
  }
  console.log(num); //no working
}