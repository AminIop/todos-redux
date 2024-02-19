import React from 'react'
import ToDo from './todo'
import { useSelector } from 'react-redux'
import { getListTodos } from '../../../store/selectors/todos'

export default function TasksList() {
    const todos = useSelector(state => getListTodos(state))
    const ErrorMessageTemplate = _ => {
        return <h6>No data founded (empty todos list)</h6>
    }
    const todosTemplate = _ => {
        return <ul className="list-group">
            {todos.map(el => <ToDo todo={el} key={el.id} />)}
        </ul>
    }
    return (
        todos.length > 0 ? todosTemplate() : ErrorMessageTemplate()
    )
}
