import React from 'react';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/font-awesome/css/font-awesome.min.css';
import '../vendor/magnific-popup/magnific-popup.css';
import '../index.css';  
  import NavBar from './navbar';
  import NewsFeed from './newsfeed';
  import Footer from './footer';
  
  
var Main = (props) => {
  return (
    <div>         
      <NavBar/>
      <NewsFeed/>
      {props.children}
      <Footer/>
    </div>
  );
};

module.exports = Main;
