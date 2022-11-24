export type boxButtonStylesParams = {
    height: string
    width: string
}

export const boxButtonStyles = (params: boxButtonStylesParams) => {
    const { height, width } = params
    return {
        contentContainer: {
            height: height,
            width: width,
        }
    }
}