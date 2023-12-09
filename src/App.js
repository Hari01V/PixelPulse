import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import CommunityContainer from './Components/CommunityContainer';
import BrowsePage from './Components/BrowsePage';
import UserProfile from './Components/UserProfile';

function App() {
  const [currentNav, setCurrentNav] = useState("home");

  return (
    <div className="App h-screen w-screen p-8 bg-red-600 flex justify-between items-center gap-2">
      <Navbar currentNav={currentNav} setCurrentNav={setCurrentNav}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/communities' element={<CommunityContainer/>}/>
        <Route path='/browse' element={<BrowsePage/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
