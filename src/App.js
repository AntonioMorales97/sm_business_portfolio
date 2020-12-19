import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Main from './components/pages/main';

import './App.css';

const App = (props) => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Main} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
