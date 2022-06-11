import React, { useEffect, useContext } from 'react'

import './Styles/style.css';
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import FoodPage from './Components/FoodPage';
import TrialPage from './Components/TrialPage';
import SubscribePage from './Components/SubscribePage';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {
  return (
    <>



      <Navbar />
      {/* <LoadingBar color='#bf0404' progress={loadBarProgress}
          onLoaderFinished={() => setLoadBar(0)} /> */}
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/food" element={<FoodPage />} ></Route>
        <Route path="/trial" element={<TrialPage />} ></Route>
        <Route path="/subscribe" element={<SubscribePage />} ></Route>
        <Route path="/signin" element={<SignIn />} ></Route>
        <Route path="/signup" element={<SignUp setProgress />} ></Route>
      </Routes>

    </>
  );
}

export default App;
