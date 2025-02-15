import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { auth } from '../fbConfig/fbConfig';
import Signup from './Signup';
import Login from './Login';

const Auth: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
            console.log(error)
        // An error happened.
        });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
    
    }, [])

    console.log('auth', auth.currentUser)

    return (
        <div>
            <h1>
                Heiness
            </h1>
            <Signup />
            <Login />
            <div>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Auth