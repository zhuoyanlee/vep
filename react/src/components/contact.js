import React from 'react';
import {Field, reduxForm} from 'redux-form';

class Contact extends React.Component {

  

  renderField(field) {
    const {meta: {touched,error}} = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;

    return (
      <div className="col-md-12">
        <div className={className}>
          <label>{field.label}</label>
          <input className="form-control" {...field.input} type="text" placeholder={field.placeholder}/>
          <span className="text-danger">
            {touched ? error : ''}
          </span>
        </div>
      </div>

    );
  }

  renderFeedback(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-error' : ''}`;

    return (
      <div className="col-md-12">
        <div className={className}>
          <label>{field.label}</label>
          <textarea className="form-control" {...field.input} type="text" placeholder={field.placeholder} rows="4"/>
          <span className="text-danger">
            {touched ? error : ''}
          </span>
        </div>
      </div>
    );
  }

  onSubmit(values) {   
    console.log(values);
    //clear input after form submit.
    values.firstname = ""; 
    values.lastname = ""; 
    values.email = ""; 
    values.phone = ""; 
    values.feedback = ""; 
 

  }

  render() {
    const {handleSubmit} = this.props;
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
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="firstname" label="First Name" placeholder="ex. John" component={this.renderField}/>
                    <Field name="lastname" label="Last Name" placeholder="ex. Smith" component={this.renderField}/>
                    <Field name="email" label="Email" placeholder="ex. john.smith@example.com" component={this.renderField}/>
                    <Field name="phone" label="Phone Number" placeholder="ex. 0412 3456 7890" component={this.renderField}/>
                    <Field name="feedback" label="Feedback" component={this.renderFeedback}/>

                    <div className="col-md-12"></div>
                    <div className="col-md-1">
                      <button type="submit" className="btn btn-default" type="submit">Submit</button>
                    </div>
                  </form>

                </div>
                <div className="col-md-5">
                  <div className="contact-details">
                    <h4>Contact Details</h4>
                    <h5>
                      <i className="fa fa-phone-square"></i>
                      <span>Hours:</span>8am-5pm (AEST) Mon-Fri</h5>
                    <h5>
                      <span className="head">Local:</span>133 254</h5>
                    <h5>
                      <span className="head">Regional:</span>1800 555 254</h5>
                    <h5>
                      <span className="head">International:</span>61 2 6289 1133</h5>
                    <h5>
                      <i className="fa fa-envelope"></i>veteransemployment@dva.gov.au</h5>
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

function validate(values) {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "Please enter your first name.";
  }

  if (!values.lastname) {
    errors.lastname = "Please enter your last name.";
  }

  if (!values.email) {
    errors.email = 'Please enter an email address'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.'
  }

  if (!values.feedback) {
    errors.feedback = "Please enter your feedback.";
  }

  return errors;

}

export default reduxForm({
  validate, form: 'feedbackForm' // a unique identifier for this form
})(Contact)
