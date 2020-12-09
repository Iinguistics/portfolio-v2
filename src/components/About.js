import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
          <div className="divider-title items-center">
            <h3 id="about-title" className="text-2xl ml-16 md:ml-20">About Me</h3>  
            <div className="divider"></div> 
           </div>

           <div className="flex flex-col md:flex-row xl:mt-20 items-center md:ml-20">
             <div className="w-3/4 md:w-1/2 md:pr-10">
                    <p className="text-xl">Hello! I'm James, a front end developer based in El Dorado Hills, CA.</p>
                    <p className="text-xl">I enjoy finding creative solutions to challenging problems.</p> <br />
                    <p className="text-xl"> I am a self-starter and a life-long learner with excellent attention to detail, focused on creating software that has a positive impact on people's lives.</p><br />
                </div>
                <div className="w-2/3 md:w-1/2  mt-10 md:mt-0">
                <a href="https://github.com/Iinguistics" target="_blank" rel="noopener noreferrer">
                  <div className="blendParent item"><div className="blend-3 all"></div></div>
                </a> 
                </div>
             </div>
        </Fragment>   
    )
}

export default About
