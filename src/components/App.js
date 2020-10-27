import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Planet from './Planet';
import '../styles/App.css';

const App = ()=>{

    return(
        <Router>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/planet/:id" exact component={Planet} />
        </Router>
    )
};

export default App;