import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import CalendarBody from './Components/CalendarBody';
import Footer from './Components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CalendarBody />
        <Footer />
      </div>
    );
  }
}

export default App;
