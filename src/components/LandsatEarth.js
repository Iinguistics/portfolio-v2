import React, { useState } from 'react'
import axios from 'axios';
// TODO:  import from env
 import { KEY } from '../../nasaKey';
import Spinner from './Helpers/Spinner';



const LandsatEarth = () => {
    const [lat, setLat] = useState(33.413102); // Phoenix
    const [long, setLong] = useState(-111.983643);
    const [satImg, setSatImg] = useState("");
    const [loading, setLoading] = useState(false);

    //const cors = 'https://cors-anywhere.herokuapp.com/'

        const date = new Date();
        const today = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const current = `${year}-${month + 1}-${today}`

       
    
    const earthHandler = async(e)=>{
      e.preventDefault();
      setSatImg("");
      setLoading(true);
      const response = await axios.get(`https://api.nasa.gov/planetary/earth/imagery?lon=${long}&lat=${lat}&date=${current}&dim=0.15&api_key=${KEY}`)
      setSatImg(response.config.url);
      setTimeout(()=>{
       setLoading(false);
      }, 6000)
   }
 
    
 
        const renderSatImg = ()=>{
        if(satImg !== ""){
            return <img src={satImg} alt="birds eye snapshot" className="my-2 w-3/4 md:w-1/2  m-auto"/>
        }
    }

        const renderLoader = ()=>{
            if(loading){
                return <Spinner />
            }
        }



    return (
       <div>
         <div className="m-auto max-w-xs container">
            <div className="my-12">
                <p>Landsat imagery is provided to the public as a joint project between NASA and USGS.</p>
                <h2>Enter in coordinates for a satellite snapshot</h2>
            </div>
         <div className="w-full ">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={earthHandler}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="latitude">
       Latitude
      </label>
      <input className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="latitude"
       type="number"
       step="any"
       placeholder="Latitude"
       value={lat}
       onChange={(e)=> setLat(e.target.value)}
        />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="longitude">
        Longitude
      </label>
      <input className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
       id="longitude" 
       type="Number" 
       step="any"
       placeholder="longitude"
       value={long}
       onChange={(e)=> setLong(e.target.value)}
       />
    </div>

    <div className="text-center">
      <button className="bg-black hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="submit">
        Submit
        </button>
      </div>
    </form>
   </div>
  </div>
{renderLoader()}
{renderSatImg()}
</div>
        
        
    )
}

export default LandsatEarth
