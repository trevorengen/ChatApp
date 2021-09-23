import './App.css';
import Dashboard from './views/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chatroom from './views/Chatroom';
import React, { useState } from 'react';

function App() {

  const [newRoomOpen, setNewRoomOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chatroom/:id'>
            <Chatroom newRoomOpen={newRoomOpen} setNewRoomOpen={setNewRoomOpen} />
          </Route>
          <Route path='/'>
            <Dashboard newRoomOpen={newRoomOpen} setNewRoomOpen={setNewRoomOpen} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
