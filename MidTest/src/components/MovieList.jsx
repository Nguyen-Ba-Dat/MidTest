import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </div>
  );
};

export default MovieList;
