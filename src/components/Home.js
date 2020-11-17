import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlanetList from './PlanetList';
import axios from 'axios';
import { KEY } from '../../nasaKey.js';


const Home = () => {
    const [imgOfDay, setImgOfDay] = useState({})


    useEffect(()=>{
    const imgOfDayCall = async()=>{
        const res = await axios.get('https://api.nasa.gov/planetary/apod',
        {
            params: {
                date: getCurrent(),
                hd: true,
                api_key: KEY
            }
        }
        );
        setImgOfDay(res.data)
    }
    imgOfDayCall()
    
    }, []);

    const getCurrent = ()=>{
        const date = new Date();
        const today = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const current = `${year}-${month + 1}-${today}`
        return current;
    }
    

    const renderImgOfDay = ()=>{
        if(imgOfDay){
            return (
                <div className="flex flex-col items-center  md:flex-row">
                    <img src={imgOfDay.hdurl ? imgOfDay.hdurl : imgOfDay.url} alt={imgOfDay.title} className="my-2 w-1/2 mr-10" />
                     <div className="my-2 w-1/2">
                        <p>{imgOfDay.explanation}</p><br />
                        <i>{imgOfDay.date}</i><br />
                        <small>{imgOfDay.copyright}</small>
                    </div>
                </div>
            )
        }
    }


    const renderEarthSat = ()=>{
        return (
            <div className="flex flex-col items-center md:flex-row mt-24">
                <div className="my-2 w-1/2">
                    <p>Landsat imagery is provided to the public as a joint project between NASA and USGS. A recent industry report on landsat satellite imagery data estimates that total annual value to the economy of $2.19 billion, far exceeding the multi-year total cost of building, launching, and managing Landsat satellites and sensors. The value is derived from consumer use of the data. The objective of this endpoint is to give you an easy to use taste of what Landsat imagery data can provide. There are more complicate APIs available if you want to build models on top of satellite imagery, apply machine-learning, or minimize clouds in your image.</p><br />
                    Try out <Link to="/landsat/earth">Landsat imagery</Link>
                </div>
                <img src={require('../assets/Home/satImageExample.png')} alt="satellite imgage of Houston Tx" className="my-2 w-1/2 ml-10" /> 
            </div>
        )
          
    }


    





    return (
        <div className="container m-auto my-12 flex flex-wrap flex-col items-center  md:flex-row">
           {renderImgOfDay()}
           {renderEarthSat()}
          
        </div>
    )
}

export default Home
