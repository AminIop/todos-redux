import { combineReducers } from "redux"
import { TodosType } from "../constants/actions-types"
import { clearList, filterList, removeTask } from "../../helpers"
import { todosData } from "../../data/model"

const initialState = {
    todos: [
        {
            id: 1,
            title: 'my first task',
            isCompleted: true
        },
        {
            id: 2,
            title: 'another task',
            isCompleted: false
        }
    ]
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TodosType.ADD_TASK:
            return state
        case TodosType.REMOVE_TASK:
            return removeTask(state, action.payload)
        case TodosType.UPDATE_TASK:
            return state
        case TodosType.FILTER_LIST:
            return filterList(todosData, action.payload)
        case TodosType.REMOVE_LIST:
            return state
        case TodosType.CLEAR_LIST:
            return clearList()
        default:
            return state
    }
}

export default combineReducers({ todosReducer })