// ./components/Place.jsx
import React from "react";

function Place({ title, src, alt }) {
  console.log("Props:", { title, src, alt }); // Debugging line
  return (
    <li className="place">
      <img src={src} alt={alt} />
      <h2>{title}</h2>
    </li>
  );
}

export default Place;
