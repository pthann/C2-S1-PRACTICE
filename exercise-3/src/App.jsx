import React from "react";
import { ALL_PNV_TEACHERS } from "./teachers.js";

// NO change to perform here...
export function User({ firstName, lastName, title}) {
  return (
    <div id="user" data-testid="user">
      <h2>
        {firstName} {lastName}{" "}
      </h2>
      <p> {title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>PNV Team !!</h1>
      <p>Here are some PNV trainers and educators, do you know them?</p>
      {ALL_PNV_TEACHERS.map((data, index)=>(
        <User
          key= {index}
          firstName ={data.firstName}
          lastName = {data.lastName}
          title = {data.title}
         />
      ))}
    </div>
  );
}

export default App;
