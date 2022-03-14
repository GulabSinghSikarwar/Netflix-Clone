import React from 'react'
import styled from './MovieDetails.module.css'
import star from '../../resources/images/star.png'
import ReactDOM from 'react-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { hideDetails ,setMovie } from '../../store/Slices/movieDetails'

const MovieModal_Backdrop = () => {

    return (
        <div className={styled.MovieModal_Backdrop} />
    )
}
/*
 const movieDetails={
               name:movie.title,
               description:movie.overview,
               imgUrl:`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
               rating:movie.vote_average

           }
            */

const MovieModal_Overlay = () => {
    const movie = useSelector((state) => {
        return state.showDetailsSlice.movieDetails;
    })
    const dispatch=useDispatch()

    const hideMovieDetails=()=>{
        dispatch(setMovie(null))
        dispatch(hideDetails());
        
        


    }
    return (
        <div className={styled.MovieModal_Overlay}>

            <div className={styled.MovieModal_Overlay_card_header}>
                <img src={movie.imgUrl} />


            </div>
            <div className={styled.MovieModal_Overlay_card_body}>
                <h2>{movie.name}</h2>
                <p> {movie.description}</p>
                <div className={styled.rating}>
                     <img src={star} /> 
                     <span>{movie.rating}</span>
                     </div>

            </div>
            <div className={styled.MovieModal_Overlay_card_footer}>
                <button onClick={hideMovieDetails}> Cancel</button>

            </div>




        </div >
    )
}
function MovieModal() {
    return (
        <>
            {ReactDOM.createPortal(<MovieModal_Backdrop />,
                document.getElementById("root_backdrop")
            )}
            {ReactDOM.createPortal(<MovieModal_Overlay />,
                document.getElementById("overlay")
            )}
        </>
    )
}

export default MovieModal