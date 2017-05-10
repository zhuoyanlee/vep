import React from 'react';
import AboutSticky from './aboutSticky.js';

export default class About extends React.Component {

  render(){
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
    <AboutSticky/>
      		<div className="col-md-8" id="mainCol">
              
              	<br />
               
              	<h3 id="sec0">Industry Advisory Committee on Veterans’ Employment</h3>
                <hr />
				<p>The <a href="/iac">Industry Advisory Committee</a> on Veterans’ Employment will develop
				and provide advice on practical measures to embed veterans’ employment
				strategies into the recruitment practices of Australian business. The Committee
				will play a role in the broader promotion of the skills and professional attributes
				that veterans have to offer employers. Advisory Committee members will be
				known as “Veteran Employment Ambassadors”.
				Interested firms are encouraged to apply to be members of the Advisory
				Committee. The Government will assist to set up the Advisory Committee
				which will transition to become an industry led committee. The first meeting
				will occur in the first half of 2017 and will be chaired by the Minister for
				Veterans’ Affairs and Defence Personnel.
				Companies can register their interest by emailing
				veteransemployment@dva.gov.au</p>
       
         
            	          
              	<h3 id="sec1">The Prime Minister’s Veterans’ Employment Annual Awards</h3>
				<hr />
              
				<p>The Prime Minister’s Veterans’ Employment Annual Awards will recognise the
				achievements of small, medium and large companies in creating employment
				opportunities for veterans. The criteria for the awards will be developed in
				consultation with the Industry Advisory Committee.</p>
      

         
              	<h3 id="sec2">Ex-Service Organisation Industry Partnership Register</h3>
              	<p>
                  
				<hr />
              
				Ex-service organisations are invited to register their interest in partnering with
				industry on projects to promote the employment of veterans. Industry will be
				able to access this information when they are seeking a partner to assist in the
				creation of employment opportunities for veterans, including in regional and
				remote areas of the country.
				Ex-service organisations can register their interest by emailing
				ESOindustryregister@dva.gov.au
              	</p>
     

                           
              	<h3 id="sec3">Department of Defence and Department of Veterans’ Affairs initiatives</h3>
				<hr />
              
				<p>• Improvements to the transition process for separating members
				of the Australian Defence Force (ADF) that will include ensuring all
				individuals leave Defence with separation documentation, such as
				their training records, and an individual transition plan.</p>
				<p>• Tailored transition coaching services for all separating members.</p>
				<p>• Reinstating surveys of former ADF personnel post-separation to assess the
				effectiveness of ADF transition programs and inform future initiatives.</p>
				<p>• Working with civilian authorities to align military qualifications with civilian
				qualifications.</p>
				<p>• Improvements to vocational rehabilitation services for veterans with an
				ADF-related injury or illness.</p>
         
            
              	<h3 id="sec4">Australian Public Service (APS) initiatives</h3>
				<hr />
				<p>• Launch of the new APSJobs website in 2017 will include specific information
				for veterans seeking employment in the APS.</p>
				<p>• Development of a tool that aligns ADF ranks to APS classifications.</p>
				<p>• Introduction of a toolkit that outlines information for veterans on working in
				the APS.</p>
        
           
              	<h3 id="sec5">Department of Employment</h3>
				<hr />
				<p>• Creation of an information page for veterans on the Government’s jobactive
				website.</p>
				<p>• Creation of an optional ‘defence force experience desirable’ flag for vacancies
				listed on the jobactive website that will enable job seekers to search for
				vacancies for which former ADF members would be well suited and then to
				apply directly to the employer.</p>
				<p>• Development of a stronger partnership with the Department of Defence
				to further enhance the Career Transition Assistance Scheme for separating
				ADF members, including employment planning advice and labour market
				information.</p>
       
                  
              	<hr />
     
        <h3 id="sec6">Useful Links</h3>
				
	                  <div name="Links" className="col-md-12">
                  
                      <div className="row">
										<div className="col-md-6">			
									  <a href="/resources#veteran" className="card-link">
										<div className="card">
										  <h4><i className="fa fa-user"></i>Veteran</h4>
										  <h5>Information for Veterans</h5>
										</div>
									  </a>
										</div>
									 
										<div className="col-md-6">	
									  <a href="/resources#employer" className="card-link">
										<div className="card">
										  <h4><i className="fa fa-briefcase"></i>Employer</h4>
										  <h5>Information for Employers</h5>
										</div>
									  </a>
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
