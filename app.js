let letters = "abcdefghijklmnopqrstuvwxyz++#";
let ArrayLetters = Array.from(letters);
// console.log(ArrayLetters);

let lettersContainer = document.querySelector(".container .row .letters");

// console.log(ArrayLetters[Math.floor(Math.random() * ArrayLetters.length)]);

ArrayLetters.forEach((letter) => {
  let span = document.createElement("span");
  let letterText = document.createTextNode(letter);
  span.appendChild(letterText);
  span.classList.add("letter-box");
  lettersContainer.appendChild(span);
});
const word = {
  programing: [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "C++",
    "C",
    "Go",
    "R",
    "PHP",
    "TypeScript",
  ],
  people: ["Ahmed", "Islam", "Shebl", "Ali", "Mohamed", "Hossam"],
  movies: [
    "Forrest Gump",
    "Inception",
    "The Shawshank Redemption",
    "Blade Runner 2049",
    "Aladdin",
    "Dallas Buyers Club",
  ],
  countries: ["Egypt", "Algeria", "Morocco", "Libya", "Jordan", "Palestinian"],
};

// console.log(Object.keys(word));
let propArray = Object.keys(word);
let randomPropNumber = Math.floor(Math.random() * propArray.length);
///////
let randomPropName = propArray[randomPropNumber];

let randomValueNumber = Math.floor(
  Math.random() * word[propArray[randomPropNumber]].length
);
///////
let randomValueName = word[propArray[randomPropNumber]][randomValueNumber];
console.log(randomValueName);
console.log(randomPropName);
document.querySelector(".info .category span").innerHTML = randomPropName;

let letterGuess = document.querySelector(".letter-guess");
let theWordLetters = Array.from(randomValueName);
// console.log(theWordLetters);
theWordLetters.forEach((l) => {
  let spanLetter = document.createElement("span");
  if (l == " ") {
    spanLetter.classList.add("space");
  }
  // let Letter = document.createTextNode(l);
  letterGuess.appendChild(spanLetter);
});

let wrongAttempts = 0;
let theDraw = document.querySelector(".hangman-draw");

function endGame() {
  let div = document.createElement("div");
  let text = document.createTextNode(
    `Game over ,The word is ${randomValueName}`
  );
  div.appendChild(text);
  div.classList.add("popup");
  document.body.appendChild(div);
}
document.addEventListener("click", (e) => {
  if (e.target.className === "letter-box") {
    let flag = false;
    e.target.classList.add("clicked");
    let letterClicked = e.target.innerHTML.toLowerCase();
    theWordLetters.forEach((wl, index) => {
      if (letterClicked == wl.toLowerCase()) {
        flag = true;
        let spans = document.querySelectorAll(".letter-guess span");
        spans[index].innerHTML = wl;
        spans[index].classList.add("get");
      }
    });
    if (!flag) {
      wrongAttempts++;
      if (wrongAttempts == 8) {
        lettersContainer.classList.add("finished");
        endGame();
      }
      theDraw.classList.add(`wrong-${wrongAttempts}`);
    } else {
    }
  }
});
