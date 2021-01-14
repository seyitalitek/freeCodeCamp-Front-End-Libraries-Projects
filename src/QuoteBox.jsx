import React, { useState } from "react";
import { GrTwitter } from "react-icons/gr";
import { MdAutorenew } from "react-icons/md";
import quotes from "./quotes.json";
function getRand(max) {
  return Math.floor(Math.random() * max);
}
const QuoteBox = () => {
  const [currentQuote, setCurrentQuote] = useState(
    getRand(quotes.quotes.length)
  );
  const url =
    'https://twitter.com/intent/tweet?text="' +
    quotes.quotes[currentQuote].quote +
    '"\n' +
    quotes.quotes[currentQuote].author +
    "\n&hashtags=quote";
  const codedUrl = encodeURI(url);
  return (
    <div id="quote-box">
      <p id="text">
        {/* {payLoad.loaded ? payLoad.data[currentQuote].quote : "Loading"} */}
        {quotes.quotes[currentQuote].quote}
      </p>
      <p id="author">
        {/* {payLoad.loaded ? payLoad.data[currentQuote].author : "Loading"} */}
        {quotes.quotes[currentQuote].author}
      </p>

      <div id="buttons">
        <a href={codedUrl} id="tweet-quote">
          <GrTwitter />
        </a>
        <button
          id="new-quote"
          onClick={() => {
            document.getElementById("text").style.opacity = 0;
            document.getElementById("author").style.opacity = 0;
            setTimeout(() => {
              setCurrentQuote(getRand(quotes.quotes.length));
              document.getElementById("text").style.opacity = 1;
              document.getElementById("author").style.opacity = 1;
            }, 300);
          }}
        >
          <MdAutorenew />
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
