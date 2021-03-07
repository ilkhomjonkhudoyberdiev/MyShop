import './App.css';
import React from 'react';
import Nav from './Nav';
import Shop from './Shop'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './About';
import Item from './itemDetail'
function App() {

  return ( 
<Router>
     <div className="App">
     <Nav/>
     <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/shop/:id" component={Item}/>
     </Switch>
     </div>
 </Router>
  );
}


const Home = () => {
  return(
    <div>
    <h1>Home Page</h1>
    <p>Please go to the Shop page</p>
    </div>
  )

}


export default App;
