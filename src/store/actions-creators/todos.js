import { TodosType } from "../constants/actions-types/todos"

export const addTaskTodosCreator = newTask => ({
    type: TodosType.ADD_TASK,
    payload: newTask
})

export const updateTaskTodosCreator = id => ({
    type: TodosType.UPDATE_TASK,
    payload: id
})

export const removeTaskTodosCreator = id => ({
    type: TodosType.REMOVE_TASK,
    payload: id
})

export const filterListTodosCreator = keyWord => ({
    type: TodosType.FILTER_LIST,
    payload: keyWord
})

export const removeListTodosCreator = list => ({
    type: TodosType.REMOVE_LIST,
    payload: list
})

export const clearListTodosCreator = _ => ({
    type: TodosType.CLEAR_LIST
})


