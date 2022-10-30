import React, { useState } from 'react'
import {
    useNavigate
  } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../fbConfig/fbConfig.';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const handleClick = () => {
        const authentication = getAuth(app);
        signInWithEmailAndPassword(authentication, email, password)
          .then((response) => {
            navigate('/home')
            console.log(response)
            // sessionStorage.setItem('Auth Token', response.user.getIdToken())
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
        <div>
            Sign In
            <input type="email" value={email} onChange={(e) => handleEmailChange(e)}/>
            <input type="password" value={password} onChange={(e) => handlePasswordChange(e)}/>
            <button onClick={handleClick}>Click to Sign In</button>
        </div>
    )
}

export default SignIn