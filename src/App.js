import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/Screen/HomeScreen/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from './components/Screen/LoginScreen/LoginScreen';
import firebaseConfig from './firebase_file';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { } from 'react-redux';
import { login, logout } from './components/store/Slices/userSlice';

import { userSelector } from '../src/components/store/Slices/userSlice'
import ProfileScreen from './components/Screen/ProfileScreen/ProfileScreen';
function App() {
  const app = initializeApp(firebaseConfig);
  // const [user,setUser]=useState(null)

  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const status = onAuthStateChanged(auth, (userStatus) => {

      if (userStatus) {
        const uid = userStatus.uid;
        const email = userStatus.email;


        dispatch(login({
          email: email,
          uid: uid
        }))
      }
      else {
        dispatch(logout());

      }

    })
    return status
  }, [dispatch])

  const user = useSelector((state) => state.userSlice.user)
  return (
    <div className="app">
      {
        (!user) ? <LoginScreen /> :
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            
          </Routes>
      }
      {/* <HomeScreen/> */}

    </div>
  );
}

export default App;
