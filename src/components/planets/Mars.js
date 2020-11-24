import React, { useState, Fragment } from 'react';
import axios from 'axios';


const Mars = ({ match }) => {
    const [planet, setPlanet] = useState(match.params.id);
    const [marsPhotos, setMarsPhotos] = useState([]);
    const [marsRover, setMarsRover] = useState({});

    
   


    const marsRoverPics = async()=>{
            const  KEY = 'edz1IInEZpnZubV09AMVZYN1746qxWQtvhMHZ72T';
            const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${KEY}`);
        
            setMarsPhotos(response.data.photos);
            setMarsRover(response.data.photos[0].rover);
            }
    


    const marsRoverButton = ()=>{
        
            return (
                <div className="my-3">
                 <button  
                type="submit"
                className= "bg-black hover:bg-blue-900 text-white font-bold py-2 px-4"
                onClick={()=> marsRoverPics()}>
                View mars photo's
                </button>
                </div>
            )
    }


    const renderMarsRover = ()=>{
        if(marsPhotos !== null){
            return marsPhotos.map((photo)=>{
                return (
                    <Fragment key={photo.id}>
                        <img src={`${photo.img_src}`} alt="planet mars" className="my-2 w-1/2 p-2 md:w-1/3" />
                    </Fragment>
                )
            });
        }     
      };


      const renderMarsRoverInfo = ()=>{
        if(marsRover.name){
            return (
                <Fragment>
                    <li>Rover Name: {marsRover.name}</li>
                    <li>Launch Date: {marsRover.launch_date}</li>
                    <li>Landing Date: {marsRover.landing_date}</li>
                    <li>Status: {marsRover.status}</li>
                </Fragment>
            )
        }     
      };





    return (
        <div className="container mx-auto">
            {planet}
            {marsRoverButton()}
            {renderMarsRoverInfo()}
            <div className="flex flex-row flex-wrap justify-between my-2">
                  {renderMarsRover()}
            </div>
        </div>
    )
}

export default Mars
