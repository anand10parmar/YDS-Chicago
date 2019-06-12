import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './component/layout/navbar'
import Dashboard from './component/dashboard/dashboard';
import projectDetails from './component/project/projectDetails';
import signIn from './component/auth/signIn';
import signUp from './component/auth/signUp';

 

function App() {
  return (
    <BrowserRouter>
        
    <div className="App">
    <Navbar />
   
    <Switch>
      <Route exact path = '/' component = {Dashboard} />
      <Route path = '/project/:id' component = {projectDetails} />
      <Route path = '/signin' component = {signIn} />
      <Route path = '/signUp' component = {signUp} />
    </Switch>
  
    </div>



    </BrowserRouter>
  );
}

export default App;
