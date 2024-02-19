import React from 'react'
import { useSelector } from 'react-redux'

export default function App() {
  const selectedValues = useSelector(state => state.todos)
  console.log(selectedValues)
  return (
    <div>App</div>
  )
}
