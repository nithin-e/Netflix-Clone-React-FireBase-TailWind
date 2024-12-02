import React, { useState } from 'react';
import { createImageUrl } from '../services/movieServices';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieItem = ({ movie}) => {

    const [like,setLike]=useState(false)
const {title,backdrop_path,poster_path}=movie

const addFav=(e)=>{
e.preventDefault()

console.log('...event triger aaayo...');



}


  return (

    <div className='relative w-[160px] sm:w-[200px] md:w-[240] lg:w-[280px] inline-block rounted-lg overflow-hidden cursor-pointer m-2'>
        <img src={createImageUrl(backdrop_path ?? poster_path, 'w500')} alt={title} className="w-full h-40 block object-cover object-top"/>   

        <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full'>{movie.title}</p>

        <p>{like?(<FaHeart size={20} className='absolute top-2 left-2 text-gray-300' onClick={addFav} />)
        :(<FaRegHeart size={20} className='absolute top-2 left-2 text-gray-300' onClick={addFav}   />)}</p>
            </div> 
    </div>
    
  );
};

export default MovieItem;
