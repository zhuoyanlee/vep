import React from 'react';
import Scrollspy from 'react-scrollspy'
export default class AboutSticky extends React.Component {
 
  constructor(props) {
      super(props);
      this.state = {
        scrollingLock: false
      };
      // example how to bind object in React ES6
      this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 500) {
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < 500) {
      this.setState({
        scrollingLock: false
      });
    }

  }
  render(){
     
    return (
    
    	<div className="col-md-3 col-md-offset-1" id="leftCol">
              
              <ul className={this.state.scrollingLock ? "nav nav-stacked affix" : "nav nav-stacked affix-top"} id="sidebar">
                <Scrollspy className="nav nav-stacked affix nav nav-stacked affix-top" items={ ['sec0', 'sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6'] }  currentClassName="active">
                  <li><a href="#sec0">Industry Advisory Committee</a></li>
                  <li><a href="#sec1">The Prime Minister's Veterans' Employment Annual Awards</a></li>
                  <li>
                    <a href="#sec2">Ex-Service Organisation Industry Partnership Register</a>
                  </li>
                  <li><a href="#sec3">Department of Defence and Department of Veterans' Affairs Initiatives</a></li>
                  <li><a href="#sec4">Australian Public Service (APS) Initiatives</a></li>
				          <li><a href="#sec5">Department of Employment</a></li>
				        	<li><a href="#sec6">Useful Links</a></li>
                  </Scrollspy>
              	</ul>

              
      		</div>  
      
    );
  }
}
