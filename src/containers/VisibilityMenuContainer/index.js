import { connect } from 'react-redux';
import visibilityMenu from '../../components/VisibilityMenu';
import { changeVisibilityFilter } from '../../actions';

const mapStateToProps = state => {
    return {
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeVisibilityFilter: (filter) => dispatch(
            changeVisibilityFilter(filter)
          )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(visibilityMenu);