import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Apod from './Apod';

function App() {
  const [apod, setApod] = useState({});
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => {
      setApod(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);
  return (
    <div className="App">
      <h1>NASA Astronomy Picture Of The Day</h1>
      <Apod apod={apod} />
    </div>
  );
}

export default App;
