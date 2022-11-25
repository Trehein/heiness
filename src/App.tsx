import React, {useEffect} from 'react';
import Landing from './BaseComponents/Landing/Landing';
import {
  useNavigate,
  Routes,
  Route
} from "react-router-dom";
import { useAuthIdToken } from '@react-query-firebase/auth';
import { auth } from './fbConfig/fbConfig.';
import DmHome from './BaseComponents/Home/DmHome';

const App: React.FC = () => {
  const navigate = useNavigate();
  const tokenResult = useAuthIdToken(["token"], auth);

  useEffect(() => {
    // ensures userAuth or reroutes to landing
    if (tokenResult.data?.token.token === undefined) {
      navigate('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenResult.isLoading])

  return (
      <div className="App" style={{fontFamily: 'sans-serif'}}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/player-home' element={<div>Player Home</div>} />
          <Route path='/dm-home' element={<DmHome />} />
          <Route path='/abilities' element={<div>Abilities</div>} />
          <Route path='/campaigns' element={<div>Campaigns</div>} />
          <Route path='/characters' element={<div>Characters</div>} />
          <Route path='/events' element={<div>Events</div>} />
          <Route path='/items' element={<div>Items</div>} />
          <Route path='/stories' element={<div>Stories</div>} />
          <Route path='/units' element={<div>Units</div>} />
        </Routes>
      </div>
  );
}

export default App;
