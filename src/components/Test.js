import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';
// if change is needed just do lg:h-screen, replace 2xl with this
const Test = () => {
    return (
        
            <div className="h-full lg:h-screen">
            <Link to="/" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-small text-white bg-gray-900 hover:bg-james-100 mt-24" rel="noopener noreferrer">Go Back</Link>

            <div className="text-center m-auto text-2xl my-20">
              <h3>More Projects</h3>
          </div>

           {/* ctdi */}
           <div className="flex flex-col md:flex-row xl:mt-32 items-center md:ml-20 my-20">
             <div className="w-3/4 md:w-1/2 mp4-background">
             <a href="https://github.com/Iinguistics/ctdi" target="_blank" rel="noopener noreferrer">
               <video autoPlay muted loop preload="true">
                    <source src={require("../assets/work/ctdi.mp4")}
                    type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
                    </video> 
                    </a>
                </div>
                <div className="w-3/4 md:w-1/2 md:w-1/2 mt-10 md:mt-0 p-5">
                <a href="https://github.com/Iinguistics/ctdi" target="_blank" rel="noopener noreferrer"
                   className="text-xl md:text-3xl hover:text-blue-100 duration-700 p-3" id="no-underline"
                >
                    CTDI
                </a>
                <div className="shadow-darkTheme p-5 rounded-lg text-lg">
                <p>Focused on learning UI libraries, threejs,hovereffect, blotterjs, animejs & google charts to name a few.
                </p>
            </div>
            
            <li className="inline p-1 md:p-3">Vue</li>
            <li className="inline p-1 md:p-3">Google Charts</li>
            <li className="inline p-1 md:p-3">Three.js</li>
                </div>
             </div>

             {/*codepen little quote project */}
             <div className="m-auto text-center my-4">
                 <h3>Codepen quote generator(vanilla js)</h3>
                 <a href="https://codepen.io/iinguistics/pen/BazVzzY" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 duration-700">
                     Click Here
                     </a>
             </div>

              {/*codepen ffc local weather app */}
              <div className="m-auto text-center my-16">
                 <h3>Codepen local weather app(vanilla js)</h3>
                 <a href="https://codepen.io/iinguistics/pen/ExNxpyB" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 duration-700">
                     Click Here
                     </a>
             </div>

             </div>
        
    )
}

export default Test