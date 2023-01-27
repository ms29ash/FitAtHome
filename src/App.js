import React from 'react'

import './Styles/style.css';
import {
  Routes,
  Route,
  Outlet
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
import ForgetPass from './Components/ForgetPass';
import ForgetPassOtp from './Components/ForgetPassOtp';
import Verify from './Components/Verify';
import ForgetPassNewPass from './Components/ForgetPassNewPass';
import NewPass from './Components/NewPass';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import AuthRoute from './Components/Routes/AuthRoute';
import Profile from './Pages/Profile';



function App() {
  return (
    <>

      <ScrollToTop />




      <Routes>
        <Route path="/" element={<><Navbar /><Outlet /><Footer /></>} >
          <Route index element={<Home />} />
          <Route path="/food"  >
            <Route index element={<FoodPage />} />
            <Route path="foodDetail"  >
              <Route path=":id" element={<FoodDetails />} ></Route>
            </Route>
          </Route>
          <Route path="/trial" element={<TrialPage />} ></Route>
          <Route path="/subscribe" element={<SubscribePage />} ></Route>
        </Route>
        <Route path="/cart" element={<AuthRoute><Navbar /><Cart /></AuthRoute>} ></Route>



        <Route path="/signin" element={<SignIn />} ></Route>
        <Route path="/signup"  >
          <Route index element={<SignUp />} />
          <Route path="verify" element={<Verify />} />
        </Route>
        <Route path="/forgetpass"  >
          <Route index element={<ForgetPass />} />
          <Route path="otp" element={<ForgetPassOtp />} />
          <Route path="newpass" element={<ForgetPassNewPass />} />
          <Route path="updatedpass" element={<NewPass />} />
        </Route>
        <Route path="profile" >
          <Route index element={<><Navbar /><Profile /><Footer /></>} />

        </Route>
      </Routes>


    </>
  );
}

export default App;
