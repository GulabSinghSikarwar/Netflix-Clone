import React from 'react'
import Nav from '../../Nav/Nav'
import styled from './ProfileScreen.module.css'
import userLogo from '../../resources/images/user.png'

// firebse imports 
import firebaseConfig from '../../../firebase_file'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// redux imports 
import { useSelector } from 'react-redux'
import Plan from './Plans/Plan'
import { useNavigate } from 'react-router-dom'
// react-router imports 



function ProfileScreen() {


    const app = initializeApp(firebaseConfig)
    const auth = getAuth();
    const navigate=useNavigate()
    const SignOut = () => {
        auth.signOut()

    }

    const user = useSelector((state) => state.userSlice.user);
    return (
        <div className={styled.profileScreen}>
            <Nav />
            <div className={styled.profileScreen_body}>
                <h1>Edit Profile </h1>
                <div className={styled.profileScreen_info}>
                    <img src={userLogo} />
                    <div className={styled.profileScreen_details}>
                        <h2> {user.email} </h2>
                        <div className={styled.profileScreen_plans}>
                            <h3>Plans</h3>
                            <span className={styled.profileScreen_plan_renewal_date} >Renewal date : 01/03/2021 </span>
                            <div className={styled.profileScreen_plans_details}>
                                <Plan plan={"Netflix Basic"} quality={"480p"} />
                                <Plan plan={"Netflix Pre"} quality={"720p"} />
                                <Plan plan={"Netflix Standard"} quality={"1080"} />
                                <Plan plan={"4K HDR"} quality={"4K"} />
                                <Plan plan={"4K HDR+"} quality={"4K+"} />

                            </div>

                            <button className={styled.profileScreen_plans_btn} onClick={SignOut}> SignOut </button>
                            <button className={styled.profileScreen_plans_btn} onClick={()=>navigate("/")}> Cancel </button>
                            

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProfileScreen