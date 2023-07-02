// let a = 5,
// b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// }

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
  let objCopy = {};
  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
}

const newNumbes = copy(numbers);
newNumbes.a = 10;

console.log(newNumbes);
console.log(numbers);

const add = {
  d: 17,
  e: 20
}

const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);


const video = ['youtuber', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'blogger', 'livejournal'];
const internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

const num = [2, 5, 7];
console.log(...num);

const array = ["a", "b"];

const newArray = [...array];

const q = {
  one: 1,
  two: 2 
};

const newObj = {...q};
console.log(q);
console.log(newObj);