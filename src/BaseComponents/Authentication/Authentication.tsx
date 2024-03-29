import React, { useState } from 'react'
import { MapToBoxButtonArray } from '../../ComponentArrays/MapToBoxButtonArray/MapToBoxButtonArray'
import BoxArray from '../BoxArray/BoxArray'
import { FormTypeEnum } from '../Forms/Enums/FormTypeEnum'
import FormSwitch from '../Forms/FormSwitch'
import { baseStyles } from '../../globalStyles/baseStyles'

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

    const baseClasses = baseStyles()

    return (
        <div style={baseClasses.screenContainer}>
            {
                selectedFormType === undefined ? 
                    <BoxArray 
                        ChildComponentArray={MapToBoxButtonArray({ 
                            dataArray: authButtonData, 
                            boxWidth: '75%', 
                            boxHeight: `${window.innerHeight / 4}`,
                            fontSize: '1.5em' 
                        })} 
                        boxContainerWidth='33%'
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