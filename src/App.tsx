import { auth } from './fbConfig/fbConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import DrawerController from './Drawer/DrawerController';
import { MyAppNav } from './components/NavBar/MyAppNav';
import AnimatedRoutes from './animations/AnimatedRoutes';

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
    <div style={{fontFamily: 'sans-serif', marginTop: 0, width: '100vw'}}>
      <NavBar />
      <DrawerController />
      <MyAppNav />
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth' element={<Auth />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/widgets" element={<WidgetScreen />}/>
        <Route path='/contentCreator' element={<ContentCreator />}/>
        <Route path='/testCrud' element={<TestCrud/>}/>
        <Route path='/create/campaign' element={<CreateCampaign />}/>
        <Route path='/reviews' element={<Reviews />}/>
      </Routes> */}
      <AnimatedRoutes />
    </div>
  )
}

export default App
