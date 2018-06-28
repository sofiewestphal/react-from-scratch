import React from 'react';
import './index.css';

const AddTodo = (props) => {
    let input;

    return (
        <div>
            <h1>Add a thing to your todo-list</h1>
            <form id="addTodoForm"
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    props.addTodo(input.value)
                    input.value = ''
                }}
            >
                <input 
                    type="text" 
                    className="todoInput"
                    ref={node => input = node}/>
                <button type="submit">
                    ADD TODO
                </button>
            </form>
        </div>
    )
}
    
export default AddTodo;