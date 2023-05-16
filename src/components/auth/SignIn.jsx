import React from 'react'
import Container from '../../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import CustomeLink from '../CustomeLink'
// import { useTheme } from '../../hooks'
import FormContainer  from '../form/FormContainer'
import Theme from '../../utils/Theme'

const SignIn = () => {
  // const themeContext = useContext(ThemeContext)
  // const themeContext = useTheme()
  // console.log(Theme+' w-96 ')
  return (
    <FormContainer >
      <Container>
        <form className={Theme+' w-96 '} >
            <Title>Sign In</Title>
            <FormInput name="email" label="Email" placeholder="john@gmail.com" type="text"  />
            <FormInput name="password" label="Password" placeholder="*****" type="password"  />
            <Submit value="Sign in"/>
            <div className="flex justify-between">
                <CustomeLink to='/auth/forget-password' >Forget Password</CustomeLink>
                <CustomeLink to='/auth/signup' >Create Account</CustomeLink>

            </div>
        </form>
      </Container>
    </FormContainer>
  )
}

export default SignIn
