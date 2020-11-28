import React, { Fragment } from 'react'

const Work = () => {
    return (
        <Fragment>
          <div className="divider-title items-center">
            <h3 id="about-title" className="text-2xl ml-20 ">Some Projects I've Built</h3>  
            <div className="divider"></div> 
           </div>

            {/* project one */}
           <div className="flex flex-col md:flex-row mt-12 xl:mt-32 items-center md:ml-20">
             <div className="w-2/3 md:w-1/2 ">
             <a href="https://hair-salon-site.herokuapp.com/" target="_blank" rel="noopener noreferrer">
               <video autoPlay muted loop preload="true">
                    <source src={require("../assets/work/hair-salon.mp4")}
                    type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
                    </video> 
                    </a>
                </div>
                <div className="w-2/3 md:w-1/2 md:w-1/2 mt-10 md:mt-0 p-3">
                <a href="https://hair-salon-site.herokuapp.com/" target="_blank" rel="noopener noreferrer"
                   className="text-xl md:text-3xl hover:text-blue-900 duration-700" id="no-underline"
                >
                    Hair
                </a>
                <div className=" shadow-2xl p-5 rounded-lg text-lg">
                <p>A full stack crud app. Clients can browse through services & book appointments. Employees can login to an employee dashboard
                to view, update & delete appointments.
                </p>
            </div>
            
            <li className="inline p-1 md:p-3">Vue</li>
            <li className="inline p-1 md:p-3">Node.js</li>
            <li className="inline p-1 md:p-3">Mongo</li>
            <li className="inline p-1 md:p-3">Bcrypt</li>
            <li className="inline p-1 md:p-3">Three.js</li>
            <a href="https://github.com/Iinguistics/Hair" target="_blank" rel="noopener noreferrer">
                <img src={require("../assets/icons/github-black.png")} className="h-8 m-2" />
                </a>
                </div>
             </div>

             {/* project two */}
           <div className="flex flex-col md:flex-row mt-12 xl:mt-32 items-center md:ml-20">
             <div className="w-2/3 md:w-1/2 ">
             <a href="https://hair-salon-site.herokuapp.com/" target="_blank" rel="noopener noreferrer">
               <video autoPlay muted loop preload="true">
                    <source src={require("../assets/work/hair-salon.mp4")}
                    type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
                    </video> 
                    </a>
                </div>
                <div className="w-2/3 md:w-1/2 md:w-1/2 mt-10 md:mt-0 p-3">
                <a href="https://hair-salon-site.herokuapp.com/" target="_blank" rel="noopener noreferrer"
                   className="text-xl md:text-3xl hover:text-blue-900 duration-700" id="no-underline"
                >
                    Hair
                </a>
                <div className=" shadow-2xl p-5 rounded-lg text-lg">
                <p>A full stack crud app. Clients can browse through services & book appointments. Employees can login to an employee dashboard
                to view, update & delete appointments.
                </p>
            </div>
            
            <li className="inline p-1 md:p-3">Vue</li>
            <li className="inline p-1 md:p-3">Node.js</li>
            <li className="inline p-1 md:p-3">Mongo</li>
            <li className="inline p-1 md:p-3">Bcrypt</li>
            <li className="inline p-1 md:p-3">Three.js</li>
            <a href="https://github.com/Iinguistics/Hair" target="_blank" rel="noopener noreferrer">
                <img src={require("../assets/icons/github-black.png")} className="h-8 m-2" />
                </a>
                </div>
             </div>
        </Fragment>   
    )
}

export default Work
