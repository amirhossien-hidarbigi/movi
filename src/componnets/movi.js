import React from "react";

function Movie({ title, onRemove }) {
  const handleRemove = () => {
    onRemove(title);
  };

  return (
    <div className="movie-item card">
      <img src="./images/post2.jpg" alt={title} className="movie-image" />
      <div className="infer">
        <h2 className="movie-title">{title}</h2>
        <h5 className="title">Eclipse: Chronicles (1996) </h5>
      </div>
      <div className="btn">
        <button className="btnrmw" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Movie;
