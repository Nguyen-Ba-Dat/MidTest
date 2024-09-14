import React from 'react';


const MovieBanner = ({ selectedMovie }) => {
  if (!selectedMovie) {
    return <div className="alert alert-info text-center">Select a movie to see details.</div>;
  }

  const bannerStyle = {
    backgroundImage: `url(${selectedMovie.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  return (
    <div className="card mb-5" style={bannerStyle}> {/* Áp dụng bannerStyle vào đây */}
      <div className="card-body text-center">
        <h2 className="card-title">{selectedMovie.movieName}</h2>
        <p className="card-text">{selectedMovie.description}</p>
      </div>
    </div>
  );
};

export default MovieBanner;
