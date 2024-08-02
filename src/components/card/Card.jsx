import React from "react";
import "./card.css"
function Card({title , poster}) {


   
  return (
    <div class="card m-3">
  {/* <div class="first-content" style={{img:`url(https://image.tmdb.org/t/p/w500/${poster})`,backgroundPosition: 'center' ,backgroundSize:'cover'}}>
  </div> */}
  <img src={`https://image.tmdb.org/t/p/w500/${poster}`}/>
  <div class="second-content">
    <span>{title}</span>
  </div>


</div>
  )

}

export default Card;
