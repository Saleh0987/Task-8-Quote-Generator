let changeBtn = document.getElementById("changeBtn");
let quoteOutput=document.getElementById("quoteOutput");
let quoteAuthor=document.getElementById("quoteAuthor");

function generateQuote() {

 let quotes =
  [
   { quote: `“Be yourself; everyone else is already taken.”`, author: `Oscar Wilde` },
    {quote: `“So many books, so little time.”`, author: `Frank Zappa` },
    { quote: `“A room without books is like a body without a soul.”`, author: `Marcus Tullius Cicero` },
   { quote: `“You only live once, but if you do it right, once is enough.”`, author: `Mae West` },
   {
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    author: `Bernard M. Baruch`},
   { quote: `“Be the change that you wish to see in the world.”`, author: `Mahatma Gandhi` },
   { quote: `“It is better to be hated for what you are than to be loved for what you are not.”`, author: `Andre Gide, Autumn Leaves` },
    ]

    let random = Math.trunc(Math.random() * quotes.length);

    quoteOutput.innerHTML=quotes[random].quote;
    authorOutput.innerHTML=quotes[random].author;
}

changeBtn.addEventListener("click", generateQuote);