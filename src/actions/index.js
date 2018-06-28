export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_TODO_LIST = 'CLEAR_TODO_LIST';
export const CHANGE_VISIBILITY_FILTER = 'CHANGE_VISIBILITY_FILTER';

let nextTodoId = 0;

const setIndex = () => {
    console.log("setIndex called")
    if (localStorage['redux-store']) {
        const reduxStore = JSON.parse(localStorage["redux-store"]);
        nextTodoId = reduxStore.todos.length
    } 
}

setIndex();

export const addTodo = (text) => (
    {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
)

export const toggleTodo = (id) => (
    {
        type: TOGGLE_TODO,
        id
    }
)

export const clearTodoList = () => (
    {
        type: CLEAR_TODO_LIST,
    }
)

export const changeVisibilityFilter = (filter) =>(
    {
        type: CHANGE_VISIBILITY_FILTER,
        filter
    }
)