import React from "react";
import "./SearchResults.css";

const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
export default function SearchResults({ dataFromSearch }) {
  return (
    <div className="resultsContainer">
      {dataFromSearch.map((movie) => (
        <div
          key={movie.id}
          style={{
            margin: "1rem",
            height: "auto",
            width: "5rem",
            display: "flex",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <img
            src={`${posterBaseUrl}${movie.poster_path}`}
            alt={movie.title}
            style={{
              width: "7rem",
              height: "12rem",
              borderRadius: "5px",
              margin: "1rem",
            }}
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
