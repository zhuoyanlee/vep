import React from 'react';
import Scrollspy from 'react-scrollspy'
export default class IACSticky extends React.Component {

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
    if ((window.scrollY || document.documentElement.scrollTop) > 500) {
      this.setState({
        scrollingLock: true
      });
    } else if ((window.scrollY || document.documentElement.scrollTop) < 500) {
      this.setState({
        scrollingLock: false
      });
    }

  }

  render() {
    return (

            <div className="col-md-3 col-md-offset-1" id="leftCol">

            <ul className={this.state.scrollingLock ? "nav nav-stacked affix" : "nav nav-stacked affix-top"} id="sidebar">
               <Scrollspy className="nav nav-stacked affix nav nav-stacked affix-top" items={ ['sec0', 'sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6'] }  currentClassName="active">

                <li>
                  <a href="#sec0">Aim</a>
                </li>
                <li>
                  <a href="#sec1">Terms of Reference</a>
                </li>
                <li>
                  <a href="#sec2">Membership</a>
                </li>
                <li>
                  <a href="#sec3">Working Groups</a>
                </li>
                <li>
                  <a href="#sec4">Latest News</a>
                </li>
                <li>
                  <a href="#sec5">Contact</a>
                </li>
                <li>
                  <a href="#sec6">Useful Links</a>
                </li>
               </Scrollspy>
              </ul>

            </div>

    );
  }
}
