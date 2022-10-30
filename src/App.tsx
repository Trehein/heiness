import React, {useEffect} from 'react';
import Home from './Components/Home/Home';
import Landing from './Components/Landing/Landing';
import {
  useNavigate,
  Routes,
  Route
} from "react-router-dom";

const App: React.FC = () => {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
  }, [navigate])
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
