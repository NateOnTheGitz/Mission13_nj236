import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';

function App() {
  return (
    <div className="App">
      <TopBanner saying="Joel Hilton Movie Website - Main" />
      <img src="./JoelHiltonHeadshot.jpg" alt="Joel Hilton"></img>
      <MovieList />
    </div>
  );
}

export default App;
