import React, { useRef , useContext} from "react";
import "./header.css"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeTitle } from "../../redux/features/searchMovieSlice";

//export let searchedMovie
function Header() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let input = useRef(null)
  let search = () =>{
    // input.current.value && ((searchedMovie = input.current.value) && navigate("/searhResults"))
    // input.current.value = null
    if (input.current.value) {
      dispatch(changeTitle(input.current.value))
      navigate("/searhResults")
    }
    
    
  }

  return (
    <nav class="navbar navbar-expand-lg header-color position-fixed w-100 z-3">
    <div class="container">
      <Link class="navbar-brand logo-color" to="/">Movie<span style={{color:"#76ABAE"}}>React</span></Link>
      <button  class="drop-color navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item pe-4">
            <Link class="linkes nav-link " aria-current="page" to="/trending">Trending</Link>
          </li>
          <li class="nav-item pe-4">
            <Link class="linkes nav-link " to="/topMovies">Top Movies</Link>
          </li> 
          <li class="nav-item ">
            <Link class="linkes nav-link " to="/upComing">Upcoming Movies</Link>
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
