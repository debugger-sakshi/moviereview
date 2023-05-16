import React, { useState } from 'react'
import Container from '../../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import CustomeLink from '../CustomeLink'
import FormContainer from '../form/FormContainer'
import Theme from '../../utils/Theme'


const validateUserInfo = ({name,email,password}) =>{
  if(!name.trime()) {
    return {ok:false, error:'Name is missing'}
  }
  if(/^[a-zA-z]+$/.test(name)) 
    return {ok:false, error:'Invalid name'}
  if(!email.trime()) {
    return {ok:false, error:'Email is missing'}
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    return {ok:false, error:'Invalid email'}
  if(!password.trime()) {
      return {ok:false, error:'Password is missing'}
  }
  if(password.length >=8) {
    return {ok:false, error:'Password should ber atleast 8 character'}
}
}

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name:'',
    email:'',
    password:''
  })
  const { name, email, password} = userInfo;
  const handleChange = ({target})=>{
    const {value, name} = target
    // console.log(name,value)
    setUserInfo({...userInfo,[name]:value})
  
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const {ok, error}= validateUserInfo(userInfo)
    if(!ok) return console.log(error)
  }
  return (
    <FormContainer>
      <Container>
        <form onSubmit={handleSubmit} className={Theme+' w-96'} >
            <Title>Sign Up</Title>
            <FormInput name="name" value={name} label="Name" placeholder="John Doe" type="text" onChange={handleChange} />
            <FormInput name="email" value={email} label="Email" placeholder="john@gmail.com" type="text" onChange={handleChange} />
            <FormInput name="password" value={password} label="Password" placeholder="*****" type="password" onChange={handleChange} />
            <Submit value="Sign Up"/>
            <div className="flex justify-between">
            <CustomeLink to='/auth/forget-password' >Forget Password</CustomeLink>
              <CustomeLink to='/auth/signin' >Sign In</CustomeLink>
            </div>
        </form>
      </Container>
    </FormContainer>
  )
}

export default SignUp
