import React from 'react';
import '../index.css';
import { footer } from 'reactstrap';
export default class Footer extends React.Component {

  render(){
    return (
      <div id="footer">
        <div className="footer-bottom">
            <div className="container-fluid">
                <div className="row">
                </div>
            </div>
        </div>
        <footer className="footer">
            <div className="footer-colour-bars">
              <div className="footer-colour-bar red"></div>
              <div className="footer-colour-bar green"></div>
              <div className="footer-colour-bar blue"></div>
            </div>
            <div className="container">
              <ul className="footer-links">
                <li><a href="http://www.dva.gov.au/site-information/disclaimer" target="_blank"><i class="fa fa-external-link-square"></i>Disclaimer</a></li>
                <li><a href="http://www.dva.gov.au/site-information/privacy" target="_blank"><i class="fa fa-external-link-square"></i>Privacy and Security</a></li>
                <li><a href="http://www.dva.gov.au/site-information/copyright" target="_blank"><i class="fa fa-external-link-square"></i>Copyright</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
              <a href="http://www.dva.gov.au/" target="_blank" className="dva-footer-link pull-right"><i class="fa fa-external-link-square"></i>Department of Veterans' Affairs</a>
            </div>
         </footer>

      </div>
    );
  }
}
