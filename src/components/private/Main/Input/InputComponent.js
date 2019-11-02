import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));


export default function InputComponent({ newtodo, handleInput, newTodo }) {
    const classes = useStyles();
    return (
        <form style={{
            width: '80%'
        }} className={classes.container} noValidate autoComplete="off">

            <TextField
                id="outlined-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Input Todo!"
                fullWidth
                value={newtodo}
                name={'newtodo'}
                margin="normal"
                variant="outlined"
                onChange={handleInput}
                onKeyPress={newTodo}
                InputLabelProps={{
                    shrink: true,
                }}
            />

        </form>
    )
}