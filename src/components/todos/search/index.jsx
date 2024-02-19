import React from 'react'
import { useDispatch } from 'react-redux'
import { filterListTodosCreator } from '../../../store/actions-creators/todos'

export default function SearchTasks() {
    const dispatch = useDispatch()
    const handleFilterTasksTodos = (event) => {
        const keyWord = event.target.value
        dispatch(filterListTodosCreator(keyWord))

    }
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search todo" onChange={handleFilterTasksTodos} />
            <span className="input-group-text">
                <i className="bi bi-search"></i>
            </span>
        </div>
    )
}
