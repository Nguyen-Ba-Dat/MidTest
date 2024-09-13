import React from 'react';

const MovieBanner = ({ selectedMovie }) => {
  if (!selectedMovie) {
    return <div className="alert alert-info text-center">Select a movie to see details.</div>;
  }

  return (
    <div className="card mb-5">
      <div className="card-body text-center">
        <h2 className="card-title">{selectedMovie.movieName}</h2>
        <p className="card-text">{selectedMovie.description}</p>
      </div>
    </div>
  );
};

export default MovieBanner;
