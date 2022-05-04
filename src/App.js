import React, { useEffect, useContext } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import FoodPage from './Components/FoodPage';
import FreeTrial from './Components/FreeTrial';
import SubscribePage from './Components/SubscribePage';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {







  return (




    <>
      <BrowserRouter>


        <Navbar />
        {/* <LoadingBar color='#bf0404' progress={loadBarProgress}
          onLoaderFinished={() => setLoadBar(0)} /> */}
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/food" element={<FoodPage />} ></Route>
          <Route path="/trial" element={<FreeTrial />} ></Route>
          <Route path="/subscribe" element={<SubscribePage />} ></Route>
          <Route path="/signin" element={<SignIn />} ></Route>
          <Route path="/signup" element={<SignUp setProgress />} ></Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
