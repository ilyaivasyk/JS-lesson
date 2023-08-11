const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  wrapper = document.querySelector(".wrapper"),
  hearts = document.querySelectorAll(".heart"),
  // hearts = wrapper.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart");

// box.style.background = "blue";
// box.style.width = "500px";

// btns[1].style.borderRadius = "100%";

circles[0].style.background = "red";

// box.style.cssText = "background-color: yellow; width: 300px";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// } // no recomend

// hearts.forEach((items) => {
//   items.style.backgroundColor = "blue";
// });


const div = document.createElement('div');
// const text = document.createTextNode('i`am here');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);



// document.body.append(div);
// document.querySelector(".circles").append(div);//adds an element to the end

// document.querySelector(".circles").prepend(div);
//adds an element to the beginning


// wrapper.insertBefore(div, hearts[1]); //last time
//------------
//new style
// hearts[0].before(div); //adds an element to the beginning of the selected element

// hearts[0].after(div);
//adds an element to the end of the selected element


// wrapper.replaceChild(circles[0],hearts[0])//last time
//------------
//new style
// circles[0].remove();

// hearts[0].replaceWith(circles[0]);


// div.innerHTML = "<h1>hello</h1>";
// div.textContent = "<h1>Hello</h1>"; just text

div.innerHTML = "<h1>hello</h1>";

// div.insertAdjacentHTML('beforebegin', '<h2>hello</h2>');

// div.insertAdjacentHTML('afterbegin', '<h2>hello</h2>');

//div.insertAdjacentHTML("beforeend", "<h2>hello</h2>");
div.insertAdjacentHTML('afterend', "<h2>hello</h2>");




