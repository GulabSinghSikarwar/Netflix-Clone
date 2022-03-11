import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/Screen/HomeScreen/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import LoginScreen from './components/Screen/LoginScreen/LoginScreen';

const user =null
function App() {
  return (
    <div className="app">
      {
        (!user)?<LoginScreen/>:
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
      </Routes>
      }
    {/* <HomeScreen/> */}
    
    </div>
  );
}

export default App;
