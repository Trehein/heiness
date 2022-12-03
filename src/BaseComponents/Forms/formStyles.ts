export const formStyles = () => {
    return {
        formContainer: {
            display: 'flex',
            flexDirection: 'column' as 'column'
        },
        formTextInput: {
            margin: '.5em'
        },
        formSubmitButton: {
            margin: '.5em auto',
            padding: '.25em',
            background: 'white',
            borderRadius: '.5em',
            cursor: 'pointer',
            width: 'fit-content'
        },
        pageNumberButtonContainer: {
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
            margin: '.5em 0em',

        }
    }
}