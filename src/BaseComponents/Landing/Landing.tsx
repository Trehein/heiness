import React from 'react'
import { auth } from '../../fbConfig/fbConfig.'
import { useAuthIdToken } from "@react-query-firebase/auth";
import Home from '../Home/Home';
import AddExample from '../AddExample/AddExample';
import UnitList from '../Units/UnitList';
import Authentication from '../Authentication/Authentication';

const Landing: React.FC = () => {
    // grab user info if necessary
    // const userQuery = useAuthUser(['user'], auth)
    // const user = userQuery.data;

    const tokenResult = useAuthIdToken(["token"], auth);

    return (
        <>
            {tokenResult.data?.token.token && 
                <Home 
                    AddExample={AddExample}
                    UnitList={UnitList}
                />
            }
            {tokenResult.data?.token.token === undefined && 
                <Authentication />
            }
        </>
    )
}

export default Landing