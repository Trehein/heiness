import React, {useEffect} from 'react';
import Landing from './BaseComponents/Landing/Landing';
import {
  useNavigate,
  Routes,
  Route
} from "react-router-dom";
import { useAuthIdToken } from '@react-query-firebase/auth';
import DmHome from './BaseComponents/Home/DmHome';
import NavBar from './BaseComponents/NavBar/NavBar';
import UnitHome from './BaseComponents/Units/UnitHome';
import SkillHome from './BaseComponents/Skills/SkillHome';
import CreateSkillController from './BaseComponents/Forms/SkillForms/CreateSkill/CreateSkillController';
import SkillDetails from './BaseComponents/Skills/SkillDetails';
import { auth } from './fbConfig/fbConfig';
import FactionHome from './BaseComponents/Factions/FactionHome';
import CreateFactionController from './BaseComponents/Forms/FactionForms/CreateFactionController';

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
    <div style={{fontFamily: 'sans-serif', marginTop: 0}}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/player-home' element={<div>Player Home</div>} />
        <Route path='/dm-home' element={<DmHome />} />
        <Route path='/dm-campaigns' element={<div>DM Campaigns</div>} />
        <Route path='/characters' element={<div>Characters</div>} />
        <Route path='/events' element={<div>Events</div>} />
        <Route path='/factions' element={<FactionHome />} />
        <Route path='/factions/create' element={<CreateFactionController />} />
        <Route path='/items' element={<div>Items</div>} />
        <Route path='/player-campaigns' element={<div>Player Campaigns</div>} />
        <Route path='/skills' element={<SkillHome />} />
        <Route path='/skills/create' element={<CreateSkillController />} />
        <Route path='/skills/:id' element={<SkillDetails />} />
        <Route path='/stories' element={<div>Stories</div>} />
        <Route path='/units' element={<UnitHome />} />
      </Routes>
    </div>
  );
}

export default App;
