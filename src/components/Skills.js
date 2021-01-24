import React, { Fragment } from 'react';
import Particles from 'react-particles-js';



const Skills = () => {
     

    return (
         <Fragment>
             <div className="divider-title md:mb-32">
                <h3 id="about-title" className="text-2xl ml-20">SKILLS</h3>  
                <div className="divider"></div> 
              </div>
            

             <div className="flex items-center flex-row flex-wrap  text-center mt-12 md:ml-20 justify-center" >
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">JavaScript <span className="hidden md:contents">(ES6+)</span></p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">HTML & CSS</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">React / Redux</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">Vue</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">Bootstrap</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">JQuery</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">Node.js</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">Git</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">Mongo DB</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">Data structures</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">Linux</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">Gulp</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">PHP / Laravel</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">MySQL</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">Webpack</p>
                 </div>
                 <div className="w-1/3  md:w-1/4 mb-16 md:text-xl">
                 <i className="fas fa-code-branch pr-2"></i><p className="inline">Tailwind</p>
                 </div>
                 <Particles id="particles-js" className="invisible md:visible"
    params={{
	    "particles": {
            "number": {
            "value": 6,
            "density": {
            "enable": true,
            "value_area": 800
            }
          },
          "color": {
            "value": "#121212"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#121212"
            },
            "polygon": {
              "nb_sides": 5
            },
            
          },
          "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#626EE3",
            "opacity": 1,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 250,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 2
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
	}} />
             </div>
             
         </Fragment>
           
           

    )
}

export default Skills
