import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieModal from '../Screen/MovieDetailsModal/MovieModal';
import styled from './Row.module.css'
import { useDispatch } from 'react-redux';
import { showDetails,setMovie } from '../store/Slices/movieDetails';
function Row({ title, isLarge, url }) {
    const dispatch=useDispatch();
    

    const [movies, setMovies] = useState([]);
    const showDetailsListener=(movieDetails)=>{
        dispatch(setMovie(movieDetails))
        dispatch(showDetails())


    }
   


    useEffect(() => {
        axios.get(url).then((resp) => {
            setMovies(resp.data.results)


        }).catch((err) => {
            console.log(err);

        })

    }, [url])
    // console.log("MOVIES ->", movies);
    // console.log("title->", title);
    const all_movies = movies.map((movie) => {
      

        return <img  onClick={()=>{
            console.log( " Movie On Image  : -> ", movie);

           const movieDetails={
               name:(!movie.name)?movie.original_title:movie.name,
               description:movie.overview,
               imgUrl:`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
               rating:movie.vote_average

           }
           console.log(  "Movie name :  ", movie.title);
            dispatch(setMovie(movieDetails))
            dispatch(showDetails())
        }} className={(isLarge) ? styled.largeMovie : styled.movie} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />



    })

    return (

        <>
        {/* <MovieModal/> */}

            <div className={styled.series}>
                <h1>{title}</h1>
                {/* <MovieModal/> */}
                <div className={styled.row} >

                    {
                        all_movies
                    }

                </div>
            </div>
        </>
    )
}

export default Row