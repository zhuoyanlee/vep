import React from 'react';
import {Link} from 'react-router-dom';
import DVALogo from '../image/dva-logo.svg';

export default class NavBar extends React.Component {

  close(){
    this.setState({showModal: false});
  }
  
  render(){
      
    const divStyle={display:'none'};
    const center={textAlign: "center"};
    return (

<div>
  <div className="container">
    <div className="row">
        <img className="dva-logo pull-right" src={DVALogo}/>
    </div>
  </div>

<div  className="modal modal-menu fade" id="nav-menu-modal" tabIndex="-1" role="dialog" aria-labelledby="nav-menu-modal" aria-hidden="true" style={divStyle}>
  <div className="modal-dialog modal-lg">
      <div className="modal-content">
          <div  className="modal-header text-center">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div >
          <div className="modal-body text-center"style = {center}>
            <ul className="list-unstyled text-center" id="accordion">
                <li><Link to="/" onClick={this.close}>Home</Link></li>
                 <li className="panel">
                  <a data-toggle="collapse" data-parent="#accordion" href="#l1">About
                  <span className="caret"></span></a>

                  <ul id="l1" className="list-unstyled text-center collapse">
                    <li><Link to="/about"onClick={this.close}>Initiatives</Link></li>
                    <li><Link to="#"onClick={this.close}>Veterans</Link></li>
                    <li><Link to="#"onClick={this.close}>Employers</Link></li>
		                <li><Link to="#"onClick={this.close}>Ex-Service Organisations</Link></li>
		                <li><Link to="/iac"onClick={this.close}>Industry Advisory Committee</Link></li>
                  </ul>
                </li>
                <li><Link to="/resources"onClick={this.close}>Resources</Link></li>
                <li><Link to="/awards"onClick={this.close}>Awards</Link></li>
                <li><Link to="/contact"onClick={this.close}>Contact</Link></li>
            </ul>
          </div>
      </div>
      </div>
</div >

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
          <a className="navbar-brand" href="#"><img id="test" className="img-responsive" src="img/brandingbottomswirl2.svg" /></a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/">HOME</Link></li>

					<li className="dropdown">

        <a className="dropdown-toggle" data-toggle="dropdown" href="#">ABOUT
        <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><Link to="/about">Initiatives</Link></li>
          <li><Link to="#">Veterans</Link></li>
          <li><Link to="#">Employers</Link></li>
		      <li><Link to="#">Ex-Service Organisations</Link></li>
		      <li><Link to="/iac">Industry Advisory Committee</Link></li>
        </ul>
      </li>

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