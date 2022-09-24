import React from 'react'
import { useNavigate } from "react-router-dom";
import Otp from './Otp';

export default function Verify() {

  const navigate = useNavigate();
  const onSubmit = (e, data) => {

    e.preventDefault();
    const otp = data.join("");
    console.log('submit', otp)
    navigate('/')
  }

  return (
    <Otp onSubmit={onSubmit} />
  )
}


