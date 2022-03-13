import React, { useEffect, useRef } from 'react'
import styled from './SignupScreen.module.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { onAuthStateChanged} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../../firebase_file';
// import { auth } from '../../../firebase_file';
function SignupScreen() {

    const app = initializeApp(firebaseConfig)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const auth = getAuth()

    useEffect(() => {

         const status = onAuthStateChanged(auth , (user)=>{
            if(user){ console.log(user);}
        })
        return status;
         

    }, [])

    const register = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(auth, email, password).then((user) => {
            alert("User Registration Successful ")
            console.log(user);
        }).catch((e) => {
            console.log(e);
        })


    }
    const signIn = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(auth, email, password).then((user) => {
            alert("User Login In Successful ")
            console.log(user);
        }).catch((e) => {
            alert(e.message)
            console.log(e);
        })



    }

    return (
        <div className={styled.signupScreen}>
            <form>
                <h1>Sign In</h1>
                <input type={"email"} ref={emailRef} placeholder="email" required />
                <input type={"password"} ref={passwordRef} placeholder="password " required />
                <button onClick={signIn} type={"submit"}>Sign In</button>
                <h4>
                    <span className={styled.signupScreen_grey}> New to Netflix ?</span>
                    <span onClick={register} className={styled.signupScreen_signup_link}> Sign Up Now  </span></h4>
            </form>

        </div>
    )
}

export default SignupScreen