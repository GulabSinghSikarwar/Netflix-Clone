import React from 'react'
import styled from './SignupScreen.module.css'
function SignupScreen() {

    const register=(e)=>{
        e.preventDefault();

    }
    const signIn=(event)=>{
        event.preventDefault();


    }

    return (
        <div className={styled.signupScreen}>
            <form>
                <h1>Sign In</h1>
                <input type={"email"} placeholder="email" />
                <input type={"password"} placeholder="password " />
                <button  onClick={signIn} type={"submit"}>Sign In</button>
                <h4>
                    <span className={styled.signupScreen_grey}> New to Netflix ?</span>
                    <span onClick={register} className={styled.signupScreen_signup_link}> Sign Up Now  </span></h4>
            </form>

        </div>
    )
}

export default SignupScreen