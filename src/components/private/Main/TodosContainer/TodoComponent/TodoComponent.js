import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Container = styled.div`
    position:relative;
`
const Line = styled.div`
    position:absolute;
    top:50%;
    width:100%;
    height:2px;
    background: white;
`


export default function TodoComponent({ todo, toggleTodo }) {
    return <Container>
        <List component="nav" onClick={() => {
            toggleTodo(todo._id)
        }} aria-label="secondary mailbox folders">
            <ListItem button>
                <ListItemText primary={todo.text} />
            </ListItem>
            <Divider />
            {todo.done && <Line />}
        </List>
    </Container>
}