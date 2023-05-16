import React from 'react'
import FormInput from '../form/FormInput'
import Title from '../form/Title'
import Container from '../../Container'
import Submit from '../form/Submit'
import CustomeLink from '../CustomeLink'
import FormContainer from '../form/FormContainer'
import Theme from '../../utils/Theme'

const ForgetPassword = () => {
  return (
     <FormContainer>
      <Container>
        <form className={Theme+' w-96 '} >
            <Title>Enter your email address</Title>
            <FormInput name="email" label="Email" placeholder="john@gmail.com" type="text"  />
          
            <Submit value="Send Link"/>
            <div className="flex justify-between">
            <CustomeLink to='/auth/signup' >Sign Up</CustomeLink>
              <CustomeLink to='/auth/signin' >Sign In</CustomeLink>
            </div>
        </form>
      </Container>
    </FormContainer>
  )
}

export default ForgetPassword
