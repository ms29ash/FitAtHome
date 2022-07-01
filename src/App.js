import React from 'react'

import './Styles/style.css';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import FoodPage from './Components/FoodPage';
import TrialPage from './Components/TrialPage';
import SubscribePage from './Components/SubscribePage';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ScrollToTop from './Components/ScrollToTop';
import FoodDetails from './Components/FoodDetails';

function App() {
  return (
    <>

      <ScrollToTop />



      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/food"  >
          <Route index element={<FoodPage />} />
          <Route path="foodDetail"  >
            <Route path=":id" element={<FoodDetails />} ></Route>
          </Route>
        </Route>
        <Route path="/trial" element={<TrialPage />} ></Route>
        <Route path="/subscribe" element={<SubscribePage />} ></Route>
        <Route path="/signin" element={<SignIn />} ></Route>
        <Route path="/signup" element={<SignUp />} ></Route>
        <Route path="/forgetPass" element={<SignUp />} ></Route>
      </Routes>


    </>
  );
}

export default App;
