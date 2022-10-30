import React, { useState } from 'react'
import {
    useNavigate
  } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../fbConfig/fbConfig.';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleClick = () => {
        const authentication = getAuth(app);
        createUserWithEmailAndPassword(authentication, email, password)
        .then((response: any) => {
          navigate('/home')
          console.log(response)
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
        <div>
            Register
            <input type="email" value={email} onChange={(e) => handleEmailChange(e)}/>
            <input type="password" value={password} onChange={(e) => handlePasswordChange(e)}/>
            <button onClick={handleClick}>Click to Register</button>
        </div>
    )
}

export default Register