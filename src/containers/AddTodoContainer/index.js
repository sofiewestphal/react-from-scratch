import React from 'react';
import { addTodo } from '../../actions';
import { connect } from 'react-redux';
import AddTodo from '../../components/AddTodo';

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => dispatch(
            addTodo(text)
          )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);