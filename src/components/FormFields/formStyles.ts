export const formStyles = () => {
    return {
        formContainer: {
            display: 'flex',
            flexDirection: 'column' as 'column',
            width: '80%',
            margin: '.5em auto'
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
        },
        formSectionContainer: {
            display: 'flex',
            width: '33%',
            flexWrap: 'wrap' as 'wrap'
        },
        formGroupContainer: {
            display: 'flex',
            flexDirection: 'column' as 'column',
            width: '30%'
        },
        formTextField: {
            display: 'flex',
            width: '95%',
            flexDirection: 'column' as 'column',
            margin: '.5em auto',
            fontSize: '.8em'
        },
        formNumberField: {
            display: 'flex',
            width: '95%',
            flexDirection: 'row' as 'row',
            margin: '.25em auto',
            fontSize: '.8em',
            alignItems: 'center'
        },
        formNumberFieldLabel: {
            marginRight: '.5em',
            width: '25%'
        },
        formBarNumberField: {
            display: 'flex',
            alignItems: 'center',
            width: '100%'
        },
        formOptionSelectField: {
            display: 'flex',
            alignItems: 'center',
            width: '100%'
        },        
        formBarNumberFieldContainer: {
            display: 'flex',
            width: '95%',
            flexDirection: 'column' as 'column',
            margin: '.25em auto',
            fontSize: '.8em',
            alignItems: 'flex-start',
            justifyContent: 'start'
        },
        formBarGroupLabel: {
            display: 'flex',
            width: '95%',
            margin: '.25em auto',
            alignItems: 'flex-start',
            justifyContent: 'start'
        }
    }
}