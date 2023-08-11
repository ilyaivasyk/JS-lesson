//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcansel

window.addEventListener("DOMContentLoaded", () => {

  const box = document.querySelector(".box");
  box.addEventListener('touchstart', (e) => {
    console.log("start");
    console.log(e.targetTouches);
  }); 

  // box.addEventListener('touchmove', (e) => {
  //   console.log("move");
  // }); 

  // box.addEventListener('touchend', (e) => {
  //   console.log("End");
  // }); 

});