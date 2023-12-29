import React from "react";
import "./SearchResults.css";

const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
export default function SearchResults({ dataFromSearch }) {
  return (
    <div className="resultsContainer">
      {dataFromSearch.map((movie) => (
        <div
          key={movie.id}
          style={{ margin: "1.5rem", height: "auto", width: "10rem" }}
        >
          <img
            src={`${posterBaseUrl}${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "10rem", height: "15rem", borderRadius: "5px" }}
          />
          <p
            style={{
              color: "#ffffff",
            }}
          >
            {movie.title}
          </p>
        </div>
      ))}
    </div>
  );
}
