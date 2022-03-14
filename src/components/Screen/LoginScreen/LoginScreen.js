import React, { useState } from 'react'
import styled from './LoginScreen.module.css'
import NetflixLogo from '../../resources/images/logo.png'
import SignupScreen from '../SignUpScreen/SignupScreen'
function LoginScreen() {

    const [signIn,setSignIn]=useState(false)
    const showStatus=()=>{
        setSignIn(false)
    }
    return (
        <div className={styled.loginscreen}>
            <div className={styled.loginscreen_background}>
                <img className={styled.loginscreen_logo} src={NetflixLogo} />
                <button  onClick={()=>setSignIn(true)} className={styled.loginscreen_btn}>Sign In</button>

                <div className={styled.loginscreen_gradient} />


            </div>

            <div className={styled.loginscreen_body}>
               {
                   (!signIn)?(
                    <>
                    <h1>
                        Ultimate    Films ,TV programs and
                        More
                    </h1>
                    <h2>
                        watch anywhere ,cancel anytime
                    </h2>
                    <h3>
                        Ready to Wactch ? Enter your email to create
                        or restart your membership
                    </h3>

                    <form>
                        <input className={styled.loginscreen_input} type={"email"} placeholder="enter email" />
                        <button onClick={()=>setSignIn(true)} className={styled.loginscreen_get_started}>Get Started</button>
                    </form>

                </>
                   ):
                  ( <SignupScreen showStatus={showStatus} /> )
                  
               }

            </div>


        </div>
    )
}

export default LoginScreen