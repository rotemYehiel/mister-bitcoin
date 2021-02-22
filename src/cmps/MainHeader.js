import React from 'react'
import { Link } from 'react-router-dom';

import NavBar from './NavBar'

const MainHeader = () => {

    return (
        <div className="main-header">
            <Link to={'/'}><h1 className="main-logo">Mister Bitcoin</h1></Link>
            <NavBar ></NavBar>
        </div>
    )
}


export default MainHeader

