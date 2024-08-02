
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import TopMovies from './components/topMovies/TopMovies';
import UpComing from './components/upcoming/UpComing';
import Trending from './components/Trending/Trending';
import Details from './components/details/Details';
import SearchResults from './components/searchResults/SearchResults';




function App() {

  
  

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path='/topMovies' element={<TopMovies/>}/>
          <Route path='/upComing' element={<UpComing/>}/>
          <Route path='/movieDetails' element = {<Details/>}/>
          <Route path='/searhResults' element = {<SearchResults/>}/>
      </Routes>  
    </div>
  );
}

export default App;
