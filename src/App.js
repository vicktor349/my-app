import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Contacts from './components/pages/Contacts'
import CV from './components/pages/CV'
import Certificates from './components/pages/Certificates'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="page-contents">
      <Router>
        <Navbar />
        <Route exact path ='/' component={Home} />
        <Route exact path='/contacts' component={Contacts}/>
        <Route exact path='/cv' component={CV}/>
        <Route exact path='/certificates' component={Certificates}/>
      </Router>
    </div>
  );
}
 
export default App;