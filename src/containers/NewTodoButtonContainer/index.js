import {clearTodoList} from '../../actions';
import {connect} from 'react-redux';
import NewTodoButton from '../../components/NewTodoButton';

const mapDispatchToProps = dispatch => {
    return {
        clearTodoList: () => dispatch(
            clearTodoList()
          )
    }
}

export default connect(null, mapDispatchToProps)(NewTodoButton);