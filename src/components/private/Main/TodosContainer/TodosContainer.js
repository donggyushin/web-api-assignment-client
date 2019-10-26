import React from 'react';
import styled from 'styled-components';
import TodoComponent from './TodoComponent/TodoComponent'

const Container = styled.div`
    display:flex;
    width:60%;
    flex-direction:column;
    
`

export default function TodosContainer({ todos, toggleTodo }) {
    return <Container>{todos.map(todo => <TodoComponent toggleTodo={toggleTodo} key={todo._id} todo={todo} />)}</Container>
}