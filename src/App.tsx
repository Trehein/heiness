import { Route, Routes, useNavigate } from 'react-router';
import { auth } from './fbConfig/fbConfig';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Landing from './screens/Landing/Landing';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './screens/Home';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('user', uid)
        navigate('/home')
        // ...
      } else {
        // User is signed out
        // ...
        console.log('no user')
        navigate('/')
      }
    });
  }, [auth])
  


  return (
    <div style={{fontFamily: 'sans-serif', marginTop: 0}}>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
