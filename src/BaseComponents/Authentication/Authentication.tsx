import React, { useState } from 'react'
import { MapToBoxButtonArray } from '../../ComponentArrays/MapToBoxButtonArray/MapToBoxButtonArray'
import { generalStyles } from '../../generalStyles'
import BoxArray from '../BoxArray/BoxArray'
import { FormTypeEnum } from '../Forms/Enums/FormTypeEnum'
import FormSwitch from '../Forms/FormSwitch'

const Authentication: React.FC = () => {
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

    const generalClasses = generalStyles()

    return (
        <div style={generalClasses.screenContainer}>
            {
                selectedFormType === undefined ? 
                    <BoxArray 
                        ChildComponentArray={MapToBoxButtonArray({ 
                            dataArray: authButtonData, 
                            boxWidth: '75%', 
                            boxHeight: `${window.innerHeight / 4}`,
                            fontSize: '1.5em' 
                        })} 
                    />
                :
                    <>
                        <FormSwitch formType={selectedFormType} />
                    </>
            }
        </div>
    )
}

export default Authentication