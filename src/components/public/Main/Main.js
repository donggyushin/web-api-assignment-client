import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { END_POINT } from 'consts/endpoint';

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

class PublicMainComponentContainer extends React.Component {
    state = {
        username: "",
        password: ""
    }

    render() {
        const { handleInput, makeNewAccount, login } = this;
        const { username, password } = this.state;
        return <PublicMainComponent login={login} makeNewAccount={makeNewAccount} handleInput={handleInput} username={username} password={password} />
    }

    login = () => {
        const { username, password } = this.state;
        axios.post(END_POINT + 'user/login', {
            username,
            password
        })
            .then(res => res.data)
            .then(data => {
                const { ok, error, jwt } = data;
                if (ok) {
                    window.localStorage.setItem("jwt", jwt);
                    window.location.href = '/'
                } else {
                    alert(error)
                }
            }).catch(err => console.error(err))
    }

    makeNewAccount = () => {
        const { username, password } = this.state;
        axios.post(END_POINT + 'user/new', {
            username,
            password
        }).then(res => res.data)
            .then(data => {
                const { ok, error, jwt } = data;
                if (ok) {
                    localStorage.setItem("jwt", jwt)
                    window.location.href = '/'
                } else {
                    alert(error)
                }
            })
            .catch(err => console.error(err))
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}


const PublicMainComponent = ({ login, username, password, handleInput, makeNewAccount }) => {

    const classes = useStyles();

    return <Container>
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                required
                id="standard-required"
                label="username"
                className={classes.textField}
                margin="normal"
                name={'username'}
                value={username}
                onChange={handleInput}
            />
            <TextField
                required
                id="standard-password-input"
                label="password"
                type="password"
                className={classes.textField}
                margin="normal"
                name={'password'}
                value={password}
                onChange={handleInput}
            />
        </form>
        <Row>
            <Button onClick={login} color="primary" className={classes.button}>
                Login
      </Button>
            <Button onClick={makeNewAccount} color="secondary" className={classes.button}>
                New Account
      </Button>
        </Row>
    </Container>
}

export default PublicMainComponentContainer