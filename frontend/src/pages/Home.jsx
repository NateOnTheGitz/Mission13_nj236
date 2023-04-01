import React from 'react';
import TopBanner from '../Blah';

function Home() {
  return (
    <div className="App">
      <TopBanner saying="Joel Hilton Movie Website - Main" />
      <img src="./JoelHiltonHeadshot.jpg" alt="Joel Hilton"></img>
      {/* <MovieList /> */}
    </div>
  );
}

export default Home;
