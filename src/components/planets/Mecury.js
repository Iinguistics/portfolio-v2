import React, { Fragment } from 'react'



const Mecury = () => {
    return (
         <Fragment>
             <div className="flex flex-col items-center md:flex-row my-24">
             <div className="my-2 w-1/2">
                    <h3 className="text-3xl">Mecury Overveiw</h3>
                    <p>The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system, that title belongs to nearby Venus, thanks to its dense atmosphere.</p><br />
                </div>
                <img src={require('../../assets/planets/Mecury/Mecury-1.jpg')} alt="satellite imgage of Houston Tx" className="my-2 w-1/2 ml-10" /> 
             </div>
                
                <section className="bg-gray-200 facts">
                      <h3 className="text-3xl">Ten Facts About Mercury</h3>
                     <div className="flex flex-col items-center md:flex-row my-12">
            
                  </div>
                </section>
            </Fragment>
    )
}

export default Mecury
