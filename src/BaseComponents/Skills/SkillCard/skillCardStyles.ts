export const breakpointCalc = () => {
    if(window.innerWidth > 1000) {
        return `${1/4 * 100}%`
    }
    if(window.innerWidth > 420) {
        return `${1/6 * 100}%`
    } else {
        return '100%'
    }
}

export const skillCardStyles = () => {
    return {
        cardContainer: {
            width: `${breakpointCalc()}`,
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