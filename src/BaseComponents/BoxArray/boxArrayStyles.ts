export type BoxArrayStylesParams = {
    width: string
}

export const boxArrayStyles = (params: BoxArrayStylesParams) => {
    const {width} = params
    return {
        boxArrayContainer: {
            width: '100%',
            flexDirection: 'row' as 'row',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap' as 'wrap'
        },
        boxContainer: {
            width,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
        }
    }
}