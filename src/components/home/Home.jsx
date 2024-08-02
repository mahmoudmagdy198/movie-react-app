import React from "react";
import Header from "../header/Header";
import "./home.css";

function Home() {
  return (
    <>
      <div className="home">
        <header className="App-header">
          <h1>Discover the world of movies</h1>
          <p>We show you the latest films.</p>
        </header>
        <footer>
          <p>Made by MovieReact group</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
