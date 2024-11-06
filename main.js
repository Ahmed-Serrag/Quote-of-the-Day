var quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  { quote: "Get busy living or get busy dying.", author: "Stephen King" },
  {
    quote:
      "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
];


    const quoteAuth= document.getElementById('author');
    const mainQuote= document.getElementById('quote');


let random = 0;
let lastRandom = 0;

function qouteOfDay() {
   random = Math.floor(Math.random() * quotes.length);

   if(random != lastRandom){
    lastRandom = random;
      quoteAuth.innerHTML = quotes[random].author;
      mainQuote.innerHTML = quotes[random].quote;
   }else{
    qouteOfDay();
   }
}



