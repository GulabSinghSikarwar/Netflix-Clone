import React, { useEffect, useRef, useState } from 'react'
import styled from './SignupScreen.module.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { onAuthStateChanged} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../../firebase_file';
import loading from '../../resources/images/loading.gif'
import { useNavigate } from 'react-router-dom';
function SignupScreen( { showStatus}) {

    const app = initializeApp(firebaseConfig)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const auth = getAuth()
    const navigate=useNavigate()
    const  [loadingSign,setLoadingSign]=useState(false);



    useEffect(() => {


         const status = onAuthStateChanged(auth , (user)=>{
            if(user){ console.log(user);}
            else{

            }
        })
        return status;
         

    }, [])
    const cancelSignIn=()=>{
        showStatus()
        // return navigate("/")
    }

    const register = (e) => {
        e.preventDefault();
        setLoadingSign(true)
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(auth, email, password).then((user) => {
            alert("User Registration Successful ")
            setLoadingSign(false)
            console.log(user);
        }).catch((e) => {
            alert(e.message)
            setLoadingSign(false)
            console.log(e);
        })


    }
    const signIn = (event) => {
        
        setLoadingSign(true)
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(auth, email, password).then((user) => {
            setLoadingSign(false)
            alert("User Login In Successful ")
            console.log(user);
            
        }).catch((e) => {
            setLoadingSign(false)
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
               <div className={styled.SignupScreen_action}>
                    <button onClick={signIn} className={styled.SignupScreen_action_signIn} type={"submit"}>Sign In</button>
                    <span onClick={cancelSignIn} className={styled.SignupScreen_action_cancel} >Cancel</span>
                    
               </div>
                <h4>
                    <span className={styled.signupScreen_grey}> New to Netflix ?</span>
                    <span onClick={register} className={styled.signupScreen_signup_link}> Sign Up Now  </span></h4>
            </form>
            <div className={styled.loadingGif}>
              {(loadingSign)?  <img src={loading} />:""}

            </div>

        </div>
    )
}

export default SignupScreen