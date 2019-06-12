import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './component/layout/navbar'
import Dashboard from './component/dashboard/dashboard';
import projectDetails from './component/project/projectDetails';

 

function App() {
  return (
    <BrowserRouter>
        
    <div className="App">
    <Navbar />
   
    <Switch>
      <Route exact path = '/' component = {Dashboard} />
      <Route path = '/project/:id' component = {projectDetails} />
    </Switch>
  
    </div>



    </BrowserRouter>
  );
}

export default App;
