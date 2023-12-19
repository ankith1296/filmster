import React from "react";
import "./herosection.css";
import { useState, useEffect } from "react";
export default function HeroSection({ popular }) {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    // Change the displayed movie every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % popular.length);
    }, 10000); // Set the interval (10 seconds)

    return () => {
      clearInterval(intervalId);
    };
  }, [popular]);

  const heroMovie = popular[currentMovieIndex];
  return (
    <div className="hero-section">
      <div className="hero-background">
        <img
          src={`https://image.tmdb.org/t/p/original/${heroMovie?.backdrop_path}`}
          alt="Background Poster"
        />
      </div>
      <div class="overlay"></div>
      <div className="hero-content">
        {/* <div className="gradient-overlay"></div> */}
        <div className="details-bg">
          <div className="movie-details">
            <h1>{heroMovie?.title}</h1>
            <p>{heroMovie?.overview}</p>

            {/* Add more movie details as needed */}
          </div>
        </div>
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${heroMovie?.poster_path}`}
            alt="Movie Poster"
          />
        </div>
      </div>
    </div>
  );
}
