import React, { useState } from "react";
import Movie from "./componnets/movi";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: "" });

  const handleAddMovie = () => {
    if (newMovie.title.trim() !== "") {
      setMovies([...movies, newMovie]);
      setNewMovie({ title: "" });
    }
  };

  const handleMovieInputChange = e => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleRemoveMovie = movieTitle => {
    const updatedMovies = movies.filter(movie => movie.title !== movieTitle);
    setMovies(updatedMovies);
  };

  return (
    <div className="container">
      <div className="input">
        <input
          type="text"
          placeholder="Movie Title"
          name="title"
          value={newMovie.title}
          onChange={handleMovieInputChange}
        />
        <button className="addmovi" onClick={handleAddMovie}>
          Add
        </button>
      </div>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <Movie key={index} title={movie.title} onRemove={handleRemoveMovie} />
        ))}
      </div>
    </div>
  );
}

export default App;
