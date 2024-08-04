import React from "react";
import "./card.css";
import Details from "../details/Details";
import { useNavigate } from "react-router-dom";

export let movieId
function Card({ title, poster,id }) {
  console.log(poster);
  
  const navigate = useNavigate()
  let showDetails = () =>{
    movieId = id
    navigate("/movieDetails")
  }
  
  return (
    <div class="card m-3" onClick={showDetails}>
      {/* <div class="first-content" style={{img:`url(https://image.tmdb.org/t/p/w500/${poster})`,backgroundPosition: 'center' ,backgroundSize:'cover'}}>
  </div> */}
      {poster != null ? (<img src={`https://image.tmdb.org/t/p/w500/${poster}`} />) : (<img style={{width:"283px" , height:"425px"}} src="https://us.123rf.com/450wm/koblizeek/koblizeek2208/koblizeek220800027/189908666-no-image-vector-symbol-missing-available-icon-no-gallery-for-this-moment-placeholder.jpg" />)}
      <div class="second-content">
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Card;
