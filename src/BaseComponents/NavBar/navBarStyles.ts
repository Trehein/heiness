export const navBarStyles = () => {
    return {
        navBarContainer: {
            position: 'fixed' as 'fixed',
            display: 'flex',
            alignItems: 'center',
            height: window.innerHeight * .05,
            width: '100%',
            zIndex: 10,
            borderBottom: '1px solid black',
            backgroundColor: 'white'
        }
    }
}