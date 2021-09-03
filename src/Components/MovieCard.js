import React from "react";
import "../App.css";

const MovieCard = () => {
  return (
    <div className="movie-card">
      <div className="movie-card-media">Media</div>
      <div className="movie-card-title">Title</div>
      <div className="movie-card-action-container">
        <div>ratring</div>
        <div>favorite</div>
      </div>
    </div>
  );
};

export default MovieCard;
