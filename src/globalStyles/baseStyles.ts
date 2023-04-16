export const baseStyles = () => {
    return {
        screenContainer: {
            position: 'absolute' as 'absolute',
            marginTop: window.innerHeight * .05,
            height: window.innerHeight * .925,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        contentContainer: {
            marginTop: window.innerHeight * .05,
            height: window.innerHeight * .925,
            width: '100%',
            position: 'absolute' as 'absolute',
        }
    }
}