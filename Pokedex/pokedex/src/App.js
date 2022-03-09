import logo from "./logo.svg";
import "./App.css";
import JSONDATA from "./data.json";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        id="searchbar"
        type="text"
        placeholder="Search pokemon name, number or type..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter(val => {
         if(searchTerm === "") {
           return val;
         } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
           return val 
         }
       })
       .map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.name}</p>
          </div>       
        );
      })}
    </div>
  );
}

export default App;
