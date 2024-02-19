export const clearList = state => {
    return {
        ...state,
        todos: []
    }
}

export const removeTask = (state, id) => {
    const newTodoList = state.todos.filter(el => el.id !== id)
    return {
        ...state,
        todos : newTodoList
    }
}