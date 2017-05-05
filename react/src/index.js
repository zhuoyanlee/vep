import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
  import Main from './components/main';
  import Home from './components/home';
  import About from './components/about';
  import Resources from './components/resources';
  import Awards from './components/awards';
  import Contact from './components/contact';




ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path = "/" component = {Main}>
    <Route path = "about" component = {About}/>
    <Route path = "resources" component = {Resources}/>
    <Route path = "awards" component = {Awards}/>
    <Route path = "contact" component = {Contact}/>
    <IndexRoute component = {Home}/>


    </Route>
  </Router>,

  document.getElementById('container')
);
