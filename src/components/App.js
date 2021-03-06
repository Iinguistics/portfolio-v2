import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Projects from './Projects';
import Home from './Home';
import Footer from './Footer';
import '../styles/App.css';
//import Test from './Test'

const App = ()=>{

    return(
        <Router>
            <Header />
            <div className="container m-auto ">
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            </div>
            <Footer />
        </Router>
    )
};

export default App;