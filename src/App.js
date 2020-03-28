import React from 'react';
import EventsContainer from './containers/EventsContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Events</h1>
          <EventsContainer />
      </header>
    </div>
  );
}

export default App;
