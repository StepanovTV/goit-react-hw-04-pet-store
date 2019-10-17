import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Routes from './Routes/Routes';
import '../normalize.min.css';

const App = () => (
  <>
    <Router>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes />
      </main>
    </Router>
  </>
);

export default App;
