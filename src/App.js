import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Component/Home/Home';
import { Navebar } from './Component/Navbar/Navbar';
import { Profile } from './Component/Profile/Profile';
import SignUp from './Component/User/SignUp/SignUp';
import SignIn from './Component/User/SignIn/Signin';
import ProtectedRoute from './Component/ProtectedRoute';
import { FreindProfile } from './Component/Profile/FreindProfile';
import Spam from './Component/Spam/spam';
import UpdateDetails from './Component/Update/update';
import About from './Component/About/about';

function App() {
  return <>
  
    <Routes>
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/userFreindProfile' element={<ProtectedRoute><FreindProfile/></ProtectedRoute>}/>
      <Route path='/spam' element={<ProtectedRoute><Spam/></ProtectedRoute>}/>
      <Route path='/update' element={<ProtectedRoute><UpdateDetails/></ProtectedRoute>}/>
      <Route path='/about' element={<ProtectedRoute><About/></ProtectedRoute>}/>
    </Routes>

  </>
}

export default App;
