import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";

import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const handleDetails = (data) => {
    setMovies(data);
  };
  console.log(movies);
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
