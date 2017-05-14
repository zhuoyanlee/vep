import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
//Components
  import Home from './components/home';
  import About from './components/about';
  import Veterans from './components/veterans';
  import Awards from './components/awards';
  import Contact from './components/contact';
  import NavBar from './components/navbar';
  import NewsFeed from './components/newsfeed';
  import Footer from './components/footer';
  import IAC from './components/iac';
  import Employers from './components/employers';
  import store from './store.js';
  //CSS
    import './vendor/bootstrap/css/bootstrap.min.css';
    import './vendor/font-awesome/css/font-awesome.min.css';
    import './vendor/magnific-popup/magnific-popup.css';
    import './vendor/googleFonts/merriWeather.css';
    import './vendor/googleFonts/openSans.css';
    import './vendor/googleFonts/oswald.css';
    import './index.css';
  //JavaScript
    import 'bootstrap/dist/js/bootstrap';
    import './js/navbar.js';
    import './js/navbar2.js';

//not used
//import './js/sidebar.js';
//import './js/creative.min.js';
//import './vendor/magnific-popup/jquery.magnific-popup.min.js';
//import './vendor/scrollreveal/scrollreveal.min.js';
//import {jquery} from 'jquery';
ReactDOM.render(

  <BrowserRouter>
    <div>
      <NavBar/>
      <NewsFeed/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/employers" component={Employers}/>
          <Route path="/about" component={About}/>
          <Route path="/iac" component={IAC}/>
          <Route path="/veterans" component={Veterans}/>
          <Route path="/awards" component={Awards}/>
         <Provider store={ store }>
          <Route path="/contact" component={Contact}/>
         </Provider>

        </Switch>
      <Footer/>
    </div>
  </BrowserRouter>,

  document.getElementById('container')
);
