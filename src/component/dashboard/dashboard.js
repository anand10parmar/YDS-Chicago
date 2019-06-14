import React, {Component} from 'react';
import ProjectList from '../project/projectList';
import Notification from './notification'
class Dashboard extends Component {

render() {


        return(

        <div className="dashboard container">
        <div className="row">
                <div className= "col s12 m6">
             
             <ProjectList></ProjectList>
                </div>
                <div className= "col s12 m5 offset-m1">
                <Notification></Notification>
                </div>
        </div>
        </div>    
        );
    }
}

export default Dashboard
