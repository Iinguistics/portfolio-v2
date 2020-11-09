import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Planet from './Planet';
import LandsatEarth from './LandsatEarth';
import '../styles/App.css';


const App = ()=>{

    return(
        <Router>
            <Header />
            <div className="container m-auto my-12">
            <Route path="/" exact component={Home} />
            <Route path="/planet/:id" exact component={Planet} />
            <Route path="/landsat/earth" exact component={LandsatEarth} />
            </div>
        </Router>
    )
};

export default App;