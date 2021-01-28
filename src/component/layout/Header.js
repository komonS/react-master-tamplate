import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { LoginContext } from '../../store/LoginProvider'

function Header() {
    const { login } = useContext(LoginContext)
    const logout = () => {
        localStorage.clear()
    }
    const Logined = () => {

        return <li className="nav-item">
            <a className="nav-link" href="#" onClick={logout}>{localStorage.userID}</a>
        </li>

    }

    const NullLogin = () => {

        return <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
        </li>

    }

    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <Link className="navbar-brand" href="#" to="/">IT Ticket</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {login ? <Logined /> : <NullLogin />}
                    </ul>
                </div>
            </nav>
        </div>
    );
}




export default Header;
