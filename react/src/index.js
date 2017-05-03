import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NavBar from './components/navbar';
import Footer from './components/footer';

import './index.css';

ReactDOM.render(
<div>
  <Header/>
  <NavBar/>
  <Footer/>
</div>,
  document.getElementById('container')
);
