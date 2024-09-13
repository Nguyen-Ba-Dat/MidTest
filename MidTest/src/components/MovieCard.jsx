import React from 'react';

const MovieCard = ({ movie, onSelectMovie }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100" onClick={() => onSelectMovie(movie)} style={{ cursor: 'pointer' }}>
        <img src={movie.image} className="card-img-top" alt={movie.movieName} />
        <div className="card-body">
          <h5 className="card-title">{movie.movieName}</h5>
          <p className="card-text">Episode {movie.episode}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
