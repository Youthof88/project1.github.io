import React from 'react';
import './css/Header.css';
import { Link, Route } from 'react-router-dom';

import Tees from './Tees';
import Backpacks from './Backpacks';
import Accesories from './Accesories';
import Trips from './Trips';


class Header extends React.Component {

  render() {
    return (
				<div>
					<nav className="navbar navbar-default navbar-fixed-top navigation-clean-button">
            <div className="container">
                <div className="navbar-header"><Link className="navbar-brand" to="/">Company Name</Link>
                    <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                </div>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav navbar-center">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/tees">Tees</Link></li>
												<li><Link to="/backpacks">Backpacks</Link></li>
												<li><Link to="/accesories">Accesories</Link></li>
												<li><Link to="/trips">Trips</Link></li>
                    </ul>
                    <p className="navbar-text navbar-right actions"><Link className="navbar-link login" to="#">Log In</Link> <Link className="btn btn-default action-button" role="button" to="#">Sign Up</Link></p>
                </div>
            </div>
        </nav>
				
			</div>

		);
  }
}

export default Header;