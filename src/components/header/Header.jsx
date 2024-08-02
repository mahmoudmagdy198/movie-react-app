import React, { useRef } from "react";
import "./header.css"
import { useNavigate } from "react-router-dom";

export let searchedMovie
function Header() {

  const navigate = useNavigate()
  let input = useRef(null)
  let search = () =>{
    input.current.value && ((searchedMovie = input.current.value) && navigate("/searhResults"))
  }
  return (
    <nav class="navbar navbar-expand-lg header-color position-fixed w-100 z-3">
    <div class="container">
      <a class="navbar-brand logo-color" href="/">Movie<span style={{color:"#76ABAE"}}>React</span></a>
      <button  class="drop-color navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item pe-4">
            <a class="linkes nav-link " aria-current="page" href="/trending">Trending</a>
          </li>
          <li class="nav-item pe-4">
            <a class="linkes nav-link " href="/topMovies">Top Movies</a>
          </li> 
          <li class="nav-item ">
            <a class="linkes nav-link " href="/upComing">Upcoming Movies</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" ref={input} type="search" placeholder="Search" aria-label="Search"/>
          <button className="search" onClick={search} type="button">Search</button>
        </form>
      </div>
    </div>
  </nav>
    )
}

export default Header;
