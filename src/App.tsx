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
import ItemHome from './BaseComponents/Items/ItemHome';
import CreateItemController from './BaseComponents/Forms/ItemForms/CreateItemController';
import LocationHome from './BaseComponents/Locations/LocationHome';
import CreateLocationController from './BaseComponents/Forms/LocationForms/CreateLocationController';
import MotiveHome from './BaseComponents/Motives/MotiveHome';
import CreateMotiveController from './BaseComponents/Forms/MotiveForms/CreateMotiveController';
import PersonalityTraitHome from './BaseComponents/PersonalityTraits/PersonalityTraitHome';
import CreatePersonalityTraitController from './BaseComponents/Forms/PersonalityTraitForms/CreatePersonalityTraitController';
import PhysicalTraitHome from './BaseComponents/PhysicalTraits/PhysicalTraitHome';
import CreatePhysicalTraitController from './BaseComponents/Forms/PhysicalTraitForms/CreatePhysicalTraitController';
import PurposeHome from './BaseComponents/Purposes/PurposeHome';
import CreatePurposeController from './BaseComponents/Forms/PurposeForms/CreatePurposeController';
import CreateStrengthOrWeaknessController from './BaseComponents/Forms/StrengthOrWeaknessForms/CreateStrengthOrWeaknessController';
import StrengthOrWeaknessHome from './BaseComponents/StrengthsOrWeaknesses/StrengthOrWeaknessHome';
import Drawer from './BaseComponents/Drawer/Drawer';

const App: React.FC = () => {
  const navigate = useNavigate();
  const tokenResult = useAuthIdToken(["token"], auth);

  useEffect(() => {
    // ensures userAuth or reroutes to landing
    // uncomment below line for prod
    // if (tokenResult.data?.token.token === undefined) {
    //   navigate('/')
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenResult.isLoading])

  return (
    <div style={{fontFamily: 'sans-serif', marginTop: 0}}>
      <NavBar />
      <Drawer children={undefined} />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/player-home' element={<div>Player Home</div>} />
        <Route path='/dm-home' element={<DmHome />} />
        <Route path='/dm-campaigns' element={<div>DM Campaigns</div>} />
        <Route path='/characters' element={<div>Characters</div>} />
        <Route path='/events' element={<div>Events</div>} />
        <Route path='/factions' element={<FactionHome />} />
        <Route path='/factions/create' element={<CreateFactionController />} />
        <Route path='/items' element={<ItemHome />} />
        <Route path='/items/create' element={<CreateItemController />} />
        <Route path='/locations' element={<LocationHome />} />
        <Route path='/locations/create' element={<CreateLocationController />} />
        <Route path='/motives' element={<MotiveHome />} />
        <Route path='/motives/create' element={<CreateMotiveController />} />
        <Route path='/personality-traits' element={<PersonalityTraitHome />} />
        <Route path='/personality-traits/create' element={<CreatePersonalityTraitController />} />
        <Route path='/physical-traits' element={<PhysicalTraitHome />} />
        <Route path='/physical-traits/create' element={<CreatePhysicalTraitController />} />
        <Route path='/player-campaigns' element={<div>Player Campaigns</div>} />
        <Route path='/purposes' element={<PurposeHome />} />
        <Route path='/purposes/create' element={<CreatePurposeController />} />
        <Route path='/skills' element={<SkillHome />} />
        <Route path='/skills/create' element={<CreateSkillController />} />
        <Route path='/skills/:id' element={<SkillDetails />} />
        <Route path='/strengths-or-weaknesses' element={<StrengthOrWeaknessHome />} />
        <Route path='/strengths-or-weaknesses/create' element={<CreateStrengthOrWeaknessController />} />
        <Route path='/stories' element={<div>Stories</div>} />
        <Route path='/units' element={<UnitHome />} />
      </Routes>
    </div>
  );
}

export default App;
