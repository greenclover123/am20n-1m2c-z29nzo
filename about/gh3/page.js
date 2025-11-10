var greeting = [
  "a straight to the point g-me website", 
  "owah",
  "happy birthday!!!!!!!!!",
  "dreams from yesterday",
  "all of our yesterdays",
  "skyless moon",
  "on the level"
];

var randomGreeting = Math.floor(Math.random() * greeting.length);

$('#hello').text(greeting[randomGreeting]);


