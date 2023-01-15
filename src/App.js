import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [isGoingOut, setIsGoingOut] = useState(true);
function changeMind() {
setIsGoingOut(prevState => !prevState)
}

  return (
    <div className="state">
      <h1 className="state--title">Do I go out tonight?</h1>
      <div onClick={changeMind} className="state--value">
        <h1>{isGoingOut ? "Yes" : "Nope"}</h1>
      </div>
    </div>
  );
}

export default App;
