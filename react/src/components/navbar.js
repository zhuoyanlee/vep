import React from 'react';
import {Link} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import DVALogo from '../image/dva-logo.svg';
import Brand from '../image/brand.png';

export default class NavBar extends React.Component {

  render(){
    const divStyle = {display:'none'};
    return (
      <div id="navbar">

          <div className="container">
            <div className="row">
                <img className="dva-logo pull-right" src={DVALogo} alt="" />
            </div>
          </div>


        <div className="modal modal-menu fade" id="nav-menu-modal" tabindex="-1" role="dialog" aria-labelledby="nav-menu-modal" aria-hidden="true" style={divStyle}>
          <div className="modal-dialog modal-lg">
              <div className="modal-content">
                  <div className="modal-header text-center">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                  </div>
                  <div className="modal-body">
                    <ul className="list-unstyled text-center">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                        <li><Link to="/awards">Awards</Link></li>
                        <li><Link to ="/contact">Contact</Link></li>



                    </ul>
                  </div>
              </div>
          </div>
        </div>

        <nav id="mainNav" className="navbar navbar-default">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="modal" data-target="#nav-menu-modal" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#"><img id="test" src={Brand} alt="" /></a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/resources">RESOURCES</Link></li>
                    <li><Link to="/awards">AWARDS</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
