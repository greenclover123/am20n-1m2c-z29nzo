var greeting = [
  "a straight to the point g-me website", 
  "we're so back",
  "guitar",
  "we saw a rodeo",
  "are we finally home yet?",
  "but it's sad",
  "hey hey hey"
];

var randomGreeting = Math.floor(Math.random() * greeting.length);

$('#message').text(greeting[randomGreeting]);
