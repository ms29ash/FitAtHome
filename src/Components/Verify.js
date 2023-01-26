import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { verifyUser } from '../features/auth/authSlice';
import Otp from './Otp';



export default function Verify() {
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const onSubmit = (e, data) => {

    e.preventDefault();
    const otp = data.join("");

    dispatch(verifyUser(otp)).unwrap().then((auth) => {
      if (auth.success === true) {

        navigate('/')
      }
    })
  }

  return (
    <Otp onSubmit={onSubmit} />
  )
}


