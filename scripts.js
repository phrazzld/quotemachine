var quotecontent = document.getElementById("quote");
var quoteauthor = document.getElementById("author");

function nextQuote() {
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  quotecontent.innerHTML = "\"" + quote.content + "\"";
  quoteauthor.innerHTML = quote.author;
  obliterateTwitterLink();
  twttr.ready(function() {
    twttr.widgets.createShareButton(
        '/',
        document.getElementById('twitterlink-wrapper'),
        {
          text: "\"" + quote.content + "\"" + " --" + quote.author,
          size: "large"
        }
        );
  });
}

function obliterateTwitterLink() {
  var twitterlink = document.getElementById("twitterlink-wrapper");
  twitterlink.innerHTML = "";
}

var button = document.getElementById("next-quote");

button.onclick = function() {
  nextQuote();
}

nextQuote();
