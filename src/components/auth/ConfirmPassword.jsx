import React from 'react'
import Container from '../../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'

const ConfirmPassword = () => {
  return (
    <div className='fixed bg-primary inset-0 -z-20 flex justify-center items-center'>
    <Container>
      <form className='bg-secondary rounded p-6  space-y-6' >
          <Title>Enter new Password</Title>
          <FormInput label="New Password"  placeholder='******' name='newPassword' type='password' />
          <FormInput label="Confirm Password"  placeholder='******' name='confirmPassword' type='password' />
          <Submit value="Reset"/>
      </form>
    </Container>
  </div>
  )
}

export default ConfirmPassword
