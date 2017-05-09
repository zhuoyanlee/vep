import React from 'react';
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

  render() {
    return (

            <div className="col-md-3 col-md-offset-1" id="leftCol">
              <ul className={this.state.scrollingLock ? "nav nav-stacked affix" : "nav nav-stacked affix-top"} id="sidebar">
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
              </ul>
            </div>

    );
  }
}
