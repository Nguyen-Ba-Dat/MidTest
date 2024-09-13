import React, { useState } from 'react';
import Header from './components/Header';
import { movieData } from './data';
import MovieList from './components/MovieList';
import MovieBanner from './components/MovieBanner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <Header /> 
      <div className="container">
        <header className="my-4 text-center">
          <h1>Explore</h1>
          <p>What are you gonna watch today ?</p>
        </header>
        <section className="explore mb-5">
          <MovieBanner selectedMovie={selectedMovie} />
        </section>
        <section className="new-release">
          <h2 className="text-center">New Release</h2>
          <MovieList movies={movieData} onSelectMovie={handleSelectMovie} />
        </section>
      </div>
    </div>
  );
};

export default App;
