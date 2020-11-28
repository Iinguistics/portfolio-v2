import React, { Fragment } from 'react'

const Test = () => {
    return (
        <Fragment>
          <div className="divider-title items-center">
            <h3 id="about-title" className="text-2xl ml-20 ">About Me</h3>  
            <div className="divider"></div> 
           </div>

           <div className="flex flex-col items-center md:flex-row md:justify-between">
                <div className="my-2 ">
                    <p>Landsat imagery is provided to the public as a joint project between NASA and USGS. A recent industry report on landsat satellite imagery data estimates that total annual value to the economy of $2.19 billion, far exceeding the multi-year total cost of building, launching, and managing Landsat satellites and sensors. The value is derived from consumer use of the data. The objective of this endpoint is to give you an easy to use taste of what Landsat imagery data can provide. There are more complicate APIs available if you want to build models on top of satellite imagery, apply machine-learning, or minimize clouds in your image.</p><br />
                    
                </div>
                <img src={require('../assets/about/headshot.jpg')} alt="satellite imgage of Houston Tx" className="my-2  ml-10" /> 
            </div>
        </Fragment>   
    )
}

export default Test