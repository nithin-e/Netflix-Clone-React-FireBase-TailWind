import React from 'react'
import Hero from '../Component/Hero'
import MovieRow from '../Component/movieRow'
import requests from '../services/movieServices'


const Home = () => {
  return (
    <div>
     <Hero/>
   <MovieRow title='upcoming' url={requests.requestUpcoming} />
   <MovieRow title='trending' url={requests.requestTrending}/>
   <MovieRow title='top rated' url={requests.requestTopRated} />
   <MovieRow title='horror'    url={requests.requestHorror}/>
   <MovieRow title='popular'    url={requests.requestPopular}/>
    </div>
  )
}

export default Home
