import React from 'react'
import ToDo from './todo'
import { useSelector } from 'react-redux'
import { getListTodos } from '../../../store/selectors/todos'

export default function TasksList() {
    const todos = useSelector(state => getListTodos(state))
    return (
        <ul className="list-group">
            {todos.map(el => <ToDo todo={el} key={el.id}/>)}
        </ul>
    )
}
