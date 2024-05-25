
import React from "react";

export const userData = {
  firstName: "Ronan",
  lastName: "Ogor",
  title: "PN React JS Killer",
};

// Edit the User component code to output the userData data
export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>{`${userData.firstName} ${userData.lastName}`}</h2>
      <p>{userData.title}</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>WELCOME !!</h1>
      <p>PNV students are you ready to React Course ? You got this 💪</p>
      <User />
    </div>
  );
}

export default App;
