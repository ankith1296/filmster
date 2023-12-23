import React from "react";
import "./NowPlaying.css";
import { useState, useEffect } from "react";

const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

export default function NowPlaying({ movies, popular }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrollPosition((prevPosition) => (prevPosition + 1) % movies.length);
    }, 5000); // Set the interval duration in milliseconds (5 seconds)

    return () => clearInterval(intervalId);
  }, [movies, popular]);

  // console.log(movies);

  return (
    <div>
      <h2>Now Playing </h2>
      <div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(-${scrollPosition * 200}px)` }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="carousel-item">
              <img
                src={`${posterBaseUrl}${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: "150px",
                  height: "225px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              />
              <p style={{ color: "#ffffff" }}>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <h2>Popular</h2>
      <div style={{ display: "flex" }}>
        {popular.map((movie) => (
          <div key={movie.id} style={{ margin: "10px" }}>
            <img
              src={`${posterBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "150px", height: "225px", borderRadius: "5px" }}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div> */}
      <h2>Popular</h2>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          width: "100%",
          whiteSpace: "nowrap",
        }}
      >
        {popular.map((movie) => (
          <div key={movie.id} style={{ margin: "10px" }}>
            <img
              src={`${posterBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "150px", height: "225px", borderRadius: "5px" }}
            />
            <p style={{ color: "#ffffff" }}>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
