import React from "react";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./topMovies.css"
function TopMovies() {

  let [data, setData] = useState([]);

  let getData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmRlY2Q3YTAxNDU1Yjc0NjcwOTFlNDU0MWYzNjUyYSIsIm5iZiI6MTcyMjUxMTM4MS4yOTkxMzUsInN1YiI6IjY0ZGJjMTdmZjQ5NWVlMDI5NDMxY2Q5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yhQPglnYgNTFnO34KeihD3PabgleSageE0SFratvwfA",
      },
    };

    await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);

        setData(response.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div class="row container m-auto top-movies">
        {data.map((e) => (
            
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
            <Card title={e.title} poster={e.poster_path} />
            </div>
         
        ))}
      </div>
    </>
  );
}

export default TopMovies;
