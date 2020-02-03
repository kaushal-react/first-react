import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
          <switch>
            <Route path="/" exact  component= {Home} />
            <Route path="/About" component= {About} />
            <Route path="/Contact" component= {Contact} />
          </switch>
      </div>    
      </BrowserRouter>
  );
}

const Home = () => {
  return(
    <div>
      <h1>This is a home page</h1>
    </div>
  )
}

export default App;
