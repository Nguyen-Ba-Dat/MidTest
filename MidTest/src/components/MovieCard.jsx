import React from 'react';
import './MovieCard.css'; 

const MovieCard = ({ movie, onSelectMovie }) => {
  return (
    <div className="card h-100 movie-card" onClick={() => onSelectMovie(movie)} style={{ cursor: 'pointer' }}>
      <img src={movie.image} className="card-img-bottom" alt={movie.movieName} />
      <div className="card-body bg-black p-2 text-black bg-opacity-10">
        <p className="card-text episode-text">Episode {movie.episode}</p>
        <h5 className="card-title movie-title">{movie.movieName}</h5>
      </div>
    </div>
  );
};

export default MovieCard;
