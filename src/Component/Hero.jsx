import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests, { createImageUrl } from '../services/movieServices'

 const Hero = () => {

    const [Movie,setMovie]=useState({})

    useEffect(() => {
        console.log('use effect callled')
        axios
            .get(requests.requestPopular)
            .then((res) => {
                const movies=res.data.results
                  
                const randomMovie=movies[Math.floor(Math.random()*movies.length)]
                console.log("......random movie.....",randomMovie) 
                setMovie(randomMovie);
            })
            .catch((err) => {
                console.error('Error fetching data:', err.message);
            });
    }, []);
    const {title,backdrop_path, release_date,overview}=Movie

    const truncate = (str, length) => {
        if (!str) return ''; 
        return str.length > length ? str.slice(0, length) + '...' : str;
      };
       


  return (
    <div className="w-full h-[550px] lg:h-[850px]">
            <div className="w-full h-full relative">
                <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black"/>
                        <img
                    
                            src={createImageUrl(backdrop_path,'original')}
                            alt={title}
                            className="w-full h-full object-cover object-top"
                        />
            </div>
             <div className='absolute w-full top:[10%] lg:top-[25%] p-4 md:p-8'>
                <h1 className='text text-3xl md:text-6xl font-nsansBold'>{title}</h1>
                <div className='mt-8 mb-4'>
                    <button className='capitalize border bg-gray-300 py-2 text-black px-5'>play</button>
                    <button  className='capitalize border border-gray-300 py-2  px-5 ml-4'>watch later</button>
                </div>
                <p className='text-gray-400 text-5m'  >{release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-[50%] xl:max-w-[35%] text-gray-200'>{truncate(overview, 165)}</p>
                </div>

        </div>
  )
}

export default Hero