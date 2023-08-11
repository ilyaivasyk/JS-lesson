function first() {
  //Do something
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

// first();
// second();

function learnJS(lang, callback) {
  console.log(`i learn ${lang}`);
  callback();
}

learnJS("JS", function () {
  console.log("i complete this lesson");
});
