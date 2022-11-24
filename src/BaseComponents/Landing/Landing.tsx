import React, {useState} from 'react'
import { auth } from '../../fbConfig/fbConfig.'
import { FormTypeEnum } from '../Forms/Enums/FormTypeEnum'
import FormSwitch from '../Forms/FormSwitch'
import { useAuthIdToken } from "@react-query-firebase/auth";
import Home from '../Home/Home';
import AddExample from '../AddExample/AddExample';
import UnitList from '../Units/UnitList';
import BoxArray from '../BoxArray/BoxArray';
import { MapToBoxButtonArray } from '../../ComponentArrays/MapToBoxButtonArray/MapToBoxButtonArray';

const Landing: React.FC = () => {
    // grab user info if necessary
    // const userQuery = useAuthUser(['user'], auth)
    // const user = userQuery.data;

    const tokenResult = useAuthIdToken(["token"], auth);
    const [selectedFormType, setSelectedFormType] = useState<undefined | FormTypeEnum>(undefined)
    
    const authButtonData: any[] = [
        {
            label: 'Sign In Button',
            onClick: () => {setSelectedFormType(FormTypeEnum.SignIn)},
            text: 'Sign In',
        },
        {
            label: 'Register Button',
            onClick: () => {setSelectedFormType(FormTypeEnum.Register)},
            text: 'Register',
        }
    ]

    return (
        <div>
            {tokenResult.data?.token.token && 
                <Home 
                    AddExample={AddExample}
                    UnitList={UnitList}
                />
            }
            {tokenResult.data?.token.token === undefined && 
                <>
                    {
                        selectedFormType === undefined ? 
                            <BoxArray 
                                ChildComponentArray={MapToBoxButtonArray({ dataArray: authButtonData, boxWidth: '75%', boxHeight: `${window.innerHeight / 2}` })} 
                            />
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