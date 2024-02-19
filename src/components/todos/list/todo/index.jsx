import React from 'react'

export default function ToDo({ todo }) {

  const isCompleted = todo.isCompleted ? "line" : ""

  return (
    <li className="list-group-item">
      <input type="checkbox" className='inpt' />
      <span className={isCompleted}>{todo.title}</span>
      <i className="bi bi-trash font-trash"></i>
    </li>
  )

}
