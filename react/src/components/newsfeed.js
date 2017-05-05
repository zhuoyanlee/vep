import React from 'react';
export default class NewsFeed extends React.Component {

  render(){
    return (
       <section className="newsfeed" id="news">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-md-offset-6">
              <h1 id="newsHeading">Transfer Between Military and Civilian Life</h1>
              <p>
                The Prime Minister's Veterans' Employment Program demonstrates the importance the Government
                places on raising awareness with employers, both private and public sector, of the value
                and unique experience of our veterans.
              </p>
            </div>
          </div>
        </div>
      </section>
          
      
    );
  }
}