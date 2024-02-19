import React from 'react'
import { useDispatch } from 'react-redux'
import { clearListTodosCreator } from '../../../store/actions-creators/todos'

export default function ClearAllTasks() {

  const dispatch = useDispatch()

  return (
    <button type="button" className="btn btn-dark btn-sm mt-2" onClick={() => dispatch(clearListTodosCreator())}>Clear All</button>
  )
}
