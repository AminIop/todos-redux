import React from 'react'
import { useDispatch } from 'react-redux'
import { clearListTodosCreator } from '../../../store/actions-creators/todos'

export default function ClearAllTasks() {


  const dispatch = useDispatch()
  const handleClearListTodos = () => {
    if (window.confirm(`are u sure that u want delete all tasks ???`)) {
      dispatch(clearListTodosCreator())
    }
  }

  return (
    <button type="button" className="btn btn-dark btn-sm mt-2" onClick={handleClearListTodos}>Clear All</button>
  )
}
