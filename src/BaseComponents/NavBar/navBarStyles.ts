export const navBarStyles = () => {
    return {
        navBarContainer: {
            position: 'sticky' as 'sticky',
            top: 0,
            height: '3em',
            width: '100%',
            zIndex: 10,
            borderBottom: '1px solid black',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center'
        },
        iconButtonContainer: {
            margin: '0px .5em'
        }
    }
}