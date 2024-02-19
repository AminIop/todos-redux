import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

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

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            return state
        default:
            return state
    }
}

 const store = createStore(rootReducer, composeWithDevTools({})())
 export default store