import { Link, NavLink } from "react-router-dom";
import React from 'react';
import './index.scss'

const MainMenu = (props) => (
    <nav>
        <NavLink to="/add" activeClassName="activeNavLink">
            <p>Add New Todos</p>
        </NavLink>

        <NavLink to="/view" activeClassName="activeNavLink">
            <p>View Todo-List</p>
        </NavLink>
    </nav>
)

export default MainMenu;