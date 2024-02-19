import React from 'react'

export default function SearchTasks() {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search todo" />
            <span className="input-group-text">
                <i className="bi bi-search"></i>
            </span>
        </div>
    )
}
