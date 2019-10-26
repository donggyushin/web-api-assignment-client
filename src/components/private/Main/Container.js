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
        newtodo: ""
    }
    render() {
        const { todos, newtodo } = this.state;
        const { logout } = this.props;
        const { handleInput, newTodo, toggleTodo } = this;
        return <MainPrivateComponent toggleTodo={toggleTodo} handleInput={handleInput} newTodo={newTodo} newtodo={newtodo} todos={todos} logout={logout} />
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