import styled from './LoadingScreen.module.css'
import gif from '../../resources/images/loading.gif'
import React from 'react'

function LoadingHomescreen() {
    return (
        <div className={styled.LoadingHomescreen}>
            <div className={styled.LoadingHomescreen_gif}>
                <img src={gif}/>
            </div>
        </div>
    )
}

export default LoadingHomescreen