import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavBar from './NavBar';
import MenuBtn from './MenuBtn';
import Menu from './Menu';

const MainHeader = () => {
    const isMenuOpen = useSelector(state => state.app.isMenuOpen);

    return (
        <div className="main-header">
            <MenuBtn />
            <Link to={'/'} className="main-link">
                <h1 className="main-logo">Mister Bitcoin</h1>
                <h1 className="mobile-logo"><FontAwesomeIcon icon={['fab', 'bitcoin']} /></h1>
            </Link>
            <div className="navbar-wrapper">
                <NavBar />
            </div>
            <div className={'menu-wrapper' + ' ' + (isMenuOpen ? 'menu-open' : '')}>
                <Menu />
            </div>
        </div>
    )
}


export default MainHeader

