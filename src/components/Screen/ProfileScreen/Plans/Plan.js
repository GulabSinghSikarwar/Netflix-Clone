import styled from './Plan.module.css'
import React from 'react'

function Plan( {plan,quality}) {
  return (
    <div className={styled.Plan}>
        <div className={styled.Plan_details}>
           
                <h3>{plan}</h3>
                <h4>{quality}</h4>


        </div>
        <div className={styled.Plan_suscribe}>
        <button className={styled.Plan_suscribe_btn}>
            Subscribe
        </button>

        </div>

    </div>
  )
}

export default Plan