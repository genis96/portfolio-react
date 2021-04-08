import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
// import Home from './components/Home/Button'
// import AboutMe from './components/AboutMe'
// import Portfolio from './components/Portfolio'
// import Contact from './components/Contact'
// import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Redirect exact from="/" to="/Home" />
          {/* <Route path="/" exact component={AboutMe}/>
          <Route path="/" exact component={Portfolio}/>
          <Route path="/" exact component={Skills}/>
          <Route path="/" exact component={Contact}/> */}
        </Switch>
          <Footer />
      </Router>
    </>
  );
}

export default App;
