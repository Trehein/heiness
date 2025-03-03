import { Route, Routes } from 'react-router';
import { auth } from './fbConfig/fbConfig';
import Signup from './screens/Signup';
import Login from './screens/Login';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './screens/Home';
import { useEffect } from 'react';
import Auth from './screens/Auth';
import NavBar from './components/NavBar/NavBar';
import DrawerController from './Drawer/DrawerController';
import { MyAppNav } from './components/NavBar/MyAppNav';
import TestCrud from './screens/TestCrud';
import ContentCreator from './screens/ContentCreator';
import CreateCampaign from './screens/CreateCampaign';

function App() {
  // const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('user', uid)
        // update for alt routing with auth
        // ...
      } else {
        // User is signed out
        // ...
        console.log('no user')
        // navigate('/')
      }
    });
  }, [auth])
  


  return (
    <div style={{fontFamily: 'sans-serif', marginTop: 0}}>
      <NavBar />
      <DrawerController />
      <MyAppNav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth' element={<Auth />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/contentCreator' element={<ContentCreator />} />
        <Route path='/testCrud' element={<TestCrud/>}/>
        <Route path='/create/campaign' element={<CreateCampaign />}/>
      </Routes>
    </div>
  )
}

export default App
