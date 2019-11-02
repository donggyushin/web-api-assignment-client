import React from 'react';
import MainPrivateComponent from './Presenter';
import axios from 'axios';
import { END_POINT } from 'consts/endpoint';

class MainPrivateComponentContainer extends React.Component {

    componentDidMount() {
        axios.get(END_POINT + 'todo', { headers: { jwt: localStorage.getItem('jwt') } })
            .then(res => res.data)
            .then(data => {
                const { ok, error, todos } = data;
                if (ok) {
                    console.log(todos);
                    this.setState({
                        todos
                    })
                } else {
                    alert(error);
                }
            })
            .catch(err => console.error(err))

    }

    state = {
        todos: [],
        newtodo: "",
        updateTodo: false,
        todoToUpdate: {},
        textToUpdate: ""
    }
    render() {
        const { todos, newtodo, updateTodo, todoToUpdate, textToUpdate } = this.state;
        const { logout } = this.props;
        const { handleInput, newTodo, toggleTodo, deleteTodo, updateButtonClicked, onEnterKeyPressedToUpdateTodo } = this;
        return <MainPrivateComponent onEnterKeyPressedToUpdateTodo={onEnterKeyPressedToUpdateTodo} handleInput={handleInput} textToUpdate={textToUpdate} updateButtonClicked={updateButtonClicked} todoToUpdate={todoToUpdate} updateTodo={updateTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} handleInput={handleInput} newTodo={newTodo} newtodo={newtodo} todos={todos} logout={logout} />
    }

    onEnterKeyPressedToUpdateTodo = e => {
        const { todoToUpdate, textToUpdate } = this.state;
        if (e.key === 'Enter') {
            // request to server to update toggle    
            console.log(todoToUpdate._id);
            console.log(textToUpdate);
            axios.put(END_POINT + 'todo', {
                todoId: todoToUpdate._id,
                text: textToUpdate
            }, {
                headers: {
                    jwt: window.localStorage.getItem('jwt')
                }
            })
                .then(res => res.data)
                .then(data => {
                    const { ok, error, todo } = data;
                    if (ok) {
                        const updatedTodos = this.state.todos.map(todo2 => {
                            if (todo2._id === todo._id) {
                                return todo
                            } else {
                                return todo2
                            }
                        })
                        this.setState({
                            todos: updatedTodos,
                            updateTodo: false
                        })
                    } else {
                        alert(error)
                    }
                })
                .catch(err => console.error(err))
        }
    }



    updateButtonClicked = todoId => {
        const todosToUpdate = this.state.todos.filter(todo => todo._id === todoId)
        const todoToUpdate = todosToUpdate[0];
        this.setState({
            todoToUpdate,
            updateTodo: true,
            textToUpdate: todoToUpdate.text
        })
        console.log('todo to update: ', todoToUpdate);
    }

    deleteTodo = (todoId) => {
        console.log('jwt: ', window.localStorage.getItem('jwt'));
        axios.delete(END_POINT + `todo/${window.localStorage.getItem('jwt')}/${todoId}`)
            .then(res => res.data)
            .then(data => {
                const { ok, error, todo } = data;
                if (ok) {
                    const updatedTodos = this.state.todos.filter(todo2 => {
                        if (todo2._id === todo._id) {
                            return false;
                        } else {
                            return true
                        }
                    })
                    console.log('updated todos: ', updatedTodos);
                    this.setState({
                        todos: updatedTodos
                    })
                } else {
                    alert(error)
                }
            })
            .catch(err => console.error(err))
    }

    toggleTodo = (todoId) => {
        axios.put(END_POINT + 'todo/toggle', { todoId }, { headers: { jwt: localStorage.getItem('jwt') } })
            .then(res => res.data)
            .then(data => {
                const { ok, error, todo } = data;
                if (ok) {
                    const updatedTodos = this.state.todos.map(todo2 => {
                        if (todo2._id === todo._id) {
                            return todo
                        } else {
                            return todo2
                        }
                    })
                    this.setState({
                        ...this.state,
                        todos: updatedTodos
                    })
                } else {
                    alert(error)
                }
            })
            .catch(err => console.error(err))
    }

    newTodo = (e) => {

        if (e.key === 'Enter') {
            e.preventDefault()
            axios.post(END_POINT + 'todo', { text: this.state.newtodo }, { headers: { jwt: localStorage.getItem('jwt') } })
                .then(res => res.data)
                .then(data => {
                    this.setState({
                        newtodo: ""
                    })
                    const { ok, error, todo } = data;
                    if (ok) {
                        this.setState({
                            ...this.state,
                            todos: [
                                ...this.state.todos,
                                todo
                            ]
                        })
                    } else {
                        alert(error)
                    }
                })
                .catch(err => console.error(err))
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

export default MainPrivateComponentContainer