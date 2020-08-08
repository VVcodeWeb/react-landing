import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Intro from "./components/Intro"
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
    </div>
  );
}

export default App;
