import React from "react";
import { useEffect, useState } from "react";
import { searchedMovie } from "../header/Header";
import Card from "../card/Card";
function SearchResults() {
    let movieName = searchedMovie

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
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        
        setData(response.results);
        

      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
    
  }, [searchedMovie]);

  console.log(searchedMovie);
  
    
  return (
    <>
    <div class="row container m-auto top-movies">
      <h1 class="fw-bolder m-4 text-center">Results of: {searchedMovie}</h1>
      {data.map((e) => (
          
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
          <Card title={e.title} poster={e.poster_path} id={e.id}/>
          </div>
       
      ))}
    </div>
  </>
  )
}

export default SearchResults;
