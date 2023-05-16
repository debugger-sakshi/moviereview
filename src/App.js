import React from 'react'
import Navbar from './components/user/Navbar'
import Home from './components/user/Home'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

import { Route, Routes } from 'react-router-dom'
import ForgetPassword from './components/auth/ForgetPassword'
import EmailVerification from './components/auth/EmailVerification'
import ConfirmPassword from './components/auth/ConfirmPassword'
// import {Route, Routes} from 'react-router'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/signin' element={<SignIn />} />
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/auth/forget-password' element={<ForgetPassword />} />
        <Route path='/auth/confirm-password' element={<ConfirmPassword />} />
        <Route path='/auth/verification' element={<EmailVerification />} />
      </Routes>
    </>
  )
}

export default App
