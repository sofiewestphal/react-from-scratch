import { combineReducers } from 'redux'
import {ADD_TODO, TOGGLE_TODO, CLEAR_TODO_LIST, CHANGE_VISIBILITY_FILTER} from '../actions';

const todosReducer = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state, {
                id: action.id,
                text: action.text,
                completed: false
            }]
        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                ? updateObject(todo, {completed: !todo.completed})
                : todo
            )

        case CLEAR_TODO_LIST:
            return [];
            
        default:
            return state; 
    }
}

const visibilityFilterReducer = (state = 'ALL', action) => {
    switch(action.type){
        case CHANGE_VISIBILITY_FILTER:
            return action.filter
        default:
            return state;
    }
}

function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
}

const rootReducer = combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
})

export default rootReducer;