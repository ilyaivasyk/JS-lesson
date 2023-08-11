let str = "some";

// let str_obj = new String(str);

// console.log(typeof str);
// console.log(typeof str_obj);

// console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor:100,
  sayHello: () => {
    console.log("hi");
  }
};

const jonh = Object.create(soilder);

jonh.__proto__ = soldier;

console.log(jonh.armor);
jonh.sayHello();
Object.setPrototypeOf(jonh, soilder);


