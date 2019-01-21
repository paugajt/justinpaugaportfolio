import React, { Component } from 'react';
import logo from './logo.svg';
import './CSS/App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import IgTiles from './Components/IgTiles';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Home />
      <IgTiles />
      <Footer />
      </div>
    );
  }
}

export default App;
