import './App.css';
import Dashboard from './views/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chatroom from './views/Chatroom';
import React, { useState } from 'react';

function App() {

  const [userName, setUserName] = useState('Guest-' + Math.random().toString(36).slice(2));
  const [newRoomOpen, setNewRoomOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chatroom/:id'>
            <Chatroom newRoomOpen={newRoomOpen} setNewRoomOpen={setNewRoomOpen} />
          </Route>
          <Route path='/'>
            <Dashboard setUserName={setUserName} newRoomOpen={newRoomOpen} setNewRoomOpen={setNewRoomOpen} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
