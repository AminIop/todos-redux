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
        todos: newTodoList
    }
}

export const filterList = (state, keyWord) => {
    const newTodoList = state.todos.filter(el => el.title.toLowerCase().includes(keyWord.toLowerCase()))
    return {
        ...state,
        todos: newTodoList
    }
}

export const addNewTask = (state, title) => {
    const todo = {
        id: state.todos.length + 1,
        title,
        isCompleted: false
    }
    return {
        ...state,
        todos: [...state.todos, todo]
    }
}