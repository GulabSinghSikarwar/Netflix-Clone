import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from './Row.module.css'
function Row({ title, isLarge, url }) {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(url).then((resp) => {
            setMovies(resp.data.results)


        }).catch((err) => {
            console.log(err);

        })

    }, [url])
    console.log("MOVIES ->", movies);
    console.log("title->", title);
    const all_movies = movies.map((movie) => {
        

           return   <img className={(isLarge)?styled.largeMovie:styled.movie}  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />

        

    })

    return (


        <div className={styled.series}>
            <h1>{title}</h1>
            <div className={styled.row} >

                {
                    all_movies
                }

            </div>
        </div>
    )
}

export default Row