import React from 'react';
export default class Home extends React.Component {

  render(){
    return (
			<div>
     <div className="subheader">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
    		      <h2 className="section-heading"> Veterans' Employment Program</h2>
            </div>
          </div>
        </div>
    	</div>

      <section className="bg-primary" id="about2">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-4 col-md-offset-3">
                      <p>
              					Members of the Australian Defence Force (ADF) gain an extensive range of skills, abilities,
                        recognised behaviors and attributes that make them valuable employees in the civilian workforce.
                        Skills such as problem-solving, leadership, team work and the ability to work in high-pressure environments
                        are just to name a few. Many former members continue to live by core ADF values such as honesty, honour,
                        initiative, integrity, respect and loyalty. These attributes are an asset to any employer.
                      </p>
            	        <p>
                        The Prime Minister's Veterans' Employment Program will also work with industry to embed veteran's
                        employment programs in their recruitment strategies and again raise the enormous potential of former
                        ADF personnel to the civilian workforce.
                      </p>
					  
					  <div className="row">
								<div className="well well-sm">
							  <div className="recent-news">
								<h4>Recent News</h4>
								<div className="news-item">
								  <h5>From battlefield to the boardroom</h5>
								  <p className="content">
									TRY to imagine for a moment being Ben Roberts-Smith. You're the
									embodiment of masculinity - bigger, stronger and taller... <a href="#">Read more</a>
								  </p>
								  <p className="timestamp">14th of December, 2016</p>
								</div>
								<div className="news-item">
								  <h5>Veteran Employment Bill Passes Senate</h5>
								  <p className="content">
									The bill already passed the House of Representatives in February.
									Cook had reintroduced this bipartisan bill earlier this year. ... <a href="#">Read more</a>
								  </p>
								  <p className="timestamp">28th of November, 2016</p>
								</div>
							  </div>
							</div>
					  </div>
					  
					  
                  </div>
                  <div className="col-md-2">
                  
                      <div className="row">
									<div className="col-md-10">
									  <a href="/resources#veteran" class="card-link">
										<div className="card">
										  <h4><i className="fa fa-user"></i>Veteran</h4>
										  <h5>Information for Veterans</h5>
										</div>
									  </a>
									</div>
									<div className="col-md-10">
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
      </section>
			</div>
    );
  }
}
