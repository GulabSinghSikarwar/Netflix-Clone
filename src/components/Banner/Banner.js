
import axios from 'axios';
import request from '../TMDB/Request';
import React, { useEffect, useState } from 'react'
import styled from './Banner.module.css'
function Banner() {

    const [movies ,setMovies]=useState([]);
    useEffect(()=>{
        axios.get(request.getNetflixOriginal).then((resp)=>{
            console.log(resp.data.results);
        const allMovies=[...resp.data.results];
        setMovies(
            allMovies[Math.floor(Math.random()*allMovies.length-1)]
        )









        })
    },[])

    const truncateString = (String, n) => {

        return (String.length > n) ? String.substring(0, n - 1) + "...." : String;

    }
    console.log(movies);
    return (


        <header
            style={{
                // backgroundColor: "black"
                // backgroundImage: 'url("https://www.techtalkthai.com/wp-content/uploads/2020/03/netflix_banner_1.jpg")'
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`
                , backgroundSize: 'cover',

                backgroundPosition: 'center center'
            }}
            className={styled.banner}
        >
            <div className={styled.banner_content}> 
                <h1 className={styled.banner_title}>{movies.name}</h1>
                <div className={styled.banner_buttons}>
                    <button className={styled.banner_btn}>play</button>
                    <button className={styled.banner_btn}>My List</button>
                    {/* <button>my List</button> */}


                </div>

                <div className={styled.banner_decription}>
                    {truncateString((movies.overview)?movies.overview:"", 100)}

                </div>
                <div className={styled.fade} />





            </div>

        </header>
    )
}

export default Banner