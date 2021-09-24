import './App.css';
import Dashboard from './views/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chatroom from './views/Chatroom';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

function App() {

  const [newRoomOpen, setNewRoomOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const themeOptions = createTheme({ 
    palette: {
      type: 'light',
      primary: {
        main: '#607d8b',
      },
      secondary: {
        main: '#fafafa',
      },
      background: {
        default: '#cfd8dc',
        paper: '#f5f5f5',
      },
      error: {
        main: '#d50000',
      },
      warning: {
        main: '#ffcc80',
      },
      info: {
        main: '#90caf9',
      },
    },
    typography: {
      h6: {
        fontFamily: 'Open Sans',
      },
      fontFamily: 'Roboto',
      h1: {
        fontFamily: 'Oswald',
      },
      button: {
        fontFamily: 'Open Sans',
      },
      fontSize: 16,
    },
  });
  
  const darkThemeOptions = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#90a4ae',
      },
      secondary: {
        main: '#eceff1',
      },
      background: {
        default: '#15171a',
        paper: '#424242',
      },
      error: {
        main: '#b71c1c',
      },
      warning: {
        main: '#e65100',
      },
      info: {
        main: '#1976d2',
      },
      text: {
        primary: '#f1f8e9',
      },
      success: {
        main: '#2e7d32',
      },
    },
    typography: {
      h6: {
        fontFamily: 'Open Sans',
      },
      fontFamily: 'Roboto',
      h1: {
        fontFamily: 'Oswald',
      },
      button: {
        fontFamily: 'Open Sans',
      },
      fontSize: 16,
    },
  })

  return (
      <ThemeProvider theme={darkMode ? darkThemeOptions : themeOptions}>
        <div className='App'>
          <CssBaseline />
          <Router>
            <Switch>
              <Route path='/chatroom/:id'>
                <Chatroom newRoomOpen={newRoomOpen} setNewRoomOpen={setNewRoomOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
              </Route>
              <Route path='/'>
                <Dashboard newRoomOpen={newRoomOpen} setNewRoomOpen={setNewRoomOpen} darkMode={darkMode} setDarkMode={setDarkMode} />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
  );
};

export default App;
