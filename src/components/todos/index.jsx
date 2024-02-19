import React from 'react'
import AddNewTask from './add'
import TasksList from './list'
import SearchTasks from './search'
import ClearAllTasks from './clear'

export default function Todos() {
    return (
        <div className="container-fluid">
            <div className="col-lg-4 offset-lg-4 border mt-5">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item active">Todo List</li>
                    <li className="list-group-item">
                        <SearchTasks />
                        <TasksList />
                        <ClearAllTasks />
                    </li>
                    <AddNewTask />
                </ul>
            </div>
        </div>
    )
}

