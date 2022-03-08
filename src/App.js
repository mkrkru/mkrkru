import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Portfolio from './contents/Portfolio';
import Social from './components/Social';

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(#3a6186, #89253e);
  }

`;


function App() {
  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <>
        <GlobalStyle />
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/"><Home /></Route>
            {/* <Route path="/about"><About /></Route>
            <div class="back1 glass" onClick={() => setTheme(
              theme.mode === 'dark' ? 'light' : 'dark'
            )}><i class={theme.mode === 'dark' ? "fa fa-sun i1" : "fa fa-moon i1"}></i></div> */}
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
