import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  const [randomJoke, setRandomJoke] = useState(null);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
        const randomIndex = Math.floor(Math.random() * res.data.length);
        setRandomJoke(res.data[randomIndex]);
      })
      .catch((err) => {
        console.error("Error fetching jokes:", err);
      });
  }, []);

  const getNextJoke = () => {
    if (jokes.length > 0) {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      setRandomJoke(jokes[randomIndex]);
    }
  };

  return (
    <div className="app-container">
      <h1>😂 Random Joke Generator</h1>
      {randomJoke ? (
        <div className="joke-card">
          <h2>{randomJoke.title}</h2>
          <p>{randomJoke.content}</p>
        </div>
      ) : (
        <p>Loading jokes...</p>
      )}
      <button className="next-btn" onClick={getNextJoke}>
        Next Joke
      </button>
    </div>
  );
}

export default App;
