

console.log(typeof(String(null))); //string type

console.log(typeof(null + '')); //string type

const num = 5;
console.log("https://vk.com/catalog/" + num); //string type

const fontSize = 26 + 'px';

// to number
console.log(typeof(Number('4')));

console.log(typeof(+'5'));

console.log(typeof(parseInt("15px", 10)));

let answ = +prompt("hello", "");

//to boolean

//0 , '', null, undefine, NaN -false
let switcher = null; //fsle
if (switcher) {
  console.log('Working...');
} //no working

let switchers = 1; //true
if (switchers) {
  console.log('Working...');
}

console.log(typeof(Boolean('4')));

console.log(typeof(!!"34333"));