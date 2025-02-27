import express from "express";
import quotes from "./quotes.json" assert { type: "json" };

const app = express();
const port = 3001;

app.get("/", (request, response) => {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

app.get("/quotes", (request, response) => {
  response.json(quotes);
});

app.get("/quotes/random", (request, response) => {
  const randomQuote = pickFromArray(quotes);
  response.json(randomQuote);
});

const pickFromArray = (arrayofQuotes) =>
  arrayofQuotes[Math.floor(Math.random() * arrayofQuotes.length)];

const listener = app.listen(port, () => {
  console.log(
    "Your app is listening on port http://localhost:" + listener.address().port
  );
});
