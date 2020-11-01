import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Planet from './Planet';
import Earth from './Earth';
import '../styles/App.css';


const App = ()=>{

    return(
        <Router>
            <Header />
            <div className="container m-auto my-12">
            <Route path="/" exact component={Home} />
            <Route path="/planet/:id" exact component={Planet} />
            <Route path="/earth" exact component={Earth} />
            </div>
        </Router>
    )
};

export default App;