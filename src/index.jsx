import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
import Wisdom from "./assets/wisdom.jpg";
import QuoteBox from "./QuoteBox.jsx";
const App = () => {
  return (
    <>
      <h1 className="hello">Quote of the Day</h1>
      <img src={Wisdom} className="circle-img" />
      <QuoteBox />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
