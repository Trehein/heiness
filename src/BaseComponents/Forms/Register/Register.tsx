import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../fbConfig/fbConfig';
import { formStyles } from '../formStyles';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const formClasses = formStyles()

    const handleClick = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((response: any) => {
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            console.error('Email Already in Use');
          }
        })
    }

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)
    }

    return (
        <div style={formClasses.formContainer}>
            <label>Email</label>
            <input
              style={formClasses.formTextInput}
              type="email" 
              value={email} 
              onChange={(e) => handleEmailChange(e)}
            />
            <label>Password</label>
            <input 
              style={formClasses.formTextInput}
              type="password" 
              value={password} 
              onChange={(e) => handlePasswordChange(e)}
            />
            <button 
              style={formClasses.formSubmitButton}
              onClick={handleClick}
            >
              Create Account
            </button>
        </div>
    )
}

export default Register