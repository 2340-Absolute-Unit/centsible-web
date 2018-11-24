import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() { 
        return (
            <div id="header"> 
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Centsible</a>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>
                                    Home <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/locations'>
                                    Locations
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/donations'>
                                    Donations
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/map'>
                                    Map
                                </Link>
                            </li>
                        </ul>
                </nav>
            </div>
        )
    }
}


export default Header; 