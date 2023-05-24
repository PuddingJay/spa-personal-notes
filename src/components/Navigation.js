import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineHome } from "react-icons/ai";
import { BsPlusSquare } from 'react-icons/bs';
import PropTypes from 'prop-types';
import ToggleTheme from './ToggleTheme'
import ToggleLocale from './ToggleLocale'

function Navigation({ logout, name }) {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/"><AiOutlineHome /></Link></li>
                <li><Link to="/add"><BsPlusSquare /></Link></li>
                <li><ToggleLocale /></li>
                <li><ToggleTheme /></li>
                <li><button onClick={logout}>{name}, <FiLogOut /></button></li>
            </ul>
        </nav>
    );
}

Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default Navigation;