import { useState, useEffect } from "react";
import { getQuote } from "./utilis/api";
import { getRandomIntInclusive } from "./utilis/getRandomIntInclusive";

function QuoteCard() {

    const [quote, setQuote] = useState([]);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await getQuote();

            console.log(response);

            setQuote(response);
            // ...
          }
          fetchData();
    }, []);

    const colors = [
        "B33030",
        "F47340",
        "FFC900",
        "65C18C",
        "96CEB4",
        "5D8BF4",
        "B667F1",
        "FA4EAB",
        "325288",
        "EA5C2B",
        "116530",
        "C996CC",
        "4A403A"
    ];

    const onClickNewQuote = async () => {
      const response = await getQuote();

      console.log(response);

      const randomColorIndex = getRandomIntInclusive(colors.length-1);
      console.log(randomColorIndex);
      document.body.style.backgroundColor = "#" + colors[randomColorIndex];
      document.body.style.color = "#" + colors[randomColorIndex];

      document.getElementsByClassName("button")[0].style.background = "#" + colors[randomColorIndex];
      document.getElementsByClassName("button")[1].style.background = "#" + colors[randomColorIndex];

      setQuote(response);

    }
    return (
      <div className="parent">
        <div id="quote-box">
          <div id="text">
          <i className="fa fa-quote-left"> </i> {quote.text}
          <i className="fa fa-quote-right"> </i>
          </div>
          <div id="author">
          - {quote.author}
          </div>
          <div className="buttonWrap">
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_blank"
            href={'https://twitter.com/intent/tweet?hashtags=quotes&text="' + quote.text + '" ' + quote.author} rel="noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
 
            <button id="new-quote" className="button" onClick={onClickNewQuote}>New Quote</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default QuoteCard;