import React from 'react';
import '../index.css';

export default class NavBar extends React.Component {

  render(){
    const divStyle = {display:'none'};
    return (
      <div id="navbar">
        <head>
          <div class="container">
            <div class="row">
                <img class="dva-logo pull-right" src="./img/svg/dva-logo.svg" alt="" />
            </div>
          </div>
        </head>

        <div class="modal modal-menu fade" id="nav-menu-modal" tabindex="-1" role="dialog" aria-labelledby="nav-menu-modal" aria-hidden="true" style={divStyle}>
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <div class="modal-header text-center">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                  </div>
                  <div class="modal-body">
                    <ul class="list-unstyled text-center">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/resources">Resources</a></li>
                        <li><a href="/awards">Awards</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>
              </div>
          </div>
        </div>

        <nav id="mainNav" class="navbar navbar-default">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 col-md-offset-3">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="modal" data-target="#nav-menu-modal" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand" href="#"><img id="test" src="img/brand.png" alt="" /></a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/resources">RESOURCES</a></li>
                    <li><a href="/awards">AWARDS</a></li>
                    <li><a href="/contact">CONTACT</a></li>
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
