import { TodosType } from "../constants/actions-types/todos"

export const addTask = newTask => ({
    type: TodosType.ADD_TASK,
    payload: newTask
})

export const updateTask = id => ({
    type: TodosType.UPDATE_TASK,
    payload: id
})

export const removeTask = id => ({
    type: TodosType.REMOVE_TASK,
    payload: id
})

export const filterList = keyWord => ({
    type: TodosType.FILTER_LIST,
    payload: keyWord
})

export const removeList = list => ({
    type: TodosType.REMOVE_LIST,
    payload: list
})


