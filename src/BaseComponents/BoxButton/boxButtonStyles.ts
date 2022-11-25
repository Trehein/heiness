export type boxButtonStylesParams = {
    height: string
    width: string
    fontSize: string
}

export const boxButtonStyles = (params: boxButtonStylesParams) => {
    const { height, width, fontSize } = params
    return {
        contentContainer: {
            height: `${height}px`,
            width: width,
            borderRadius: '.5em',
            backgroundColor: 'white',
            fontSize: fontSize,
            border: 'solid black 2px',
            cursor: 'pointer',
            margin: '.5em 0'
        }
    }
}