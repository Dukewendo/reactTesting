import React, { useState } from "react";

export default function App() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Pills",
    phone: "+1 (709) 555-1212",
    email: "thisismyrealemail.com",
    isFavouirte: false
  });

let starIcon = contact.isFavouirte ? "star-filled.png" : "star-empty.png"

function toggleFavourote() {
console.log("Checked")
}

  return (
    <main>
      <article className="card">
        <img className="card--image" src="" alt="" />
        <div>
          <img className="card--favourite" src={`./images/{starIcon}`} alt="" />
          <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
