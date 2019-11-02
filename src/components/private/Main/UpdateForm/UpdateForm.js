import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
    },
}));

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:white;
`

export default function UpdateForm({ textToUpdate, handleInput, onEnterKeyPressedToUpdateTodo }) {


    const classes = useStyles();

    return <Container>

        <FormControl className={classes.formControl} variant="filled">
            <InputLabel htmlFor="component-filled">Text</InputLabel>
            <FilledInput onKeyPress={onEnterKeyPressedToUpdateTodo} onChange={handleInput} name={'textToUpdate'} id="component-filled" value={textToUpdate} />
        </FormControl>
    </Container>
}