var quotecontent = document.getElementById("quote");
var quoteauthor = document.getElementById("author");

var quotes = [];

function addQuote(content, author) {
  quotes.push({ "content": content, "author": author });
}

function nextQuote() {
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  quotecontent.innerHTML = quote.content;
  quoteauthor.innerHTML = quote.author;
}

var button = document.getElementById("next-quote");

button.onclick = function() {
  nextQuote();
}

addQuote("Friends don't lie.", "Eleven");
addQuote("Fury forges will.", "Sonmi-451");
addQuote("Here is a commandment for you: seek happiness in sorrow. Work, work tirelessly.", "Fyodor Dostoevsky");
addQuote("A life oriented to leisure is in the end a life oriented to death--the greatest leisure of all.", "Anne Lamott");
addQuote("New laws changed nothing in Jonesboro, but new men were changing everything.", "Lance Hill");
addQuote("Fools exist for the intelligent man's profit.", "Fyodor Dostoevsky");
addQuote("In most cases, people, even wicked people, are far more naive and simple-hearted than one generally assumes.", "Fyodor Dostoevsky");
addQuote("The fact of the matter is that there will be nothing learned from any challenge in which we don't try our hardest. Growth comes at the point of resistance. We learn by pushing ourselves and finding what really lies at the outer reach of our abilities.", "Josh Waitzkin");
addQuote("Don't worry about people stealing your ideas. If your ideas are any good, you'll have to ram them down people's throats.", "Howard Aiken");
addQuote("This I believe: that the free, exploring mind of the individual human is the most valuable thing in the world. And this I would fight for: the freedom of the mind to take any direction it wishes, undirected. And this I must fight against: any idea, religion, or government which limits or destroys the individual. This is what I am and what I am about.", "John Steinbeck");
addQuote("The worst thing that could possibly happen to anybody would be to not be used for anything by anybody.", "Kurt Vonnegut");
addQuote("You could make a poultice out of mud to cool a fever. You could plant seeds in mud and grow a crop to feed your children. Mud would nourish you, where fire would only consume you, but fools and children and young girls would choose fire every time.", "George R.R. Martin");
addQuote("Wubba lubba dub dub!", "Rick Sanchez");
addQuote("A reader lives a thousand lives before he dies. The man who never reads lives only one.", "George R.R. Martin");
addQuote("At least a thief has t' be brave and clever and quick. A kneeler only has t' kneel.", "George R.R. Martin");
addQuote("If you take risks and face your fate with dignity, there is nothing you can do that makes you small; if you don't take risks, there is nothing you can do that makes you grand, nothing.", "Nassim Nicholas Taleb");
addQuote("The excess energy released from overreaction to setbacks is what innovates!", "Nassim Nicholas Taleb");
addQuote("I am certain that underneath their topmost layers of frailty men want to be good and want to be loved. Indeed, most of their vices are attempted short cuts to love. When a man comes to die, no matter what his talents and influence and genius, if he dies unloved his life must be a failure to him and his dying a cold horror. It seems to me that if you or I must choose between two courses of thought or action, we should remember our dying and try so to live that our death brings no pleasure to the world.", "John Steinbeck");
addQuote("Mild success can be explainable by skills and labor. Wild success is attributable to variance.", "Nassim Nicholas Taleb");
addQuote("I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.", "Frank Herbert");
addQuote("One should use people's stupidity to have fun.", "Nassim Nicholas Taleb");
addQuote("Avoidance of small mistakes makes the larger ones more severe.", "Nassim Nicholas Taleb");
addQuote("Wind extinguishes a candle and energizes fire.", "Nassim Nicholas Taleb");
addQuote("Much of what other people know isn't worth knowing.", "Nassim Nicholas Taleb");
addQuote("The universe is a cruel, uncaring void. The key to being happy isn't a search for meaning. It's to just keep yourself busy with unimportant nonsense and eventually you'll be dead.", "Mr. Peanutbutter");
addQuote("That's the problem with life: either you know what you want and you don't get what you want, or you get what you want and then you don't know what you want.", "Diane Nguyen");
addQuote("Much of modern life is preventable chronic stress injury.", "Nassim Nicholas Taleb");
addQuote("Every man should lose a battle in his youth, so he does not lose a war when he is old.", "George R.R. Martin");
addQuote("Avoidance of boredom is the only worthy mode of action. Life otherwise is not worth living.", "Nassim Nicholas Taleb");

nextQuote();
