import React from 'react';
import './App.css';
import Header from './header';
import BowlerInfo from './Bowling/BowlerInfo';

function App() {
  return (
    <div className="App">
      <Header title="League Bowling Teams and Information" />
      <BowlerInfo />
    </div>
  );
}

export default App;
