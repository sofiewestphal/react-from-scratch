import React, {Component} from 'react';
import './app.css';
import { Route, Redirect } from 'react-router-dom';
import MainMenu from '../MainMenu';
import AddTodoContainer from '../../containers/AddTodoContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import VisibilityMenuContainer from '../../containers/VisibilityMenuContainer';
import NewTodoButtonContainer from '../../containers/NewTodoButtonContainer';

class homePage extends React.Component {
    render(){
        return(
            <div>
                <AddTodoContainer />
            </div> 
        )
    }
}

const aboutPage = props => (
    <div>
        <h1>Your Todo-List</h1>
        <VisibilityMenuContainer />
        <TodoListContainer />
        {store.getState().todos.length ? <NewTodoButtonContainer/> : null}
    </div>
)

class App extends Component {
    render(){
        return(
            <div className="page">
                <MainMenu />
                <Route path="/add" component={homePage}/>
                <Route path="/view" component={aboutPage}/>
                <Redirect to="/add"/>
            </div>
        )
    }
}

export default App;