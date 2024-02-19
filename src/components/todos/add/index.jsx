import React from 'react'

export default function AddNewTask() {
    return (
        <li className="list-group-item">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add new todo item" />
                <span className="input-group-text add">
                    <i className="bi bi-plus-lg"></i>
                    <span>Add</span>
                </span>
            </div>
        </li>
    )
}
