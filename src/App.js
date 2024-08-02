
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import TopMovies from './components/topMovies/TopMovies';
import TopTV from './components/topTV/TopTV';
import Trending from './components/Trending/Trending';




function App() {

  
  

  return (
    <div className="App">

      <Header/>
      {/* <Trending/> */}
      {/* <TopMovies/> */}
      <TopTV/>
      
    </div>
  );
}

export default App;
