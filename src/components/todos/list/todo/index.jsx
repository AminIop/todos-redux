import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTaskTodosCreator } from "../../../../store/actions-creators/todos"
export default function ToDo({ todo }) {

  const dispatch = useDispatch()
  const isCompleted = todo.isCompleted ? "line" : ""

  const handleDeleteTaskFromTodos = () => {
    if (window.confirm(`are u sure that u want delete task number ${todo.id} ???`)) {
      dispatch(removeTaskTodosCreator(todo.id))
    }
  }

  return (
    <li className="list-group-item">
      <input type="checkbox" className='inpt' />
      <span className={isCompleted}>{todo.title}</span>
      <i className="bi bi-trash font-trash" onClick={handleDeleteTaskFromTodos}></i>
    </li>
  )

}
