import BoxButton, { BoxButtonProps } from "../../BaseComponents/BoxButton/BoxButton"

export type MapToBoxButtonArrayParams = {
    dataArray: any[],
    boxHeight: string,
    boxWidth: string,
    fontSize: string
}

export const MapToBoxButtonArray = (params: MapToBoxButtonArrayParams) => {
    const { dataArray, boxWidth, boxHeight, fontSize } = params
    return dataArray.map((componentData: BoxButtonProps) => {
        const {label, text, onClick} = componentData
        return <BoxButton 
            label={label} 
            onClick={onClick} 
            text={text} 
            boxWidth={boxWidth} 
            boxHeight={boxHeight} 
            fontSize={fontSize}
        />
    })
}