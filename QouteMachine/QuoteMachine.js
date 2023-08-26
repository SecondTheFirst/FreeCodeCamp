import React from "react";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.css";

const quotes = [
  {
    quote: "A rose by any other name would smell as sweet.",
    quotee: "William Shakespeare"
  },
  { quote: "All that glitters is not gold.", quotee: "William Shakespeare" },
  {
    quote: "All the world’s a stage, and all the men and women merely players.",
    quotee: "William Shakespeare"
  },
  {
    quote:
      "Ask not what your country can do for you; ask what you can do for your country.",
    quotee: "John Kennedy"
  },
  { quote: "Eighty percent of success is showing up.", quotee: "	Woody Allen" },
  {
    quote: "For those to whom much is given, much is required.",
    quotee: "Wisdom"
  },
  {
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    quotee: "Thomas Edison"
  },
  {
    quote:
      "I have learned over the years that when one’s mind is made up, this diminishes fear.",
    quotee: "Rosa Parks"
  },
  {
    quote:
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    quotee: "Leonardo da Vinci"
  },
  {
    quote:
      "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.",
    quotee: "Zig Ziglar"
  },
  {
    quote:
      "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
    quotee: "John Lennon"
  },
  {
    quote:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    quotee: "Dalai Lama"
  },
  {
    quote: "Every strike brings me closer to the next home run.",
    quotee: "Babe Ruth"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    quotee: "Albert Einstein"
  },
  {
    quote:
      "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
    quotee: "Booker T. Washington"
  },
  {
    quote: "Change your thoughts and you change your world.",
    quotee: "Norman Vincent Peale"
  },
  {
    quote:
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    quotee: "Joshua J. Marine"
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    quotee: "Martin Luther King Jr."
  },
  {
    quote:
      "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
    quotee: "Maimonides"
  }
];

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

export class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: Math.floor(Math.random() * quotes.length),
      quotes: quotes,
      color: Math.floor(Math.random() * colors.length),
      colors: colors,
      animation: "fadeIn 2s ease-in"
    };
    this.newQuoteHnadler = this.newQuoteHnadler.bind(this);
  }
  newQuoteHnadler = () => {
    this.setState({
      quote: (this.state.quote + 1) % this.state.quotes.length,
      quotes: quotes,
      color: (this.state.color + 1) % this.state.colors.length
    });
  };
  render() {
    let quoteObj = this.state.quotes[this.state.quote];
    let tweetLink =
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + quoteObj.quote + '" ' + quoteObj.quotee);
    let whatsAppLink =
      "whatsapp://send?text=" +
      encodeURIComponent('"' + quoteObj.quote + '" ' + quoteObj.quotee);
    let baseColor = this.state.colors[this.state.color];
    let colorStyle = {
      color: baseColor.toString(),
      backgroundColor: baseColor.toString(),
      transition: "all 1s ease-in",
      WebkitTransition: "all 1s ease-in",
      MozTransition: "all 1s ease-in"
    };

    return (
      <div className="container-fluid text-center" style={colorStyle}>
        <div
          id="quote-box"
          className="quote-box"
          style={{
            transition: "all 1s ease-in",
            WebkitTransition: "all 1s ease-in",
            MozTransition: "all 1s ease-in"
          }}
        >
          <div
            className="quote-text"
            style={Object.assign({}, colorStyle, { backgroundColor: "#fff" })}
          >
            <span id="text" className="quote">
              <span className="fa-solid fa-quote-left"></span>
              {quoteObj.quote}
              <span className="fa-solid fa-quote-right"></span>
            </span>
          </div>
          <div
            id="author"
            style={Object.assign({}, colorStyle, { backgroundColor: "#fff" })}
          >
            - {quoteObj.quotee}
          </div>
          <div id="buttons-div">
            <span>
              <a
                id="tweet-quote"
                href={tweetLink}
                rel={"noreferrer"}
                target={"_blank"}
                style={Object.assign({}, colorStyle, { color: "#fff" })}
              >
                <span className="fa-brands fa-twitter"></span>
              </a>
            </span>
            <span>
              <a
                id="whatsapp-quote"
                href={whatsAppLink}
                style={Object.assign({}, colorStyle, { color: "#fff" })}
              >
                <span className="fa-brands fa-whatsapp"></span>
              </a>
            </span>
            <button
              id="new-quote"
              onClick={this.newQuoteHnadler}
              style={Object.assign({}, colorStyle, { color: "#fff" })}
            >
              New Quote
            </button>
          </div>
        </div>

        <div className="row">
          <footer>by Tariq</footer>
        </div>
      </div>
    );
  }
}
