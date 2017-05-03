import React from 'react';
import '../index.css';
export default class Footer extends React.Component {

  render(){
    return (
      <div id="footer">
        <div class="footer-bottom">
            <div class="container-fluid">
                <div class="row">
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-colour-bars">
              <div class="footer-colour-bar red"></div>
              <div class="footer-colour-bar green"></div>
              <div class="footer-colour-bar blue"></div>
            </div>
            <div class="container">
              <ul class="footer-links">
                <li><a href="http://www.dva.gov.au/site-information/disclaimer" target="_blank"><i class="fa fa-external-link-square"></i>Disclaimer</a></li>
                <li><a href="http://www.dva.gov.au/site-information/privacy" target="_blank"><i class="fa fa-external-link-square"></i>Privacy and Security</a></li>
                <li><a href="http://www.dva.gov.au/site-information/copyright" target="_blank"><i class="fa fa-external-link-square"></i>Copyright</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
              <a href="http://www.dva.gov.au/" target="_blank" class="dva-footer-link pull-right"><i class="fa fa-external-link-square"></i>Department of Veterans'' Affairs</a>
            </div>
         </div>
          
      </div>
    );
  }
}
