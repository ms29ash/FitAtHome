import React from 'react'

import './Styles/style.css';
import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import './App.css';
import './Styles/tailwind.css';
import Home from '../src/Pages/Home';
import Navbar from './Components/Navbar';
import FindFood from './Pages/FindFood';
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
import Cart from './Components/Cart/Cart';
import AuthRoute from './Components/Routes/AuthRoute';
import Menu from './Pages/Menu';

import { Toaster } from 'react-hot-toast';
import Notification from './Pages/Notification';



function App() {
  return (
    <>

      <ScrollToTop />




      <Routes>
        <Route path="/" element={<><Navbar /><Outlet /><Footer /></>} >
          <Route index element={<Home />} />
          <Route path="/trial" element={<TrialPage />} ></Route>
          <Route path="/fire" element={<SubscribePage />} ></Route>
          <Route path="/notification" element={<Notification />} ></Route>
        </Route>
        <Route path="menu/:tab" element={<AuthRoute><Navbar /><Menu /></AuthRoute>} />
        <Route path="/box" element={<AuthRoute><Navbar /><Cart /></AuthRoute>} ></Route>
        <Route path="/food" element={<><Navbar /><Outlet /></>} >
          <Route index element={<FindFood />} />
          <Route path=":id" element={<FoodDetails />} ></Route>
        </Route>


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
      </Routes>


      <Toaster position="top-right" gutter={8} reverseOrder={true} toastOptions={{ duration: 1800, }} containerStyle={{ marginTop: "10vh" }} />

    </>
  );
}

export default App;
