import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import '../styles/App.css';


const App = ()=>{

    return(
        <Router>
            <Header />
            <div className="container m-auto">
            <Route path="/" exact component={Home} />
            </div>
            <Footer />
        </Router>
    )
};

export default App;