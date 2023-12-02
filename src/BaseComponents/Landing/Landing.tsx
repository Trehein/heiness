import React from 'react'

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
    return (
        <div>
            <h1>
                Heiness
            </h1>
        </div>
    )
}

export default Landing