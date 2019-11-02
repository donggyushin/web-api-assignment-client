import React from 'react';
import styled from 'styled-components';
import InputComponent from './Input/InputComponent';
import TodosContainer from './TodosContainer/TodosContainer';
import UpdateForm from './UpdateForm/UpdateForm';


const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Margin = styled.div`
    height:30px;
`

const Logout = styled.div`
    position:fixed;
    top:20px;
    left:50px;
    cursor: pointer;
`

const MainPrivateComponent = ({ onEnterKeyPressedToUpdateTodo, updateButtonClicked, todoToUpdate, updateTodo, deleteTodo, todos, logout, newtodo, handleInput, newTodo, toggleTodo, textToUpdate }) => <Container>
    <Logout onClick={logout}>LOGOUT</Logout>
    <Margin />
    <Margin />
    <Margin />
    <InputComponent handleInput={handleInput} newTodo={newTodo} newtodo={newtodo} />
    <Margin />
    <Margin />
    <TodosContainer updateButtonClicked={updateButtonClicked} deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />
    {updateTodo && <UpdateForm onEnterKeyPressedToUpdateTodo={onEnterKeyPressedToUpdateTodo} handleInput={handleInput} textToUpdate={textToUpdate} todoToUpdate={todoToUpdate} />}
</Container>

export default MainPrivateComponent