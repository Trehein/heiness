export const breakpointCalc = () => {
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
        }
    }
}