var greeting = [
  "a straight to the point g-me website", 
  "we're so back",
  "guitar",
  "we saw a rodeo",
  "are we finally home yet?",
  "but it's sad",
  "hey hey hey",
  "no hard feelings but these feelings harder",
  "the creator of this website sucks at rivals p2w mutt",
  "sasageyo",
  "i think its all a ruse",
  "flash",
  "play clash",
  "now whos there left to blame?",
  "was it real or just fantasy?",
  "you arent dreaming anymore",
  "relax, take it easy",
  "did i miss the last train home?",
  "chip up on my shoulder",
  "goodbye weekend, so long darlin'",
  "these days i'd much rather be on my own",
  "take my hand with virtue",
  "the more i come to know myself",
  "figure it figure it figure it out",
  "baby blue, i know how things have changed for you",
  "everything is quiet",
  "life of the party, to think i could've almost died",
  "no after-over, this is it, done",
  "wait a minute, wait a minute, wait a goddamn minute",
  "you already did it! see? its already over! yay! you did it!",
  "okay, we going slow, we going slow down",
  "bittersweet cake",
  "photoshot fresh, lookin' like wealth",
  "sophisticated ignorance",
  "w fraps??",
  "give some time for ya self once in a while",
  "your my kind of woman",
  "time continues",
  "taking my time to be",
  "one with myself",
  "people in life are like seasons !",
  "straight from shibuya",
  "throw in some hot cars",
  "but they cant cop cars without seeing cop cars",
  "nothing is ever promised tomorrow or today",
  "im so drowesxy",
  "<a href='/saved.html'>CLICK to be pure!</a>",
  "be your own best friend!",
  "whos gonna hold ya bones",
  "every snitch is a costume",
  "a picture of a tree",
  "no two the same, breathing art hibits",
  "its almost over",
  "i wishhhh",
  "give me a hint of love!"
];

var randomGreeting = Math.floor(Math.random() * greeting.length);

$('#message').html(greeting[randomGreeting]);



var greeting = [
  "think we couldnt find this page", 
  "how did you get here",
  "interestin, theres nothing here",
  "call me once you've had enough",
  "404 means that nothing exists here",
  "think this page dont exist man",
  "did you type it wrong",
  "of course you did"
];

var randomGreeting = Math.floor(Math.random() * greeting.length);

$('#error').text(greeting[randomGreeting]);