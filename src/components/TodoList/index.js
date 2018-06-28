import React from 'react';
import './index.css'
import CheckboxOutline from 'react-icons/lib/fa/square';
import FaBeer from 'react-icons/lib/fa/check-square';

const TodoList = props => {

    const TodosToShow = (props.visibilityFilter === 'COMPLETED') ?
        props.todos.filter(todo => todo.completed) :
        (props.visibilityFilter === 'NOT_COMPLETED') ?
            props.todos.filter(todo => !todo.completed) :
        props.todos;
    
    return (
        <div>
            <ul>
                {TodosToShow.map(todo =>
                    <ListItem 
                        key={todo.id} 
                        completed={todo.completed}
                        text={todo.text} 
                        id={todo.id} 
                        onClickHandler={props.toggleTodo}/>
                )}
            </ul>
        </div>
    )
}

const ListItem = props => (
    <li
        className={props.completed ? 'todoDone TodoListItem' : 'todoNotDone TodoListItem'}
        onClick={() => props.onClickHandler(props.id)}>
        {props.completed ? <FaBeer /> : <CheckboxOutline />}{props.text}
    </li>
)

export default TodoList;