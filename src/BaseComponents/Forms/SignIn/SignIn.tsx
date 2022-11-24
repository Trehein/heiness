import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../fbConfig/fbConfig.';
import { formStyles } from '../formStyles';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const formClasses = formStyles()

    const handleClick = () => {
        signInWithEmailAndPassword(auth, email, password)
          .then((response) => {
            console.log('logged in')
          })
          .catch((error) => {
            console.log(error.code)
            if (error.code === 'auth/wrong-password') {
              console.error('Please check the Password');
            }
            if (error.code === 'auth/user-not-found') {
                console.error('Please check the Email');
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
            Sign In
          </button>
        </div>
    )
}

export default SignIn