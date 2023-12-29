import React from "react";
import { useEffect, useState } from "react";
import NowPlaying from "./NowPlaying";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import SearchResults from "./SearchResults";

const apiKey = "8c02b9a0bfd78dbd3138c39039b35cef";
const apiUrl = "https://api.themoviedb.org/3";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [dataFromSearch, setDataFromSearch] = useState([]);

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const nowPlayingUrl = `${apiUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

        const response = await fetch(nowPlayingUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchNowPlayingMovies();
    const fetchPopularMovies = async () => {
      try {
        const nowPlayingUrl = `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

        const response = await fetch(nowPlayingUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPopular(data.results);
      } catch (error) {
        // Handle errors here
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  const handleSearchData = (data) => {
    setDataFromSearch(data);
  };

  // console.log(dataFromSearch);

  return (
    <div>
      <Navbar onSearchData={handleSearchData} />

      <HeroSection popular={popular} />

      <SearchResults dataFromSearch={dataFromSearch} />

      <NowPlaying movies={movies} popular={popular} />
    </div>
  );
}
