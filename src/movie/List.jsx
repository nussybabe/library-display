import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  let config = {
    headers: { "content-type": "multipart/form-data" },
  };

  const fetchData = () => {
    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=3cc95d7e&s=action";

    axios
      .get(url, config)
      .then((result) => {
        if (result.data.length !== 0) {
          setPopular(result.data.Search);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const fetchTopData = () => {
    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=3cc95d7e&s=comedy";

    axios
      .get(url, config)
      .then((result) => {
        if (result.data.length !== 0) {
          setTopRated(result.data.Search);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  console.log(popular);
  useEffect(() => {
    fetchData();
    fetchTopData();
  }, []);

  return (
    <div>
      <div className="topbar">
        <div className="search-area">
          <input
            type="text"
            className="search-input"
            placeholder="search movies..."
          />
          <span className="White">X</span>
        </div>

        <div className="search-wrapper">
          <a href="#">
            Movie Title <span>2024</span>
          </a>
        </div>
      </div>
      <div className="main-content">
        <h1 className="White">Popular</h1>
        <div className="movie-container">
          {popular &&
            popular.map((movie, index) => (
              <div className="card-wrapper" key={index}>
                <img src={movie.Poster} alt="" />
                <div className="rating">
                  <span>64</span>
                </div>
                <h5>{movie.Title}</h5>
                <span>Year: {movie.Year}</span>
              </div>
            ))}
        </div>

        <h1 className="White mt-5">Top Rated</h1>
        <div className="movie-container">
          {topRated &&
            topRated.map((movie, index) => (
              <div className="card-wrapper" key={index}>
                <img src={movie.Poster} alt="" />
                <div className="rating">
                  <span>64</span>
                </div>
                <h5>{movie.Title}</h5>
                <span>Year: {movie.Year}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;