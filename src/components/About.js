import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
          <div className="divider-title items-center">
            <h3 id="about-title" className="text-2xl ml-20 ">About Me</h3>  
            <div className="divider"></div> 
           </div>

           <div className="flex flex-col md:flex-row mt-12 xl:mt-32 items-center justify-center">
             <div className="w-1/2 text-left ">
                    <p className="text-xl">Hello! I'm James, a front end developer based in El Dorado Hills, CA. I enjoy creating software that has a positive impact of people's life, whether that be websites, applications, or anything in between.</p>
                    <p className="text-xl">Learning is one of my passion's, I like to challenge myself, and do interesting things that matter.</p><br />
                    <p className="text-xl">I enjoy problem solving, & have high ambitions with high attention to detail, I am interested in the entire frontend, backend spectrums & working with fellow ambitious life long learners.</p>
                </div>
                <div className="w-1/2  mt-8">
                <a href="https://github.com/Iinguistics" target="_blank" rel="noopener noreferrer">
                  <div className="blendParent item "><div className="blend-3 all"></div></div>
                </a> 
                </div>
             </div>
        </Fragment>   
    )
}

export default About
