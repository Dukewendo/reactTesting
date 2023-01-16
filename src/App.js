import React, { useState } from "react";

export default function App() {
  const [itemArray, setItemArray] = useState(["Item 1", "Item 2"]);

  const itemElements = itemArray.map((item) => <p key={item}>{item}</p>);

  function addItem() {
    setItemArray((prevState) => [...itemArray, `Item ${itemArray.length + 1}`]);
  }

  return (
    <div>
      <h1>ToDo</h1>
      <button onClick={addItem}>Add item</button>
      <div>{itemElements}</div>
    </div>
  );
}
