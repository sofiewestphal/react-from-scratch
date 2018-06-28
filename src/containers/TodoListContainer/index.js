import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import { toggleTodo } from '../../actions';

// class TodoListContainer extends React.Component {

//     elementClickHandler(){

//     }

//     render(){
//         <TodoList elementClickHandler={this.elementClickHandler.bind(this)}/>
//     }
// }

const mapStateToProps = state => {
    return {
        todos: state.todos,
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: (id) => dispatch(
            toggleTodo(id)
          )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);