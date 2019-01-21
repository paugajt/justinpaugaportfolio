import React, { Component } from 'react';
import './CSS/App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import IgTiles from './Components/IgTiles';
import Portfolio from './Components/Portfolio';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Home />
      <Portfolio />
      <IgTiles />
      <Footer />
      </div>
    );
  }
}

export default App;
