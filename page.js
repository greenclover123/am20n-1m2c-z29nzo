var greeting = [
  "a straight to the point g-me website", 
  "we're so back",
  "guitar",
  "we saw a rodeo",
  "are we finally home yet?",
  "but it's sad",
  "hey hey hey",
  "i have no huzz",
  "the creator of this website sucks at rivals p2w mutt",
  "sasageyo",
  "yhoo its a labubu",
  "i like big black rocks",
  "play clash"
];

var randomGreeting = Math.floor(Math.random() * greeting.length);

$('#message').text(greeting[randomGreeting]);
