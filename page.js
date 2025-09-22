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
  "i like big black rocks",
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
  "everything is quiet"
];

var randomGreeting = Math.floor(Math.random() * greeting.length);

$('#message').text(greeting[randomGreeting]);
