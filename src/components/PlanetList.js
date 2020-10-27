import React from 'react'
import { Link } from 'react-router-dom';

const PlanetList = () => {
    return (
        <div>
            <h2>Learn more about the solar system:</h2>
           <Link to="/planet/earth"><li>Earth</li></Link>
           <Link to="/planet/mars"><li>Mars</li></Link>
           <Link to="/planet/saturn"><li>Saturn</li></Link>
           <div>
               <p>sjfljdkljdsk</p>
           </div>
        </div>
    )
}

export default PlanetList
