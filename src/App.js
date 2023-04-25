import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Component/Home/Home';
import { Navebar } from './Component/Navbar/Navbar';
import { Profile } from './Component/Profile/Profile';

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
   
  </>
}

export default App;
