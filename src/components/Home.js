import React, { useEffect, useState } from 'react'
import PlanetList from './PlanetList';
import axios from 'axios';
import { KEY } from '../ApiKeys/nasaKey';


const Home = () => {
    const [imgOfDay, setImgOfDay] = useState({})


    useEffect(()=>{
    const imgOfDayCall = async()=>{
        const res = await axios.get('https://api.nasa.gov/planetary/apod',
        {
            params: {
                date: getCurrent(),
                hd: false,
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
    
    console.log(imgOfDay);

    const renderImgOfDay = ()=>{
        if(imgOfDay){
            return (
                <div className="flex flex-col items-center  md:flex-row">
                    <img src={imgOfDay.hdurl ? imgOfDay.hdurl : imgOfDay.url} alt={imgOfDay.title} className=" my-2 w-1/2 mx-3" />
                     <div className="my-2 w-1/2">
                        <p>{imgOfDay.explanation}</p><br />
                        <i>{imgOfDay.date}</i><br />
                        <small>{imgOfDay.copyright}</small>
                    </div>
                    
                </div>
            )
        }
        
    }





    return (
        <div className="container m-auto my-12">
           {renderImgOfDay()}
          
           <PlanetList />
        </div>
    )
}

export default Home
