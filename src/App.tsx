import React, {useEffect} from 'react';
import Landing from './BaseComponents/Landing/Landing';
import {
  useNavigate,
  Routes,
  Route
} from "react-router-dom";
import { useAuthIdToken } from '@react-query-firebase/auth';
import { auth } from './fbConfig/fbConfig.';

const App: React.FC = () => {
  let navigate = useNavigate();
  const tokenResult = useAuthIdToken(["token"], auth);

  useEffect(() => {
    // ensures userAuth or reroutes to landing
    if (tokenResult.data?.token.token === undefined) {
      navigate('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenResult.isLoading, navigate])

  return (
      <div className="App" style={{fontFamily: 'sans-serif'}}>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </div>
  );
}

export default App;
