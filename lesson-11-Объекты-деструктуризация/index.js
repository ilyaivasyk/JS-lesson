const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function() {
    console.log("test");
  }
};



// delete options.name;

// console.log(options);
// options.name = ['test'];
// console.log(options);

for (let key in options) {
  if(typeof(options[key]) === 'object') {
    for(let i in options[key]) {
      console.log(`ключ ${i} має значення ${options[key][i]}`);
    }
  }
  else {
 console.log(`value ${key} = ${options[key]}`);
  }
}

// console.log(Object.keys(options).length);

// options.makeTest();



//деструктуризація об'єктів 
const {border,bg} = options.colors;
console.log(border);
