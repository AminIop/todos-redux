import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTaskTodosCreator } from '../../../store/actions-creators/todos'

export default function AddNewTask() {
    const dispatch = useDispatch()
    const [taskTitle, setTaskTitle] = useState("")
    const addNewTask = () => {
        const newTaskTitle = taskTitle.trim()
        if (newTaskTitle !== "") {
            dispatch(addTaskTodosCreator(newTaskTitle))
            setTaskTitle("")
        }
    }
    return (
        <li className="list-group-item">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add new todo item" value={taskTitle} onChange={(event) => setTaskTitle(event.target.value)} />
                <span className="input-group-text add" onClick={addNewTask}>
                    <i className="bi bi-plus-lg"></i>
                    <span>Add</span>
                </span>
            </div>
        </li>
    )
}
