import React, {useState} from 'react'
import { auth } from '../../fbConfig/fbConfig.'
import { FormTypeEnum } from '../Forms/Enums/FormTypeEnum'
import FormSwitch from '../Forms/FormSwitch'
import { useAuthIdToken } from "@react-query-firebase/auth";
import Home from '../Home/Home';
import AddExample from '../AddExample/AddExample';

const Landing: React.FC = () => {
    // const userQuery = useAuthUser(['user'], auth)
    // const user = userQuery.data;

    const tokenResult = useAuthIdToken(["token"], auth);
    const [selectedFormType, setSelectedFormType] = useState<undefined | FormTypeEnum>(undefined)
    
    return (
        <div>
            {tokenResult.data?.token.token && <Home AddExample={AddExample}/>}
            {tokenResult.data?.token.token === undefined && 
                <>
                    {
                        selectedFormType === undefined ? 
                            <>
                                <button onClick={() => {setSelectedFormType(FormTypeEnum.SignIn)}}>Sign In</button>
                                <button onClick={() => {setSelectedFormType(FormTypeEnum.Register)}}>Register</button>
                            </>
                        :
                            <>
                                <FormSwitch formType={selectedFormType} />
                            </>
                    }
                </>
            }
        </div>
    )
}

export default Landing