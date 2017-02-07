var quotes = [];

function addQuote(content, author) {
  for (var i = 0; i < quotes.length; i++) {
    if (quotes[i].content == content && quotes[i].author == author) {
      return "Already got that quote. Skipping.";
    }
  }
  quotes.push({ "content": content, "author": author });
}


addQuote("Friends don't lie.", "Eleven");
addQuote('Fury forges will.', 'Sonmi-451');
addQuote('Here is a commandment for you: seek happiness in sorrow. Work, work tirelessly.', 'Fyodor Dostoevsky');
addQuote('A life oriented to leisure is in the end a life oriented to death--the greatest leisure of all.', 'Anne Lamott');
addQuote('The worst thing that could possibly happen to anybody would be to not be used for anything by anybody.', 'Kurt Vonnegut');
addQuote("One should use other people's stupidity to have fun.", "Nassim Nicholas Taleb");
addQuote("If you take risks and face your fate with dignity, there is nothing you can do that makes you small; if you don't take risks, there is nothing you can do that makes you grand, nothing.", "Nassim Nicholas Taleb");
addQuote("The universe is a cruel, uncaring void. The key to being happy isn't a search for meaning. It's to just keep yourself busy with unimportant nonsense and eventually you'll be dead.", "Mr. Peanutbutter");
addQuote("Every man should lose a battle in his youth, so he does not lose a war when he is old.", "George R.R. Martin");
addQuote("At least a thief has t' be brave and clever and quick. A kneeler only has t' kneel.", "George R.R. Martin");
addQuote("Avoidance of boredom is the only worthy mode of action. Life otherwise is not worth living.", "Nassim Nicholas Taleb");
addQuote("Avoidance of small mistakes makes the larger ones more severe.", "Nassim Nicholas Taleb");
addQuote("Much of modern life is preventable chronic stress injury.", "Nassim Nicholas Taleb");
addQuote("That's the problem with life: either you know what you want and you don't get what you want, or you get what you want and then you don't know what you want.", "Diane Nguyen");
