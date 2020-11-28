import React, { Fragment } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import About from './About';
import Skills from './Skills';

const Home = () => {
   return(
       <Fragment>
         <section className="md:ml-20 md:mt-10 md:h-screen xl:mt-36">
         <h5>Hi, my name is</h5>
            <h1 className="text-xl md:text-5x1 xl:text-6xl">James Goytia</h1>
            <h3 className="text-xl md:text-5xl xl:text-6x1 md:w-1/2 leading-snug">I want to build things that make a difference</h3>
            <p className="text-base xl:text-lg my-3 md:w-1/3 md:my-6">I'm a front end developer based in El Dorado Hills, CA specializing in
                building phenomenal websites, applications, and everything in between.</p>
            <a href="mailto:jmsgoytia@gmail.com" className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-small text-white bg-gray-900 hover:bg-indigo-900 mt-4" id="no-underline">Get In Touch</a>
         </section>

         

            {/*side link/email */}  
         <div className="invisible md:visible" id="side-link-email">
            <li className="side-email-flex">
            <a href="mailto:jmsgoytia@gmail.com">jmsgoytia@gmail.com</a>
            </li>
            <li className="side-email-flex">
            <a className="line"></a>
            </li>
        </div>


         {/* side link/linkdn  MAKE LINKDIN ACC & UPDATE HREF */}
        <div className="invisible md:visible" id="side-link">
            <li className="side-flex">
            <a className="github" href="https://github.com/Iinguistics" target="_blank"> 
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="34" height="34" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00A1F1" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <path d="M12 16v-5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
            </a> 
            </li>
            <li className="side-flex">
            <a className="line"></a>
            </li>
        </div>

        <ScrollAnimation animateIn="fadeInUp" delay={300}>
        <section className="md:mt-40 md:h-screen my-20 ml-8 xl:ml-32"  id="about">
            <About />
        </section>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" delay={300}>
        <section className="my-4 md:h-screen"  id="skills">
          <Skills />
        </section>
        </ScrollAnimation>
        
        

       </Fragment>
   )
}

export default Home
