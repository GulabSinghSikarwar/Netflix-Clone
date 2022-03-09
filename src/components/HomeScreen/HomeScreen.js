import React from 'react'
import Banner from '../Banner/Banner'
import Nav from '../Nav/Nav'
import Row from '../Rows/Row'
import request from '../TMDB/Request'
import styled from './HomeSceen.module.css'
function HomeScreen() {
  return (
    <div className={styled.homeScreen}>
      
      {/* Nav  */}

      {/* Banner  */}
      <Banner/>
      <Nav />

      <Row
      title={"Netflix Original"}
      url={request.getNetflixOriginal}
      isLarge
      />
      <Row
      title={"Trending Now"}
      url={request.getTredinging}
      
      />
      <Row
      title={"Top Rated "}
      url={request.getTopRated}
      
      />
      <Row
      title={"Comedy Movies "}
      url={request.getComedyMovies}
      
      />
      <Row
      title={"Action Movies"}
      url={request.getTredinging}
      
      />
      <Row
      title={"Horror Movies "}
      url={request.getHorrorMovies}
      
      />
      <Row
      title={"Romance Moives"}
      url={request.getRomanticMovies}
      
      />
      <Row
      title={"Documentaries "}
      url={request.getTopRated}
      
      />




      {/* Rows  */}
    </div>
  )
}

export default HomeScreen