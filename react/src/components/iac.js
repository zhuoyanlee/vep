import React from 'react';
import IACSticky from './iacSticky.js';
import {Link} from 'react-router-dom';
export default class IAC extends React.Component {

  render() {
    return (
      <div>
        <div className="subheader">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <h2 className="section-heading">About</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">

          <div className="row">
            <IACSticky/>
            <div className="col-md-8" id="mainCol">

              <br/>

              <h3 id="sec0">Aim</h3>
              <hr/>
              <p>The The Industry Advisory Committee (IAC) on Veterans’ Employment has been established to develop and provide advice and practical measures to embed veterans’ employment strategies into recruitment practices of Australian business. The Committee will also play a role in the broader promotion of skills and professional attributes that veterans have to offer employers.</p>

              <h3 id="sec1">Terms of Reference</h3>
              <hr/>

              <p>The Industry Advisory Committee will:</p>
              <ol>
                <li>Develop practical measures to embed veterans’ employment strategies into the recruitment practices of Australian business.</li>
                <li>Foster the Committee members and industry leaders to drive creative solutions to provide greater employment opportunities for veterans.
                </li>
                <li>Develop a sustainable program for employers to gain an understanding of the experiences, skills and qualities of veterans and how these can be applied in the civilian workforce.</li>
                <li>Develop a program to monitor recruitment and long term retention rates of veterans in the civilian workforce.</li>
                <li>Consider any barriers to the successful employment of veterans and recommend strategies to address those barriers.</li>
                <li>Consider the outcomes of any private sector working groups and respond to matters raised when required.</li>
                <li>Examine whether there is scope to encourage business to employ the spouses of serving Australian Defence Force members.</li>
                <li>Provide a report to the Minister for Veterans’ Affairs/Defence Personnel by end of September 2017 outlining the Committee’s progress against these Terms of Reference.</li>
              </ol>

              <h3 id="sec2">Ex-Service Organisation Industry Partnership Register</h3>
              <p>
                <hr/>

                Ex-service organisations are invited to register their interest in partnering with industry on projects to promote the employment of veterans. Industry will be able to access this information when they are seeking a partner to assist in the creation of employment opportunities for veterans, including in regional and remote areas of the country. Ex-service organisations can register their interest by emailing ESOindustryregister@dva.gov.au
              </p>

              <h3 id="sec3">Membership</h3>
              <hr/>
              <ul>
                <li>George Frazis - Chair</li>
                <li>Ben Roberts-Smith VC, MG - Deputy Chair</li>
                <li>Natalie Colbert – small business representative</li>
                <li>Representatives of the following organisations:</li>
              </ul>

              <ul>
                <li>Allied Express Transport</li>
                <li>Australia Post</li>
                <li>Australian Chamber of Commerce and Industry</li>
                <li>Clayton Utz</li>
                <li>CSC Australia Pty Ltd</li>
                <li>J.P. Morgan Chase Bank, NA (Sydney Branch)</li>
                <li>PwC</li>
                <li>Raytheon Australia</li>
                <li>Saab Australia Pty Ltd</li>
                <li>Serco Australia Pty Ltd</li>
                <li>Westpac Group</li>
              </ul>

              <h3 id="sec4">Working Groups</h3>
              <hr/>
              <p>TBA</p>

              <h3 id="sec5">Latest News</h3>
              <hr/>
              <p>The Industry Advisory Committee on Veterans’ Employment held its inaugural meeting in Sydney on 31 March 2017.</p>

              <p>The Committee is an initiative of the Prime Minister’s Veterans’ Employment Program, launched in November 2016, and its role is to develop strategies that encourage industry to recognise the unique skills and experience that members of the ADF can bring to the workplace.</p>

              <p>At the meeting, the Committee focused on establishing a number of priority areas of focus. These areas include the availability of data on the employment profile of veterans, improving the transition process from the ADF, translating skills and raising awareness of the value that former members of the ADF offer to Australian businesses.</p>

              <p>The Committee will form Working Groups to progress its work, and will look to involve other businesses that have expressed interest in the Program.</p>

              <p>The next meeting of the Committee will be held in mid-June.</p>

              <h3 id="sec6">Contact the Committee</h3>
              <hr/>
              <div className="row">
                <div className="contact-details">
                  <h4>IAC Secretariat</h4>
                  <h5>C/- Department of Veterans' Affairs</h5>
                  <h5>GPO Box 9998</h5>
                  <h5>Canberra ACT 2601</h5>
                  <h5>
                    <i className="fa fa-envelope"></i>IAC.Secretariat@dva.gov.au</h5>
                </div>
              </div>
              <h3 id="sec7">Useful Links</h3>
              <hr/>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <Link to="/veterans" className="card-link" tabIndex="0">
                      <div className="card">
                        <h4>
                          <i className="fa fa-user"></i>Veteran</h4>
                        <h5>Information for Veterans</h5>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <Link to="/employers" className="card-link" tabIndex="0">
                      <div className="card">
                        <h4>
                          <i className="fa fa-briefcase"></i>Employer</h4>
                        <h5>Information for Employers</h5>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}