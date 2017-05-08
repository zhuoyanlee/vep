import React from 'react';
export default class IACSticky extends React.Component {

  render() {
    return (
        <div className="col-md-3 col-md-offset-1" id="leftCol top-sticky">

          <ul className="nav nav-stacked" id="sidebar">
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
