const btn = document.querySelector("button");
overlay = document.querySelector(".overlay");

// btn.onclick = function() {
// alert('click');
// };
//no recomend

// btn.addEventListener('click', () => {
//   alert('click');
// });

//btn.addEventListener('mouseenter', (e) => {
// console.log('hover');
// console.log(e.target);
//target can edit element
// e.target.remove();
//});

// const deleteElement = (e) => {
//   //  e.target.remove();
//   console.log(e.target);
// }

// btn.addEventListener('click', deleteElement);

// let i = 0;

// const deleteElement = (e) => {
//   console.log(e.target);
//   i++;
//   if (i == 2) {
//     btn.removeEventListener("click", deleteElement);
//remove eventList(stop)
// }
//   console.log(i);
// };

// btn.addEventListener("click", deleteElement);

const deleteElement = (e) => {
  e.target.remove();
}

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

// const link = document.querySelector('a');

// link.addEventListener('click', (e) => {
//   e.preventDefault();//відміняє дефолтні дії браузера
//   console.log(e.target);
// });

// ----------------- standart function
// link.addEventListener("click", function(e) {
//   e.preventDefault(); //відміняє дефолтні дії браузера
// });
// -----------------

const ementInfo = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
};

const btns = document.querySelectorAll(".buttons");

btns.forEach(item => {
  item.addEventListener("click", ementInfo, {once: true});
});
