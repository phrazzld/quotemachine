var quotecontent = document.getElementById("quote");
var quoteauthor = document.getElementById("author");

function nextQuote() {
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  quotecontent.innerHTML = quote.content;
  quoteauthor.innerHTML = quote.author;
}

var button = document.getElementById("next-quote");

button.onclick = function() {
  nextQuote();
}

nextQuote();
