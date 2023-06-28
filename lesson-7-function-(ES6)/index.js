let num = 20;
function showFirstMassage(text) {
  console.log(text);
  let num = 10;
  console.log(num);
}

showFirstMassage("Hello World!");
console.log(num);

// function culc(a,b) {
//   return (a + b);
// } //function declaration  можна викликати до створення



// const logger = function() {
//   console.log("Hello");
// };
//must be ;
//function expression  можна викликати тільки після створення
// 

//line function ()=> не має свого контекста(this)
// const calc = (a, b) => {
//   return a + b;
// }

//Еще раз про аргументы функций
const usdCurr = 37;
function convert(amount, curr) {
  console.log(curr * amount);
}
convert(500 , usdCurr); 