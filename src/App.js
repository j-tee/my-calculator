/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import Navbar from './components/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>

        </BrowserRouter>

      </div>
    );
  }
}

export default App;
