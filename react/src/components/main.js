import React from 'react';
import '../index.css';
import Header from './header';
import NavBar from './navbar';
import Footer from './footer';
var Main = (props) => {
  return (
    <div>
      <Header/>
      <NavBar/>
      {props.children}
      <Footer/>
    </div>
  );
};

module.exports = Main;
