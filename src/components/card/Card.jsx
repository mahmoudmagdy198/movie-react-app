import React from "react";
import "./card.css";
import Details from "../details/Details";
import { useNavigate } from "react-router-dom";

export let movieId
function Card({ title, poster,id }) {

  const navigate = useNavigate()
  let showDetails = () =>{
    movieId = id
    navigate("/movieDetails")
  }
  
  return (
    <div class="card m-3" onClick={showDetails}>
      {/* <div class="first-content" style={{img:`url(https://image.tmdb.org/t/p/w500/${poster})`,backgroundPosition: 'center' ,backgroundSize:'cover'}}>
  </div> */}
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} />
      <div class="second-content">
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Card;
