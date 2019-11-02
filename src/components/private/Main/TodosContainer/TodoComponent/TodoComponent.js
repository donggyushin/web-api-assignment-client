import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Container = styled.div`
    position:relative;
`
const DeleteButton = styled.div`
    opacity:0;
    position:absolute;
    top:0;
    right:0;
    z-index:3;
    cursor: pointer;
    color:white;
    ${Container}:hover & {
        opacity:1;
    }
    
`

const UpdateButton = styled.div`
opacity:0;
    position:absolute;
    top:0;
    right:70px;
    z-index:3;
    cursor: pointer;
    color:white;
    ${Container}:hover & {
        opacity:1;
    }
`

const Line = styled.div`
    position:absolute;
    top:50%;
    width:100%;
    height:2px;
    background: white;
`


export default function TodoComponent({ todo, toggleTodo, deleteTodo, updateButtonClicked }) {
    return <Container>
        <UpdateButton onClick={() => {
            updateButtonClicked(todo._id)
        }}>Update</UpdateButton>
        <DeleteButton onClick={() => {
            deleteTodo(todo._id)
        }}>Delete</DeleteButton>
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