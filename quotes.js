var quotes = []

function addQuote(content, author) {
  for (var i = 0; i < quotes.length; i++) {
    if (quotes[i].content == content && quotes[i].author == author) {
      return "Already got that quote. Skipping."
    }
  }
  quotes.push({ "content": content, "author": author })
}

// ### TELEVISION ###
// Stranger Things
addQuote("Friends don't lie.", "Eleven (Stranger Things)")
addQuote("Mornings are for coffee and contemplation.", "Chief Hopper (Stranger Things)")
addQuote("You shouldn't like things because people tell you you're supposed to.", "Jonathan Byers (Stranger Things)")
// BoJack Horseman
addQuote("The universe is a cruel, uncaring void. The key to being happy isn't a search for meaning. It's to just keep yourself busy with unimportant nonsense and eventually you'll be dead.", "Mr. Peanutbutter (BoJack Horseman)")
addQuote("That's the problem with life: either you know what you want and you don't get what you want, or you get what you want and then you don't know what you want.", "Diane Nguyen (BoJack Horseman)")
addQuote("Close is a made up thing by Steven Spielberg to sell movie tickets. It, like true love and the Munich Olympics, doesn't exist in the real world. The only thing to do is just to keep living forward.", "BoJack Horseman (BoJack Horseman)")
addQuote("After I almost drowned, I decided I would never again be weaker than water, so I became a lifeguard. On my first day of training, my instructor told me that there are going to be times when you'll see someone in trouble. You're going to want to rush in there and do whatever you can to save them, but you have to stop yourself. Because there are some people you can't save. 'Cause those people will thrash and struggle, and try to take you down with them.", "Ana Spanakopita (BoJack Horseman)")
// Community
addQuote("When the world gets bad enough Abed, the good go crazy. But the smart? They go bad.", "Evil Abed (Community)")
// Rick and Morty
addQuote("Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV.", "Morty (Rick and Morty)")
addQuote('What people call "love" is just a chemical reaction that compels animals to breed. It hits hard, then it slowly fades, leaving you stranded in a failing marriage. I did it. Your parents are gonna do it. Break the cycle. Rise above. Focus on science.', 'Rick Sanchez (Rick and Morty)')
addQuote("I'll tell you how I feel about school, Jerry: it's a waste of time. Bunch of people runnin' around bumpin' into each other, got a guy up front says, '2 + 2,' and the people in the back say, '4.' Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or something'. I mean, it's not a place for smart people, Jerry. I know that's not a popular opinion, but that's my two cents on the issue.", 'Rick Sanchez (Rick and Morty)')
addQuote("Sometimes science is a lot more art than science. A lot of people don't get that.", "Rick Sanchez (Rick and Morty)")

// ### BOOKS ###
// Cloud Atlas
addQuote('Fury forges will.', 'Sonmi-451 (Cloud Atlas) David Mitchell')
// Brothers Karamazov
addQuote('Here is a commandment for you: seek happiness in sorrow. Work, work tirelessly.', 'Elder Zosima (Brothers Karamazov) Fyodor Dostoevsky')
// ASOIAF
addQuote("Every man should lose a battle in his youth, so he does not lose a war when he is old.", "Victarion Greyjoy (A Feast for Crows) George R.R. Martin")
addQuote("At least a thief has t' be brave and clever and quick. A kneeler only has t' kneel.", "Ygritte (A Storm of Swords) George R.R. Martin")
// Bird-by-Bird
addQuote('A life oriented to leisure is in the end a life oriented to death--the greatest leisure of all.', 'Anne Lamott (Bird-by-Bird)')
// Sirens of Titan
addQuote('The worst thing that could possibly happen to anybody would be to not be used for anything by anybody.', 'Beatrice Rumfoord (The Sirens of Titan) Kurt Vonnegut')
addQuote("Anybody who has traveled [so] far on a fool's errand has no choice but to uphold the honor of fools by completing the errand.", "Salo (The Sirens of Titan) Kurt Vonnegut")
addQuote("A purpose of human life, no matter who is controlling it, is to love whoever is around to be loved.", "Malachi Constant (The Sirens of Titan) Kurt Vonnegut")
addQuote("Just because something feels better than anything else, that don't mean it's good for you.", "Boaz (The Sirens of Titan) Kurt Vonnegut")
// Deacons of Defense
addQuote("New laws changed nothing in Jonesboro, but new men were changing everything.", "Lance Hill (The Deacons for Defense)")

// ### GENERAL WISDOMS ###
// Taleb
addQuote("One should use other people's stupidity to have fun.", "Nassim Nicholas Taleb")
addQuote("We are mere animals in need of lower forms of tricks, not lectures.", "Nassim Nicholas Taleb")
addQuote("If you take risks and face your fate with dignity, there is nothing you can do that makes you small if you don't take risks, there is nothing you can do that makes you grand, nothing.", "Nassim Nicholas Taleb")
addQuote("Avoidance of boredom is the only worthy mode of action. Life otherwise is not worth living.", "Nassim Nicholas Taleb")
addQuote("Avoidance of small mistakes makes the larger ones more severe.", "Nassim Nicholas Taleb")
addQuote("Much of modern life is preventable chronic stress injury.", "Nassim Nicholas Taleb")
// Shia LaBeouf
addQuote("JUST DO IT", "Shia LaBeouf")
// Elon Musk
addQuote("When something is important enough, you do it even if the odds are not in your favor.", "Elon Musk")
addQuote("Always bear in mind: entropy is not on your side.", "Elon Musk")
addQuote("I don't spend my time pontificating about high-concept things; I spend my time solving engineering and manufacturing problems.", "Elon Musk")
addQuote("The limiting factor is the engineering. And if you want to advance civilization, you must address the limiting factor.", "Elon Musk")
// Albert Einstein
addQuote("If we knew what it was we were doing, it would not be called research, would it?", "Albert Einstein")
addQuote("Reality is merely an illusion, albeit a very persistent one.", "Albert Einstein")
// Linus Torvalds
addQuote("Software is like sex: it's better when it's free.", "Linus Torvalds")
// Kurt Vonnegut
addQuote("I tell you, we are here on Earth to fart around, and don't let anybody tell you different.", "Kurt Vonnegut")
addQuote("We are what we pretend to be, so we must be careful about what we pretend to be.", "Kurt Vonnegut")
// George Orwell
addQuote("In a time of universal deceit, telling the truth is a revolutionary act.", "George Orwell")
// Isaac Asimov
addQuote("Violence is the last refuge of the incompetent.", "Isaac Asimov")
addQuote('The most exciting phrase to hear in science, the one that heralds new discoveries, is not "Eureka!", but "That\'s funny..."', 'Isaac Asimov')
addQuote("Life is pleasant. Death is peaceful. It's the transition that's troublesome.", "Isaac Asimov")
addQuote("Self-education is, I firmly believe, the only kind of education there is.", "Isaac Asimov")
addQuote("People who think they know everything are a great annoyance to those of us who do.", "Isaac Asimov")
addQuote("I do not fear computers. I fear the lack of them.", "Isaac Asimov")
// Aristotle
addQuote("We are what we repeatedly do. Excellence, then, is not an act, but a habit.", "Aristotle")
addQuote("It is the mark of an educated mind to be able to entertain a thought without accepting it.", "Aristotle")
addQuote("Happiness depends upon ourselves.", "Aristotle")
addQuote("Poverty is the parent of revolution and crime.", "Aristotle")
addQuote("The educated differ from the uneducated as much as the living from the dead.", "Aristotle")
// Bo Burnham
addQuote('People come to me all the time, all the time, they say the same thing: "Bo, you\'re an artist--how do we fix Africa?"', 'Bo Burnham')
addQuote("Quotes are for dumb people who can't think of something intelligent to say on their own.", "Bo Burnham")
addQuote("Laughter is the best medicine. Y'know, besides medicine.", "Bo Burnham")
// Lil Wayne
addQuote("Real G's move in silence like lasagna.", "Lil Wayne")
// Nicki Minaj
addQuote("If I'm fake I ain't notice 'cause my money ain't.", "Nicki Minaj")
// Bill Hicks
addQuote("I don't mean to sound mean, bitter, or cruel, but I am, so that's how it comes out.", "Bill Hicks")
addQuote("Watching television is like taking black spray paint to your third eye.", "Bill Hicks")
addQuote("Life is only a dream and we are the imagination of ourselves.", "Bill Hicks")
// Groucho Marx
addQuote("The secret of life is honesty and fair dealing. If you can fake that, you've got it made.", "Groucho Marx")
addQuote("I intend to live forever, or die trying.", "Groucho Marx")
addQuote("Quote me as saying I was mis-quoted.", "Groucho Marx")
// Lucille Ball
addQuote("Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.", "Lucille Ball")
addQuote("The secret to staying young is to live honestly, eat slowly, and lie about your age.", "Lucille Ball")
addQuote("The more things you do, the more things you can do.", "Lucille Ball")
addQuote("A man who correctly guesses a woman's age may be smart, but he's not very bright.", "Lucille Ball")
// George Carlin
addQuote("I have as much authority as the Pope, I just don't have as many people who believe it.", "George Carlin")
// John D. Rockefeller
addQuote("It is chiefly to my confidence in men and my ability to inspire their confidence in me that I owe my success in life.", "John D. Rockefeller")
