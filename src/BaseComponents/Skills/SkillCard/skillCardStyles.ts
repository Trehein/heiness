import { widthBreakpointCalc } from "../../../globalStyles/breakpoints"

export const skillCardStyles = () => {
    return {
        cardContainer: {
            width: `${widthBreakpointCalc({breakpoints: [
                {screenSizeBreakpoint: 420, numberOfColumns: 1},
                {screenSizeBreakpoint: 700, numberOfColumns: 4},
                {screenSizeBreakpoint: 1500, numberOfColumns: 8},
            ]})}`,
        },
        card: {
            width: '95%',
            margin: '.5em auto',
            border: '1px solid orange',
            display: 'flex',
            flexDirection: 'column' as 'column'
        },
        cardSectionContainer: {
            width: '95%',
            border: '1px solid green',
            margin: '.25em auto',
            display: 'flex',
        
        }
    }
}

export const AreaRangeSection = () => {
    return {

    }
}

export const DamageSection = () => {
    return {

    }
}
export const DescSection = () => {
    return {

    }
}
export const HeaderSection = () => {
    return {

    }
}
export const RequirementSection = () => {
    return {

    }
}
export const StatusSection = () => {
    return {

    }
}
export const TargetSection = () => {
    return {

    }
}
export const UseDifficultyCoolDownSection = () => {
    return {

    }
}

function breakpointCalc(arg0: { breakpoints: never[] }) {
    throw new Error("Function not implemented.")
}
