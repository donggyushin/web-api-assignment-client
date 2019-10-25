import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Row = styled.div`
    display:flex;
`

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));




const PublicMainComponent = () => {

    const classes = useStyles();

    return <Container>
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                required
                id="standard-required"
                label="username"
                className={classes.textField}
                margin="normal"
            />
            <TextField
                required
                id="standard-password-input"
                label="password"
                type="password"
                className={classes.textField}
                margin="normal"
            />
        </form>
        <Row>
            <Button color="primary" className={classes.button}>
                Login
      </Button>
            <Button color="secondary" className={classes.button}>
                New Account
      </Button>
        </Row>
    </Container>
}

export default PublicMainComponent