import React, { useEffect, useRef, useState } from 'react'
import Container from '../../Container'
import Title from '../form/Title'
import Submit from '../form/Submit'
import FormContainer from '../form/FormContainer';
import Theme from '../../utils/Theme';

const OTP_LENGTH = 6;
let currentOtpIndex;
const EmailVerification = () => {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(''))
  const [activeOtpIndex, setActiveOtpIndex ] = useState(0)
  const input = useRef()

  const focusNextInputField = (index)=>{
    setActiveOtpIndex(index+1)
  }
  const focusPrevInputField = (index)=>{
    let diff = index-1
    let nxtI = diff!==0 ? diff : 0
    setActiveOtpIndex(nxtI)
  }
  const handleChange = ({target},index)=>{
    const {value} = target;
    const newOtp = [...otp]
    // console.log(value,!value)
    newOtp[currentOtpIndex] = value.substring(value.length-1,value.length)
    if(!value) focusPrevInputField(currentOtpIndex)
    else  focusNextInputField(currentOtpIndex)
    setOtp([...newOtp])
  }

  const handleKeyDown = ({key},index) =>{
    console.log("keypress",key)
    currentOtpIndex = index
    if(key==='Backspace') focusPrevInputField(currentOtpIndex)
    }

  useEffect(()=>{
    input.current?.focus()
  },[activeOtpIndex])
  return (
    <FormContainer>
    <Container>
      <form className={Theme} >
         <div>
          <Title>Please enter the OTP to verify your account</Title>
          <p className='text-center dark:text-dark-subtle text-light-subtle '>OTP has been sent to your email</p>
         </div>
         <div className='flex justify-center space-x-4'>
         {
          otp.map((_,index)=>{
            return (
              <input 
              ref = {activeOtpIndex === index? input:null}
               type='number'
               key={index}
               value={otp[index]}
               onChange={handleChange}
               onKeyDown={(e)=> handleKeyDown(e,index)}
               className='w-12 h-12 bg-transparent dark:border-dark-subtle border-light-subtle border-2 rounded dark:focus:border-white focus:border-primary dark:text-white text-primary text-lg p-1 text-center outline-none  font-semibold' />
            )
          })
         }
         </div>
        
    
        
          <Submit value="Send Link"/>
      </form>
    </Container>
  </FormContainer>
  )
}

export default EmailVerification
