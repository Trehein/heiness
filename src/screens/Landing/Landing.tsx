import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../../fbConfig/fbConfig';
import { useNavigate } from 'react-router';
import Signup from '../Signup';
import Login from '../Login';

// import { auth } from '../../fbConfig/fbConfig'
// import { useAuthIdToken } from "@react-query-firebase/auth";
// import Authentication from '../Authentication/Authentication';
// import RoleSelection from '../RoleSelection/RoleSelection';


// landing with Auth
// const Landing: React.FC = () => {
//     // grab user info if necessary
//     // const userQuery = useAuthUser(['user'], auth)
//     // const user = userQuery.data;
//     const tokenResult = useAuthIdToken(["token"], auth);

//     return (
//         <>
//             {tokenResult.data?.token.token && 
//                 <RoleSelection />
//             }
//             {tokenResult.data?.token.token === undefined && 
//                 <Authentication />
//             }
//         </>
//     )
// }



const Landing: React.FC = () => {
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

export default Landing