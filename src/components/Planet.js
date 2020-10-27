import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';


const Planet = ({ match }) => {
    const [planet, setPlanet] = useState(match.params.id);
    const [marsPhotos, setMarsPhotos] = useState([]);

    
    useEffect(()=>{
    console.log(planet);
    }, [])


    const marsRoverPics = async()=>{
            const  KEY = 'edz1IInEZpnZubV09AMVZYN1746qxWQtvhMHZ72T';
            const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${KEY}`);
        
            setMarsPhotos(response.data.photos);
            }
    


    const marsRoverButton = ()=>{
        if(planet === 'mars'){
            return (
                <div>
                 <button  
                type="submit"
                className= "bg-black hover:bg-blue-900 text-white font-bold py-2 px-4"
                onClick={()=> marsRoverPics()}>
                View mars photo's
                </button>
                </div>
               
           
            )
        }
    }


    const renderMarsRover = ()=>{
        if(marsPhotos !== null){
            return marsPhotos.map((photo)=>{
                return (
                    <Fragment key={photo.id} className="w-3 p-4 m-0">
                        <img height="300px" width="300px" src={`${photo.img_src}`} alt="planet mars" />
                    </Fragment>
                )
            });
        }     
      };
    




    return (
        <div class="container mx-auto">
            {planet}
            {marsRoverButton()}
            <div className="flex flex-row flex-wrap justify-items-auto">
                {renderMarsRover()}
            </div>
            
        </div>
    )
}

export default Planet
