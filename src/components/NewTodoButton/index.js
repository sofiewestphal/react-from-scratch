import React from 'react';
import './index.css';

const NewTodoButton = props => (
    <div id="containerBtnNewTodoList"> 
        <button id="btnNewTodoList" onClick={() => {
                props.clearTodoList()
            }}>Clear Current Todo-List</button>
    </div>
)

export default NewTodoButton;