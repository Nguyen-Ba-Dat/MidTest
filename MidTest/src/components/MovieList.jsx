import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-md-2 mb-4" key={movie.id}>
          <MovieCard movie={movie} onSelectMovie={onSelectMovie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
