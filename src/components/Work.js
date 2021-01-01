import React, { Fragment } from 'react'

const Work = () => {
    return (
        <Fragment>
          <div className="divider-title items-center">
            <h3 id="about-title" className="text-2xl ml-20 ">Some Projects I've Built</h3>  
            <div className="divider"></div> 
           </div>

           {/* tech-factory / ecommerce */}
           <div className="flex flex-col md:flex-row mt-12 items-center md:ml-20">
             <div className="w-3/4 md:w-1/2 mp4-background">
             <a href="https://tech-factory.herokuapp.com/" target="_blank" rel="noopener noreferrer">
               <video autoPlay muted loop preload="true">
                    <source src={require("../assets/work/tech-factory.mp4")}
                    type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
                    </video> 
                    </a>
                </div>
                <div className="w-3/4 md:w-1/2 md:w-1/2 mt-8 p-3">
                <a href="https://tech-factory.herokuapp.com/" target="_blank" rel="noopener noreferrer"
                   className="text-xl md:text-3xl hover:text-blue-900 duration-700" id="no-underline"
                >
                    Tech Factory
                </a>
                <div className=" shadow-xl p-5 rounded-lg text-lg">
                <p>Full stack ecommerce app. User's can login to shop/purchase products. Admins can edit/update users, products & deliveries.
                </p>
            </div>
            
            <li className="inline p-1 md:p-3">React & Redux</li>
            <li className="inline p-1 md:p-3">React-Bootstrap</li>
            <li className="inline p-1 md:p-3">Node.js</li>
            <li className="inline p-1 md:p-3">MongoDB</li>
            <li className="inline p-1 md:p-3">Paypal API</li>
            <a href="https://github.com/Iinguistics/tech-factory" target="_blank" rel="noopener noreferrer">
                <img src={require("../assets/icons/github-black.png")} className="h-8 m-2" alt="github logo" />
                </a>
                </div>
             </div>

            {/* Hair */}
           <div className="flex flex-col md:flex-row mt-12 xl:mt-32 items-center md:ml-20">
           <div className="w-3/4 md:w-1/2 md:w-1/2 mt-8 p-3">
                <a href="https://hair-salon-site.herokuapp.com/" target="_blank" rel="noopener noreferrer"
                   className="text-xl md:text-3xl hover:text-blue-900 duration-700" id="no-underline"
                >
                    Hair
                </a>
                <div className=" shadow-xl p-5 rounded-lg text-lg">
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
                <img src={require("../assets/icons/github-black.png")} className="h-8 m-2" alt="github logo" />
                </a>
                </div>
             <div className="w-3/4 md:w-1/2 mp4-background">
             <a href="https://hair-salon-site.herokuapp.com/" target="_blank" rel="noopener noreferrer">
               <video autoPlay muted loop preload="true">
                    <source src={require("../assets/work/hair-salon.mp4")}
                    type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
                    </video> 
                    </a>
                </div>
             </div>

              {/* stock search */}
           <div className="flex flex-col md:flex-row mt-12 xl:mt-32 items-center md:ml-20">
             <div className="w-3/4 md:w-1/2 mp4-background">
             <a href="https://stock-api.netlify.app/" target="_blank" rel="noopener noreferrer">
               <video autoPlay muted loop preload="true">
                    <source src={require("../assets/work/stock-project.mp4")}
                    type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
                    </video> 
                    </a>
                </div>
                <div className="w-3/4 md:w-1/2 md:w-1/2 mt-8  p-3">
                <a href="https://stock-api.netlify.app/" target="_blank" rel="noopener noreferrer"
                   className="text-xl md:text-3xl hover:text-blue-900 duration-700" id="no-underline"
                >
                    Stock Search
                </a>
                <div className=" shadow-xl p-5 rounded-lg text-lg">
                <p>Search for a stock symbol to find out the latest $ price.
                </p>
            </div>
            
            <li className="inline p-1 md:p-3">React</li>
            <li className="inline p-1 md:p-3">React-chartjs</li>
            <li className="inline p-1 md:p-3">Alpha Vantage API</li>
            <a href="https://github.com/Iinguistics/stocks-api-react" target="_blank" rel="noopener noreferrer">
                <img src={require("../assets/icons/github-black.png")} className="h-8 m-2" alt="github logo"/>
                </a>
                </div>
             </div>

             {/* algorithm archive */}
           <div className="flex flex-col md:flex-row mt-12 xl:mt-32 items-center md:ml-20">
             
                <div className="w-3/4 md:w-1/2 md:w-1/2 mt-8  p-3">
                <a href="https://www.algorithm-archive.org/" target="_blank" rel="noopener noreferrer"
                   className="text-xl md:text-3xl hover:text-blue-900 duration-700" id="no-underline"
                >
                   Algorithm Archive
                </a>
                <div className=" shadow-xl p-5 rounded-lg text-lg">
                <p>Open source project I am contributing to. 
                A guide for all algorithms in all languages. This project brings the joy's of algorithm's into a good learning resource for everyone to explore & learn.
                </p>
            </div>
            <li className="inline p-1 md:p-3">HonKit</li>
            <li className="inline p-1 md:p-3"></li>
            <a href="https://github.com/algorithm-archivists/algorithm-archive" target="_blank" rel="noopener noreferrer">
                <img src={require("../assets/icons/github-black.png")} className="h-8 m-2" alt="github logo"/>
                </a>
                </div>

                <div className="w-3/4 md:w-1/2 mp4-background">
             <a href="https://www.algorithm-archive.org/" target="_blank" rel="noopener noreferrer">
               <video autoPlay muted loop preload="true">
                    <source src={require("../assets/work/algo-archive.mp4")}
                    type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
                    </video> 
                    </a>
                </div>
             </div>

                {/* astrospace */}
           <div className="flex flex-col md:flex-row mt-12 xl:mt-32 items-center md:ml-20">
             <div className="w-3/4 md:w-1/2 mp4-background">
             <a href="https://astro-space.netlify.app/" target="_blank" rel="noopener noreferrer">
               <video autoPlay muted loop preload="true">
                    <source src={require("../assets/work/astro-space.mp4")}
                    type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
                    </video> 
                    </a>
                </div>
                <div className="w-3/4 md:w-1/2 md:w-1/2 mt-8  p-3">
                <a href="https://astro-space.netlify.app/" target="_blank" rel="noopener noreferrer"
                   className="text-xl md:text-3xl hover:text-blue-900 duration-700" id="no-underline"
                >
                    Astrospace
                </a>
                <div className=" shadow-xl p-5 rounded-lg text-lg">
                <p>Astronomy app, to learn about the stars & planets ect...
                </p>
            </div>
            
            <li className="inline p-1 md:p-3">React</li>
            <li className="inline p-1 md:p-3">Tailwind css</li>
            <li className="inline p-1 md:p-3">Nasa APOD, LandSat & Rover API's</li>
            <li className="inline p-1 md:p-3">Axios</li>
            <a href="https://github.com/Iinguistics/astrospace" target="_blank" rel="noopener noreferrer">
                <img src={require("../assets/icons/github-black.png")} className="h-8 m-2" alt="github logo" />
                </a>
                </div>
             </div>

             {/* natura */}
           <div className="flex flex-col md:flex-row mt-12 xl:mt-32 items-center md:ml-20">
             
             <div className="w-3/4 md:w-1/2 md:w-1/2 mt-8  p-3">
             <a href="https://natura-app.netlify.app/" target="_blank" rel="noopener noreferrer"
                className="text-xl md:text-3xl hover:text-blue-900 duration-700" id="no-underline"
             >
                Natura
             </a>
             <div className=" shadow-xl p-5 rounded-lg text-lg">
             <p>Find's natural current event's around the globe. </p>
         </div>
         <li className="inline p-1 md:p-3">React</li>
         <li className="inline p-1 md:p-3">Tailwind</li>
         <li className="inline p-1 md:p-3">Google Maps</li>
         <li className="inline p-1 md:p-3">Nasa EONET</li>
         <a href="https://github.com/Iinguistics/natura" target="_blank" rel="noopener noreferrer">
             <img src={require("../assets/icons/github-black.png")} className="h-8 m-2" alt="github logo"/>
             </a>
             </div>

             <div className="w-3/4 md:w-1/2 mp4-background">
          <a href="https://natura-app.netlify.app/" target="_blank" rel="noopener noreferrer">
            <video autoPlay muted loop preload="true">
                 <source src={require("../assets/work/natura.mp4")}
                 type="video/mp4" />
             Sorry, your browser doesn't support embedded videos.
                 </video> 
                 </a>
             </div>
          </div>
        </Fragment>   
    )
}

export default Work
