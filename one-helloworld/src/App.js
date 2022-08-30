import React from "react";
import "./style.css";
import Button from "./Button";

const App = () => {
  return (
    <div>
      {" "}
      <h1 style={{ textAlign: "center" }}>Hi there!!</h1>
      <Button title="App Store" />
      <Button title="Play store" />
      <Button />
      <button className="button">Play Store</button>
      <button className="button">App Store</button>
    </div>
  );
};

export default App;
