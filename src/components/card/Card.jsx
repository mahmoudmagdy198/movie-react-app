import React from "react";
import "./card.css"
function Card({title , poster}) {


   
  return (
    <div class="card m-3">
  <div class="first-content" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${poster})`,backgroundPosition: 'center' ,backgroundSize:'cover'}}>
  </div>
  <div class="second-content">
    <span>{title}</span>
  </div>


</div>
  )

}

export default Card;
