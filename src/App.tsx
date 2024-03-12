import Alert from "./Components/Alert";
import React, { useState } from "react";
import Button from "./Components/Button";
import GroupList from "./Components/GroupList/Index";
import "./App.css";
function App() {
  return (
    <div>
      <GroupList
        heading="villes"
        onSelectItem={() => console.log("hello")}
        items={["El jadida", "Casa", "Rabat"]}
      ></GroupList>
    </div>
  );
}

export default App;
