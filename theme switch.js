let themeswitch = document.querySelector('.theme-container');
let circle = document.querySelector('.theme-circle-container');
let modeDisplay = document.getElementById('mode-display');
let body = document.body;
let mode = "light";

// theme switch logic 
themeswitch.addEventListener('click', () => {
  circle.classList.toggle('slider');
  if (mode === "light") {
    mode = "dark";
    themeswitch.classList.add('dark');
    circle.classList.add('dark-circle');
    body.style.backgroundColor = "#1B1A19";
    body.style.color = "white";
  } else {
    mode = "light";
    themeswitch.classList.remove('dark');
    circle.classList.remove('dark-circle');
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
  document.getElementById('mode-display').textContent = mode;
});

// timer logic
const time = document.querySelector('.timer');

setInterval(() => {
  let now = new Date();
  time.textContent = now.toLocaleTimeString();
}, 1000);

// quotes logic 
const generateQuote = "https://dummyjson.com/quotes/random";

fetch(generateQuote)
  .then((response) => response.json())
  .then((data) => {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    quoteText.textContent = `"${data.quote}"`;
    quoteAuthor.textContent = `- ${data.author}`;
  });