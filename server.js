const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/series', (req, res) => {
  res.json([
      {
        title: "Friends",
        image: "https://imgur.com/2afnd2r.jpg",
        description: "Friends (stylized as F•R•I•E•N•D•S) is an American television sitcom, created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons. With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry and David Schwimmer, the show revolves around six 20–30-something friends living in Manhattan. The series was produced by Bright/Kauffman/Crane Productions, in association with Warner Bros. Television. The original executive producers were Kevin S. Bright, Marta Kauffman, and David Crane.",
        rating: "10",
        people: "Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, David Schwimmer"
      },{
        title: "Suits",
        image: "https://imgur.com/AXLzKSB.png",
        description: "While running from a drug deal gone bad, Mike Ross, a brilliant young college-dropout, slips into a job interview with one of New York City's best legal closers, Harvey Specter. Tired of cookie-cutter law school grads, Harvey takes a gamble by hiring Mike on the spot after he recognizes his raw talent and photographic memory. Mike and Harvey are a winning team. Even though Mike is a genius, he still has a lot to learn about law. And while Harvey may seem like an emotionless, cold-blooded shark, Mike's sympathy and concern for their cases and clients will help remind Harvey why he went into law in the first place. Mike's other allies in the office include the firm's best paralegal Rachel and Harvey's no-nonsense assistant Donna to help him serve justice. Proving to be an irrepressible duo and invaluable to the practice, Mike and Harvey must keep their secret from everyone including managing partner Jessica and Harvey's arch nemesis Louis, who seems intent on making Mike's life as difficult as possible.",
        rating: "9",
        people: "Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, David Schwimmer" 
      },{
        title: "Game Of Thrones",
        image: "https://imgur.com/edEAbTh.png",
        description: "Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.",
        rating: "10",
        people: "Emilia Clarke, Peter Dinklage, Kit Harington, David Nutter, Alan Taylor, Alex Graves, Miguel Sapochnik"
      },{
        title: "The Mentalist",
        image: "https://imgur.com/JQhLM9k.png",
        description: "A famous 'psychic' outs himself as a fake, and starts working as a consultant for the California Bureau of Investigation so he can find 'Red John', the madman who killed his wife and daughter.",
        rating: "8",
        people: "Simon Baker, Robin Tunney, Tim Kang, Chris Long, Eric Laneuville"
      }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));