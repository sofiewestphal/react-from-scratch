import React from "react";
import './index.scss';


class visibilityMenu extends React.Component {
    componentDidMount(){
        updateActiveLink(this.props.visibilityFilter)
    }

    render(){
        return(
            <nav id="visibilityMenu">
                <ul>
                    <li id="ALL" className="visibilityMenuLink" onClick={() => {
                            updateActiveLink('ALL')
                            this.props.changeVisibilityFilter('ALL')
                        }}>
                        ALL
                    </li>
                    <li id="NOT_COMPLETED" className="visibilityMenuLink" onClick={() => {
                            updateActiveLink('NOT_COMPLETED')
                            this.props.changeVisibilityFilter('NOT_COMPLETED')
                        }}>
                        TODO
                    </li>
                    <li id="COMPLETED" className="visibilityMenuLink" onClick={() => {
                            updateActiveLink('COMPLETED')
                            this.props.changeVisibilityFilter('COMPLETED')
                        }}>
                        COMPLETED
                    </li>
                </ul>
            </nav>
        );
    }
};

function updateActiveLink (id){
    const list = document.getElementsByClassName('visibilityMenuLink');
    for (let listItem of list) {
        listItem.classList.remove('active')
    }
    document.getElementById(id).classList.add('active')
}

export default visibilityMenu;