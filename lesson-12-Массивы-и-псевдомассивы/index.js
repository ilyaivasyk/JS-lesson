const arr = [1, 2, 5, 4, 6];

// arr.pop(); //delete last element
// arr.push(10); //add element to end arr
// console.log(arr.length);// last index + 1

// for (let i = 0; i < arr.length; i++ ) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} inside array ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ")
// products.sort();
// console.log(products.join('; '));
arr.sort(compareNum)
console.log(arr);

function compareNum(a, b) {
  return a - b;
}
