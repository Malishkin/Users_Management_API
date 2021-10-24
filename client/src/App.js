import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './layout/Navbar';
import { Landing } from './layout/Landing';
import { MainPage } from './dashboard/MainPage';
import { AddUser } from './dashboard/AddUser';
import { UpdateUser } from './dashboard/UpdateUser';
import './App.css';

const App = ()=>  {
  return (

    <Router>
    <Fragment>
      
    <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>   
            
            
            <Route exact path='/users' component={MainPage} />
            <Route path='/adduser' component={AddUser} />
            <Route path='/updateuser/:id' component={UpdateUser} />
           
            
            
            


          </Switch>
        </section>
    </Fragment></Router>
  );
}

export default App;
