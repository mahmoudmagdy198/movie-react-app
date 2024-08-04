import React, { useEffect, useState } from "react";
import "./details.css";
import { movieId } from "../card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Details() {
  let [data, setData] = useState({});

  let getData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmU5NzBjZmQ1NmE0ZGE0MGUxMjMzMDIwMmIyMWZkYiIsIm5iZiI6MTcyMjQ4MTA5Mi4zOTAwOTMsInN1YiI6IjY2YWFmOGI1NTE4YjgzYjc2MDg4MWVlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nz0R8wMusJ5E2wQn333KPtavh4rcNxb90k7_VMyTmEE",
      },
    };

    await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getData();
  }, []);
  

  return (
    <div class="container details-holder">
      <div class="cardD">
        <div class="card-body">
          <h1 class="card-title">{data.title}</h1>
          <h6 class="card-subtitle">{data.tagline}</h6>
          <div class="row">
            <div class="col-lg-5 col-md-5 col-sm-6">
              <div class="white-box text-center">
                {data.poster_path != null ? (<img
                  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                  class="img-responsive"
                />) : (<img style={{width:"283px" , height:"425px"}} src="https://us.123rf.com/450wm/koblizeek/koblizeek2208/koblizeek220800027/189908666-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg" />)}
                
              </div>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-6">
              <h4 class="box-title mt-5">Overview</h4>
              <p>{data.overview}</p>
              <h5 class="mt-5">
                status: <small class="text-success">{data.status}</small>
              </h5>
              <h5 class="mt-5 position-relative  p-1">
                Rating:{" "}
                <small class="">
                  {Math.floor(data.vote_average)}{" "}
                  <svg
                    class="star-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="14"
                    width="15.75"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="#FFD43B"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    />
                  </svg>
                </small>
              </h5>
              <h5 class="mt-5 position-relative  p-1">
                Runtime:{" "}
                <small class="">{Math.floor(data.runtime / 60)} hr</small>
              </h5>

              <h3 class="box-title mt-5">Genres</h3>
              <ul class="list-unstyled">
                {data.genres
                  ? data.genres.map((e) => <p key={e.id}>{e.name}</p>)
                  : "No data available"}
              </ul>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12">
              <h3 class="box-title mt-5">General Info</h3>
              <div class="table-responsive">
                <table class="table table-striped table-product">
                  <tbody>
                    <tr>
                      <td width="390">original_title</td>
                      <td>{data.original_title}</td>
                    </tr>
                    <tr>
                      <td>release_date</td>
                      <td>{data.release_date}</td>
                    </tr>
                    <tr>
                      <td>production_countries</td>
                      {data.production_countries
                        ? data.production_countries.map((e) => (
                            <p key={e.id}>{e.name}</p>
                          ))
                        : "No data available"}
                    </tr>
                    <tr>
                      <td>original_language</td>
                      <td>{data.original_language}</td>
                    </tr>
                    <tr>
                      <td>spoken_languages</td>
                      {data.spoken_languages
                        ? data.spoken_languages.map((e) => (
                            <p key={e.id}>{e.name}</p>
                          ))
                        : "No data available"}
                    </tr>
                    <tr>
                      <td>budget</td>
                      <td>{data.budget}</td>
                    </tr>
                    <tr>
                      <td>revenue</td>
                      <td>{data.revenue}</td>
                    </tr>
                    <tr>
                      <td>Production companies</td>
                      {data.production_companies
                        ? data.production_companies.map((e) => (
                            <p key={e.id}>{e.name}</p>
                          ))
                        : "No data available"}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
