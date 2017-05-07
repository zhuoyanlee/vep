import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
  import Home from './components/home';
  import About from './components/about';
  import Resources from './components/resources';
  import Awards from './components/awards';
  import Contact from './components/contact';
  import NavBar from './components/navbar';
  import NewsFeed from './components/newsfeed';
  import Footer from './components/footer';
    import './vendor/bootstrap/css/bootstrap.min.css';
    import './vendor/font-awesome/css/font-awesome.min.css';
    import './vendor/magnific-popup/magnific-popup.css';
    import './index.css';

ReactDOM.render(

  <BrowserRouter>
    <div>
      <NavBar/>
      <NewsFeed/>
        <Switch>
          <Route path = "/about" component = {About}/>
          <Route path = "/resources" component = {Resources}/>
          <Route path = "/awards" component = {Awards}/>
          <Route path = "/contact" component = {Contact}/>
          <Route path = "/" component = {Home}/>
        </Switch>
      <Footer/>
    </div>
  </BrowserRouter>,

  document.getElementById('container')
);
