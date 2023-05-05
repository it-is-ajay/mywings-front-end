import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Component/Home/Home';
import { Navebar } from './Component/Navbar/Navbar';
import { Profile } from './Component/Profile/Profile';
import SignUp from './Component/User/SignUp/SignUp';
import SignIn from './Component/User/SignIn/Signin';
import ProtectedRoute from './Component/ProtectedRoute';
import { FreindProfile } from './Component/Profile/FreindProfile';

function App() {
  return <>
  
    <Routes>
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/userFreindProfile' element={<ProtectedRoute><FreindProfile/></ProtectedRoute>}/>
    </Routes>

  </>
}

export default App;
