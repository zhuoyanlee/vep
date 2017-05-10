import React from 'react';
export default class Contact extends React.Component {

  render(){
    return (
      <div>
        <div className="subheader">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6 col-md-offset-3">
					<h2 className="section-heading">Contact Us</h2>
				</div>
			</div>
		</div>
	</div>
	<section>
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6 col-md-offset-3 contact-form">
					<div className="col-md-7">
						<form>
							<div className="col-md-12">
								<div className="form-group">
									<label for="firstname">First Name</label> <input className="form-control" id="firstname" placeholder="ex. John" type="text"/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<label for="surname">Last Name</label> <input className="form-control" id="surname" placeholder="ex. Smith" type="text"/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<label for="email">Email</label> <input className="form-control" id="email" placeholder="ex. john.smith@example.com" type="email"/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<label for="phone">Phone Number</label> <input className="form-control" id="phone" placeholder="ex. 0412 3456 7890" type="email"/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<label for="feedback">Feedback</label>
									<textarea className="form-control" rows="4"></textarea>
								</div>
							</div>
							<div className="col-md-1">
								<button className="btn btn-default" type="submit">Submit</button>
							</div>
						</form>
					</div>
					<div className="col-md-5">
						<div className="contact-details">
							<h4>Contact Details</h4>
							<h5><i className="fa fa-phone-square"></i><span>Hours:</span>8am-5pm (AEST) Mon-Fri</h5>
							<h5><span className="head">Local:</span>133 254</h5>
							<h5><span className="head">Regional:</span>1800 555 254</h5>
							<h5><span className="head">International:</span>61 2 6289 1133</h5>
							<h5><i className="fa fa-envelope"></i>veteransemployment@dva.gov.au</h5>
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
