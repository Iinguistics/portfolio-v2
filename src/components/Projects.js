import React, { useEffect } from 'react'

const Projects = () => {
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }, [])


    return (
        <div className="h-full my-4 md:h-screen">
          <div className="text-center m-auto text-2xl my-5">
              <h3>More Projects</h3>
          </div>

          {/* project one */}
          <div className="flex flex-col md:flex-row mt-12 xl:mt-32 items-center md:ml-20">
             <div className="w-2/3 md:w-1/2 ">
             <a href="https://github.com/Iinguistics/ctdi" target="_blank" rel="noopener noreferrer">
               <video autoPlay muted loop preload="true">
                    <source src={require("../assets/work/ctdi.mp4")}
                    type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
                    </video> 
                    </a>
                </div>
                <div className="w-2/3 md:w-1/2 md:w-1/2 mt-10 md:mt-0 p-3">
                <a href="https://github.com/Iinguistics/ctdi" target="_blank" rel="noopener noreferrer"
                   className="text-xl md:text-3xl hover:text-blue-900 duration-700" id="no-underline"
                >
                    CTDI
                </a>
                <div className=" shadow-xl p-5 rounded-lg text-lg">
                <p>Focused on learning UI libraries, threejs,hovereffect, blotterjs, animejs & google charts to name a few.
                </p>
            </div>
            
            <li className="inline p-1 md:p-3">Vue</li>
            <li className="inline p-1 md:p-3">Google Charts</li>
            <li className="inline p-1 md:p-3">Three.js</li>
                </div>
             </div>
        </div>
          
    )
}

export default Projects
